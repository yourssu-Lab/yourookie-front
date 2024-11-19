import { createLazyFileRoute } from "@tanstack/react-router";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import {
  StyledAdd,
  StyledButton,
  StyledContainer,
  StyledDetailLabel,
  StyledFieldGroup,
  StyledImage,
  StyledImageInput,
  StyledImageUpload,
  StyledInput,
  StyledLabel,
  StyledLabelRow,
  StyledTitle,
} from "./-edit.style";

export const Route = createLazyFileRoute("/organizations/$organizationId/edit")(
  {
    component: RouteComponent,
  }
);

interface GroupFormData {
  name: string;
  secretNumber: string;
  description: string;
  image: File | null;
}

function RouteComponent() {
  const imageInputRef = useRef<HTMLInputElement | null>(null);
  const { register, handleSubmit, watch, setValue } = useForm<GroupFormData>({
    defaultValues: {
      name: "",
      secretNumber: "",
      description: "",
      image: null,
    },
  });

  const imageFile = watch("image");

  const onSubmit = (data: GroupFormData) => {
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
      <StyledTitle>단체 정보 수정</StyledTitle>
      <StyledFieldGroup>
        <StyledLabel>단체명</StyledLabel>
        <StyledInput
          {...register("name", { required: true })}
          placeholder="단체명을 입력하세요"
        />
      </StyledFieldGroup>
      <StyledFieldGroup>
        <StyledLabel>단체 비밀번호</StyledLabel>
        <StyledInput
          type="password"
          autoComplete="off"
          {...register("secretNumber", { required: true })}
          placeholder="비밀번호를 입력하세요"
        />
      </StyledFieldGroup>
      <StyledFieldGroup>
        <StyledLabelRow>
          <StyledLabel>단체 설명</StyledLabel>
          <StyledDetailLabel>
            * 구성원들이 공간을 예약할 때 사용하는 비밀번호 입니다
          </StyledDetailLabel>
        </StyledLabelRow>
        <StyledInput
          {...register("description", { required: true })}
          placeholder="단체에 대한 설명을 입력하세요"
        />
      </StyledFieldGroup>
      <StyledFieldGroup>
        <StyledLabel>공간사진</StyledLabel>
        <StyledImageUpload onClick={handleImageUploadClick}>
          {imageFile ? (
            <StyledImage src={URL.createObjectURL(imageFile)} alt="단체 사진" />
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
      <StyledButton type="submit">수정</StyledButton>
    </StyledContainer>
  );
}
