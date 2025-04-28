import { useMutation } from '@tanstack/react-query';
import { createLazyFileRoute, useNavigate } from '@tanstack/react-router';
import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { postOpen, SpaceParams } from '../../../../api/postOpen';
import { useLoginState } from '../../../../hooks/useLoginState';
import { SpaceFormData } from '../../../../types/space.type';
import {
  StyledAdd,
  StyledButton,
  StyledButtonWrapper,
  StyledCheckbox,
  StyledCheckboxLabel,
  StyledCheckboxWrapper,
  StyledContainer,
  StyledContents,
  StyledDetailLabel,
  StyledFieldGroup,
  StyledForm,
  StyledImageInput,
  StyledImageSection,
  StyledImageUploadBox,
  StyledInput,
  StyledLabel,
  StyledLabelRow,
  StyledPlaceholder,
  StyledRow,
  StyledTimeContainer,
  StyledTimeInput,
  StyledTitle,
} from './-index.style';

export const Route = createLazyFileRoute('/organizations/$organizationId/open/')({
  component: RouteComponent,
});

function RouteComponent() {
  const { organizationId } = Route.useParams();
  const navigate = useNavigate();
  const { isLoggedIn } = useLoginState();
  const [is24Hours, setIs24Hours] = useState(false);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate({ to: '/' });
    }
  }, [isLoggedIn, navigate]);

  const imageInputRef = useRef<HTMLInputElement | null>(null);
  const { register, handleSubmit, watch, setValue } = useForm<SpaceFormData>({
    defaultValues: {
      name: '',
      location: '',
      openingTime: '',
      closingTime: '',
      capacity: '',
      image: null,
    },
  });

  const image = watch('image');

  const mutation = useMutation({
    mutationFn: (data: SpaceParams) => postOpen(data),
    onSuccess: () => {
      navigate({
        to: '/organizations/$organizationId',
        params: { organizationId },
      });
    },
    onError: (error) => {
      console.error('공간 생성 실패:', error);
      alert('공간 생성에 실패했습니다. 다시 시도해주세요.');
    },
  });

  const onSubmit = (data: SpaceFormData) => {
    const spaceParams: SpaceParams = {
      name: data.name,
      location: data.location,
      openingTime: is24Hours ? '00:00' : data.openingTime,
      closingTime: is24Hours ? '23:59' : data.closingTime,
      capacity: Number(data.capacity),
      image: data.image,
    };

    mutation.mutate(spaceParams);
  };

  const handleImageUpload = () => {
    imageInputRef.current?.click();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setValue('image', file);
  };

  const handle24HoursToggle = () => {
    setIs24Hours(!is24Hours);
    if (!is24Hours) {
      setValue('openingTime', '00:00');
      setValue('closingTime', '23:59');
    } else {
      setValue('openingTime', '');
      setValue('closingTime', '');
    }
  };

  return (
    <StyledContainer onSubmit={handleSubmit(onSubmit)}>
      <StyledTitle>공간 생성</StyledTitle>

      <StyledForm>
        <StyledRow>
          <StyledFieldGroup>
            <StyledLabel>공간명</StyledLabel>
            <StyledInput
              {...register('name', { required: true })}
              placeholder="공간명을 입력하세요"
            />
          </StyledFieldGroup>

          <StyledFieldGroup>
            <StyledLabel>공간 위치</StyledLabel>
            <StyledInput
              {...register('location', { required: true })}
              placeholder="공간의 위치를 입력하세요"
            />
          </StyledFieldGroup>
        </StyledRow>

        <StyledRow>
          <StyledFieldGroup>
            <StyledLabelRow>
              <StyledLabel>공간 사용 가능 시간</StyledLabel>
              <StyledCheckboxWrapper>
                <StyledCheckbox
                  type="checkbox"
                  id="is24Hours"
                  checked={is24Hours}
                  onChange={handle24HoursToggle}
                />
                <StyledCheckboxLabel htmlFor="is24Hours">24시간 운영</StyledCheckboxLabel>
              </StyledCheckboxWrapper>
            </StyledLabelRow>
            {!is24Hours ? (
              <StyledTimeContainer>
                <StyledTimeInput
                  type="time"
                  step="1800"
                  {...register('openingTime', { required: !is24Hours })}
                  placeholder="오픈 시간을 선택하세요"
                  disabled={is24Hours}
                />
                <span>~</span>
                <StyledTimeInput
                  type="time"
                  step="1800"
                  {...register('closingTime', { required: !is24Hours })}
                  placeholder="종료 시간을 선택하세요"
                  disabled={is24Hours}
                />
              </StyledTimeContainer>
            ) : (
              <StyledDetailLabel>24시간 운영됩니다 (00:00 ~ 23:59)</StyledDetailLabel>
            )}
          </StyledFieldGroup>
          <StyledFieldGroup>
            <StyledLabel>수용 가능 인원</StyledLabel>
            <StyledInput
              {...register('capacity', { required: true })}
              placeholder="수용 가능 인원을 입력하세요"
            />
          </StyledFieldGroup>
        </StyledRow>

        <StyledFieldGroup>
          <StyledLabel>공간 사진</StyledLabel>
          {image ? (
            <StyledImageSection>
              <StyledImageUploadBox>
                <img src={URL.createObjectURL(image)} alt="공간 사진" />
              </StyledImageUploadBox>
            </StyledImageSection>
          ) : (
            <StyledImageUploadBox $isEmpty onClick={handleImageUpload}>
              <StyledContents>
                <StyledPlaceholder>사진을 추가해주세요</StyledPlaceholder>
                <StyledAdd>+</StyledAdd>
              </StyledContents>
            </StyledImageUploadBox>
          )}
          <StyledImageInput
            ref={(e) => {
              imageInputRef.current = e;
              register('image').ref(e);
            }}
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
        </StyledFieldGroup>

        <StyledButtonWrapper>
          <StyledButton type="submit" disabled={mutation.isPending}>
            생성
          </StyledButton>
        </StyledButtonWrapper>
      </StyledForm>
    </StyledContainer>
  );
}
