import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { createLazyFileRoute, useNavigate } from '@tanstack/react-router';
import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import Modal from 'react-modal';
import { getOneSpace } from '../../../../../api/getOneSpace';
import { patchSpace, SpaceFormData, UpdateSpaceParams } from '../../../../../api/patchSpace';
import Logo from '../../../../../assets/spacer_logo_blue.svg';
import { modalStyles } from '../../../../../styles/editModal';
import {
  StyledButton,
  StyledButtonWrapper,
  StyledCheckbox,
  StyledCheckboxLabel,
  StyledCheckboxWrapper,
  StyledContainer,
  StyledDetailLabel,
  StyledFieldGroup,
  StyledHeaderRow,
  StyledImageInput,
  StyledImageRow,
  StyledImageUpload,
  StyledInput,
  StyledLabel,
  StyledLabelRow,
  StyledLogoWrapper,
  StyledRow,
  StyledTimeContainer,
  StyledTimeInput,
  StyledTitle,
} from './-index.style';

export const Route = createLazyFileRoute('/organizations/$organizationId/spaceEdit/$spaceId/')({
  component: RouteComponent,
});

function RouteComponent() {
  const { organizationId, spaceId } = Route.useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [is24Hours, setIs24Hours] = useState(false);

  const { data: space } = useQuery({
    queryKey: ['space', spaceId],
    queryFn: () => getOneSpace(Number(spaceId)),
  });

  const updateSpaceMutation = useMutation({
    mutationFn: (data: SpaceFormData) =>
      patchSpace(Number(spaceId), data as unknown as UpdateSpaceParams),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['space', spaceId] });
      closeModal();
    },
  });
  const closeModal = () => {
    navigate({
      to: '/organizations/$organizationId',
      params: { organizationId },
    });
  };

  const imageInputRef = useRef<HTMLInputElement | null>(null);
  const { register, handleSubmit, setValue, watch } = useForm<SpaceFormData>({
    defaultValues: {
      name: '',
      location: '',
      openingTime: '',
      closingTime: '',
      capacity: 0,
      image: null,
    },
  });

  const image = watch('image');

  useEffect(() => {
    if (space) {
      setValue('name', space.name);
      setValue('location', space.location);

      const is24HoursOperation =
        space.openingTime.slice(0, 5) === '00:00' && space.closingTime.slice(0, 5) === '23:59';
      setIs24Hours(is24HoursOperation);

      setValue('openingTime', space.openingTime.slice(0, 5));
      setValue('closingTime', space.closingTime.slice(0, 5));
      setValue('capacity', space.capacity);
    }
  }, [space, setValue]);

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

  const onSubmit = (data: SpaceFormData) => {
    const updatedData = {
      name: data.name,
      location: data.location,
      openingTime: is24Hours ? '00:00' : data.openingTime,
      closingTime: is24Hours ? '23:59' : data.closingTime,
      capacity: Number(data.capacity),
      ...(data.image && { image: data.image }),
    };

    console.log('Updating with:', updatedData);
    updateSpaceMutation.mutate(updatedData);
  };

  const handleImageUploadClick = () => {
    if (imageInputRef.current) {
      imageInputRef.current.click();
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setValue('image', file);
  };

  return (
    <Modal
      isOpen={true}
      onRequestClose={closeModal}
      style={modalStyles}
      contentLabel="공간 정보 수정"
    >
      <StyledContainer onSubmit={handleSubmit(onSubmit)}>
        <StyledHeaderRow>
          <StyledTitle>공간 정보 수정</StyledTitle>
          <StyledLogoWrapper>
            <img src={Logo} alt="단체 로고" />
          </StyledLogoWrapper>
        </StyledHeaderRow>

        <StyledFieldGroup>
          <StyledLabel>공간명</StyledLabel>
          <StyledInput
            {...register('name', { required: true })}
            placeholder="공간명을 입력하세요"
          />
        </StyledFieldGroup>

        <StyledRow>
          <StyledFieldGroup>
            <StyledLabel>공간 위치</StyledLabel>
            <StyledInput
              {...register('location', { required: true })}
              placeholder="공간의 위치를 입력하세요"
            />
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
          <StyledImageRow>
            <StyledLabel>공간 사진</StyledLabel>
            <StyledImageUpload onClick={handleImageUploadClick}>
              파일 선택
              <StyledImageInput
                ref={(e) => {
                  imageInputRef.current = e;
                  register('image').ref(e);
                }}
                id="imageInput"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </StyledImageUpload>
          </StyledImageRow>
          <StyledInput
            value={image ? image.name : '파일을 첨부하세요'}
            readOnly
            placeholder="파일을 첨부하세요"
          />
        </StyledFieldGroup>
        <StyledButtonWrapper>
          <StyledButton type="submit">수정</StyledButton>
        </StyledButtonWrapper>
      </StyledContainer>
    </Modal>
  );
}
