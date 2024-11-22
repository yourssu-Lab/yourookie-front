import dayjs from "dayjs";
import { useState } from "react";
import Modal from "react-modal";

import { SmallModalStyles } from "../../../styles/editModal";
import {
  StyledButton,
  StyledContainer,
  StyledImageSection,
  StyledInfoSection,
  StyledInfoText,
  StyledModalButton,
  StyledModalInput,
  StyledModalTitle,
  StyledReservationInfo,
  StyledReservationSection,
  StyledTitle,
} from "./ReservationStateCard.style";

interface ReservationStateCardProps {
  id: number;
  name: string;
  startDateTime: string;
  endDateTime: string;
  location?: string;
  maxCapacity?: number;
  operatingHours?: string;
  image?: string;
  secretNumber?: string;
  isSelected: boolean;
  onCardSelect: () => void;
}

export const ReservationStateCard = ({
  name,
  location,
  operatingHours,
  maxCapacity,
  startDateTime,
  endDateTime,
  image,
  secretNumber = "1234",
  isSelected,
  onCardSelect,
}: ReservationStateCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [password, setPassword] = useState("");

  const date = dayjs(startDateTime).format("YYYY.MM.DD");
  const time = `${dayjs(startDateTime).format("HH:mm")}~${dayjs(endDateTime).format("HH:mm")}`;

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsModalOpen(true);
  };

  const handleConfirm = () => {
    if (password === secretNumber) {
      alert("예약이 취소되었습니다");
      setIsModalOpen(false);
      // 여기에 예약 삭제 로직 추가
    } else {
      alert("비밀번호가 일치하지 않습니다");
    }
    setPassword("");
  };

  return (
    <StyledContainer onClick={onCardSelect}>
      <StyledImageSection>
        <img src={image} alt={name} />
      </StyledImageSection>

      <StyledInfoSection>
        <StyledTitle>{name}</StyledTitle>
        <StyledInfoText>{location}</StyledInfoText>
        <StyledInfoText>{operatingHours}</StyledInfoText>
        <StyledInfoText>최대 {maxCapacity}명</StyledInfoText>
      </StyledInfoSection>

      <StyledReservationSection>
        {isSelected && (
          <>
            <StyledReservationInfo>{date}</StyledReservationInfo>
            <StyledReservationInfo>{time}</StyledReservationInfo>
            <StyledButton onClick={handleDelete}>삭제</StyledButton>
          </>
        )}
      </StyledReservationSection>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => {
          setIsModalOpen(false);
          setPassword("");
        }}
        style={SmallModalStyles}
        contentLabel="비밀번호 입력"
      >
        <StyledModalTitle>비밀번호</StyledModalTitle>
        <StyledModalInput
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호를 입력하세요"
        />
        <StyledModalButton onClick={handleConfirm}>확인</StyledModalButton>
      </Modal>
    </StyledContainer>
  );
};
