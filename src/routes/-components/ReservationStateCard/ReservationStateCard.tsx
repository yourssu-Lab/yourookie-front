import dayjs from "dayjs";
import { useState } from "react";
import Modal from "react-modal";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteReservation } from "../../../api/deleteReservation";
import { getOneSpace } from "../../../api/getOneSpace";
import { SmallModalStyles } from "../../../styles/editModal";
import { formatTime } from "../../../utils/formatTime";
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
  spaceId: number;
  startDateTime: string;
  endDateTime: string;
  isSelected: boolean;
  onCardSelect: () => void;
}

export const ReservationStateCard = ({
  id,
  spaceId,
  startDateTime,
  endDateTime,
  isSelected,
  onCardSelect,
}: ReservationStateCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [password, setPassword] = useState("");
  const queryClient = useQueryClient();

  const { data: space } = useQuery({
    queryKey: ["space", spaceId],
    queryFn: () => getOneSpace(spaceId),
    enabled: !!spaceId,
  });

  const deleteMutation = useMutation({
    mutationFn: (password: string) => deleteReservation(id, password),
    onSuccess: () => {
      setIsModalOpen(false);
      queryClient.invalidateQueries({
        queryKey: ["reservations"],
      });
    },
    onError: () => {
      alert("비밀번호가 일치하지 않습니다");
    },
    onSettled: () => {
      setPassword("");
    },
  });

  const date = dayjs(startDateTime).format("YYYY.MM.DD");
  const time = `${dayjs(startDateTime).format("HH:mm")}~${dayjs(endDateTime).format("HH:mm")}`;

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsModalOpen(true);
  };

  const handleConfirm = () => {
    if (!password) {
      alert("비밀번호를 입력해주세요");
      return;
    }
    deleteMutation.mutate(password);
  };

  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <StyledContainer onClick={onCardSelect}>
      <StyledImageSection>
        <img src={space?.spaceImageUrl} alt={space?.name} />
      </StyledImageSection>

      <StyledInfoSection>
        <StyledTitle>{space?.name}</StyledTitle>
        <StyledInfoText>{space?.location}</StyledInfoText>
        <StyledInfoText>
          {`${formatTime(space?.openingTime || "")} ~ ${formatTime(space?.closingTime || "")}`}
        </StyledInfoText>
        <StyledInfoText>최대 {space?.capacity}명</StyledInfoText>
      </StyledInfoSection>

      <StyledReservationSection>
        <StyledReservationInfo>{date}</StyledReservationInfo>
        <StyledReservationInfo>{time}</StyledReservationInfo>
        {isSelected && (
          <StyledButton
            onClick={handleDelete}
            disabled={deleteMutation.isPending}
          >
            삭제
          </StyledButton>
        )}
      </StyledReservationSection>
      <div onClick={handleModalClick}>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={() => {
            if (!deleteMutation.isPending) {
              setIsModalOpen(false);
              setPassword("");
            }
          }}
          style={SmallModalStyles}
          contentLabel="비밀번호 입력"
        >
          <StyledModalTitle>비밀번호</StyledModalTitle>
          <StyledModalInput
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="예약 시 입력한 개인 비밀번호를 입력하세요"
            disabled={deleteMutation.isPending}
          />
          <StyledModalButton
            onClick={handleConfirm}
            disabled={deleteMutation.isPending}
          >
            {deleteMutation.isPending ? "처리 중..." : "확인"}
          </StyledModalButton>
        </Modal>
      </div>
    </StyledContainer>
  );
};
