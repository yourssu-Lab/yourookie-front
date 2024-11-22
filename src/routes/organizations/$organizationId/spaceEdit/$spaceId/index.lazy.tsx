import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import Logo from "../../../../../assets/OPENSSUpot.svg";
import { modalStyles } from "../../../../../styles/editModal";
import { SpaceFormData } from "../../../../../types/space.type";
import {
  StyledButton,
  StyledButtonWrapper,
  StyledContainer,
  StyledFieldGroup,
  StyledHeaderRow,
  StyledImageInput,
  StyledImageRow,
  StyledImageUpload,
  StyledInput,
  StyledLabel,
  StyledLogoWrapper,
  StyledRow,
  StyledTimeContainer,
  StyledTimeInput,
  StyledTitle,
} from "./-index.style";

export const Route = createLazyFileRoute(
  "/organizations/$organizationId/spaceEdit/$spaceId/"
)({
  component: RouteComponent,
});

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

  const images = watch("images");

  const onSubmit = (data: SpaceFormData) => {
    console.log(data);
  };

  const handleImageUploadClick = () => {
    if (imageInputRef.current) {
      imageInputRef.current.click();
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length + images.length > 3) {
      alert("최대 3장까지만 업로드할 수 있습니다.");
      return;
    }
    setValue("images", [...images, ...files]);
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
            {...register("name", { required: true })}
            placeholder="공간명을 입력하세요"
          />
        </StyledFieldGroup>

        <StyledRow>
          <StyledFieldGroup>
            <StyledLabel>공간 위치</StyledLabel>
            <StyledInput
              {...register("location", { required: true })}
              placeholder="공간의 위치를 입력하세요"
            />
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
          <StyledImageRow>
            <StyledLabel>공간 사진</StyledLabel>
            <StyledImageUpload onClick={handleImageUploadClick}>
              파일 선택
              <StyledImageInput
                ref={(e) => {
                  imageInputRef.current = e;
                  register("images").ref(e);
                }}
                id="imageInput"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </StyledImageUpload>
          </StyledImageRow>
          <StyledInput
            value={images.map((file) => file.name).join(", ")}
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
