import { createLazyFileRoute } from "@tanstack/react-router";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { SpaceFormData } from "../../../../types/space.type";
import {
  StyledAdd,
  StyledButton,
  StyledContainer,
  StyledFieldGroup,
  StyledForm,
  StyledImage,
  StyledImageInput,
  StyledImageUpload,
  StyledInput,
  StyledLabel,
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
      image: null,
    },
  });

  const imageFile = watch("image");

  const onSubmit = (data: SpaceFormData) => {
    console.log(data);
  };

  const handleImageUploadClick = () => {
    if (imageInputRef.current) {
      imageInputRef.current.click();
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setValue("image", file);
  };

  return (
    <StyledContainer onSubmit={handleSubmit(onSubmit)}>
      <StyledTitle>공간 오픈</StyledTitle>

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
            <StyledLabel>시간 입력</StyledLabel>
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
          <StyledLabel>공간사진</StyledLabel>
          <StyledImageUpload onClick={handleImageUploadClick}>
            {imageFile ? (
              <StyledImage
                src={URL.createObjectURL(imageFile)}
                alt="단체 사진"
              />
            ) : (
              <StyledAdd>+</StyledAdd>
            )}
            <StyledImageInput
              ref={(e) => {
                imageInputRef.current = e;
                register("image").ref(e);
              }}
              id="imageInput"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
          </StyledImageUpload>
        </StyledFieldGroup>
        <StyledButton type="submit">생성</StyledButton>
      </StyledForm>
    </StyledContainer>
  );
}
