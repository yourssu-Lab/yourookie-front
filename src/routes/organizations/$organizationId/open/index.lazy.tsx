import { createLazyFileRoute } from "@tanstack/react-router";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { SpaceFormData } from "../../../../types/space.type";
import {
  StyledAdd,
  StyledAddButton,
  StyledButton,
  StyledButtonWrapper,
  StyledContainer,
  StyledContents,
  StyledFieldGroup,
  StyledForm,
  StyledImageInput,
  StyledImageSection,
  StyledImageUploadBox,
  StyledInput,
  StyledLabel,
  StyledPlaceholder,
  StyledRow,
  StyledTimeContainer,
  StyledTimeInput,
  StyledTitle,
} from "./-index.style";

export const Route = createLazyFileRoute(
  "/organizations/$organizationId/open/"
)({
  component: RouteComponent,
});

function RouteComponent() {
  const imageInputRef = useRef<HTMLInputElement | null>(null);
  const { register, handleSubmit, watch, setValue } = useForm<SpaceFormData>({
    defaultValues: {
      name: "",
      location: "",
      openTime: "",
      closeTime: "",
      capacity: "",
      images: [],
    },
  });

  const images = watch("images") || [];

  const onSubmit = (data: SpaceFormData) => {
    console.log(data);
  };

  const handleImageUpload = () => {
    imageInputRef.current?.click();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length + images.length > 3) {
      alert("최대 3장까지만 업로드할 수 있습니다.");
      return;
    }
    setValue("images", [...images, ...files]);
  };

  // const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const files = Array.from(e.target.files || []);
  //   setValue("images", [...images, ...files]);
  // };

  return (
    <StyledContainer onSubmit={handleSubmit(onSubmit)}>
      <StyledTitle>공간 생성</StyledTitle>

      <StyledForm>
        <StyledRow>
          <StyledFieldGroup>
            <StyledLabel>공간명</StyledLabel>
            <StyledInput
              {...register("name", { required: true })}
              placeholder="공간명을 입력하세요"
            />
          </StyledFieldGroup>

          <StyledFieldGroup>
            <StyledLabel>공간 위치</StyledLabel>
            <StyledInput
              {...register("location", { required: true })}
              placeholder="공간의 위치를 입력하세요"
            />
          </StyledFieldGroup>
        </StyledRow>

        <StyledRow>
          <StyledFieldGroup>
            <StyledLabel>공간 사용 가능 시간</StyledLabel>
            <StyledTimeContainer>
              <StyledTimeInput
                type="time"
                {...register("openTime", { required: true })}
                placeholder="오픈 시간을 선택하세요"
              />
              <span>~</span>
              <StyledTimeInput
                type="time"
                {...register("closeTime", { required: true })}
                placeholder="종료 시간을 선택하세요"
              />
            </StyledTimeContainer>
          </StyledFieldGroup>
          <StyledFieldGroup>
            <StyledLabel>수용 가능 인원</StyledLabel>
            <StyledInput
              {...register("capacity", { required: true })}
              placeholder="수용 가능 인원을 입력하세요"
            />
          </StyledFieldGroup>
        </StyledRow>

        <StyledFieldGroup>
          <StyledLabel>공간 사진</StyledLabel>
          {images.length > 0 ? (
            <StyledImageSection>
              {images.map((image, index) => (
                <StyledImageUploadBox key={index} $isMain={index === 0}>
                  <img
                    src={URL.createObjectURL(image)}
                    alt={`공간 사진 ${index + 1}`}
                  />
                </StyledImageUploadBox>
              ))}
              {images.length < 3 && (
                <StyledAddButton onClick={handleImageUpload}>+</StyledAddButton>
              )}
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
              register("images").ref(e);
            }}
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageChange}
          />
        </StyledFieldGroup>

        <StyledButtonWrapper>
          <StyledButton type="submit">생성</StyledButton>
        </StyledButtonWrapper>
      </StyledForm>
    </StyledContainer>
  );
}
