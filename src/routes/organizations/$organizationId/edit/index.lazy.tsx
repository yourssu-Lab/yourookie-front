import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import Logo from "../../../../assets/OPENSSUpot.svg";
import { modalStyles } from "../../../../styles/editModal";

import {
  StyledButton,
  StyledButtonWrapper,
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
  StyledTagRow,
  StyledTitle,
} from "./-index.style";

export const Route = createLazyFileRoute(
  "/organizations/$organizationId/edit/"
)({
  component: RouteComponent,
});

interface GroupFormData {
  name: string;
  secretNumber: string;
  description: string;
  image: File | null;
  tags: string[];
}

function RouteComponent() {
  const { organizationId } = Route.useParams();
  const navigate = useNavigate();

  const closeModal = () => {
    navigate({
      to: "/organizations/$organizationId",
      params: { organizationId },
    });
  };

  const imageInputRef = useRef<HTMLInputElement | null>(null);
  const { register, handleSubmit, setValue } = useForm<GroupFormData>({
    defaultValues: {
      name: "",
      secretNumber: "",
      description: "",
      image: null,
      tags: [],
    },
  });

  // const image = watch("image");

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
    <Modal
      isOpen={true}
      onRequestClose={closeModal}
      style={modalStyles}
      contentLabel="단체 정보 수정"
    >
      <StyledContainer onSubmit={handleSubmit(onSubmit)}>
        <StyledHeaderRow>
          <StyledTitle>단체 정보 수정</StyledTitle>
          <StyledLogoWrapper>
            <img src={Logo} alt="단체 로고" />
          </StyledLogoWrapper>
        </StyledHeaderRow>
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
              구성원들이 공간을 예약할 때 사용하는 비밀번호입니다
            </StyledDetailLabel>
          </StyledLabelRow>
          <StyledInput
            {...register("description", { required: true })}
            placeholder="단체에 대한 설명을 입력하세요"
          />
        </StyledFieldGroup>
        <StyledFieldGroup>
          <StyledImageRow>
            <StyledLabel>공간 사진</StyledLabel>
            <StyledImageUpload onClick={handleImageUploadClick}>
              파일 선택
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
          </StyledImageRow>
          <StyledInput
            value={"image"}
            readOnly
            placeholder="파일을 첨부하세요"
          />
        </StyledFieldGroup>
        <StyledFieldGroup>
          <StyledLabel>해시태그</StyledLabel>
          <StyledTagRow>
            <StyledInput {...register("tags.0")} placeholder="해시태그1" />
            <StyledInput {...register("tags.1")} placeholder="해시태그2" />
            <StyledInput {...register("tags.2")} placeholder="해시태그3" />
          </StyledTagRow>
        </StyledFieldGroup>

        <StyledButtonWrapper>
          <StyledButton type="submit">수정</StyledButton>
        </StyledButtonWrapper>
      </StyledContainer>
    </Modal>
  );
}
