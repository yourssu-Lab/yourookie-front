import { useQuery } from "@tanstack/react-query";
import { createLazyFileRoute } from "@tanstack/react-router";
import dayjs from "dayjs";
import { useState } from "react";
import { ReservationStateCard } from "../../../-components/ReservationStateCard/ReservationStateCard";
import { getReservationsTime } from "../../../../api/getReservationInfoTime";
import { StyledContainer, StyledGrid, StyledTitle } from "./-index.style";

export const Route = createLazyFileRoute("/Reservation/$spaceId/state/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { spaceId } = Route.useParams();
  const [selectedCardId, setSelectedCardId] = useState<number | null>(null);

  const currentDate = dayjs().format("YYYY-MM-DDTHH:mm:00");

  const { data: reservations = [] } = useQuery({
    queryKey: ["reservations", spaceId, currentDate],
    queryFn: () => getReservationsTime(Number(spaceId), currentDate),
    enabled: !!spaceId,
  });

  console.log(reservations);

  const handleCardSelect = (id: number) => {
    setSelectedCardId(selectedCardId === id ? null : id);
  };

  return (
    <StyledContainer>
      <StyledTitle>공간 예약 현황 조회</StyledTitle>
      <StyledGrid>
        {reservations.length > 0 ? (
          reservations.map((reservation) => (
            <ReservationStateCard
              key={reservation.id}
              {...reservation}
              isSelected={selectedCardId === reservation.id}
              onCardSelect={() => handleCardSelect(reservation.id)}
            />
          ))
        ) : (
          <div>예약된 내역이 없습니다.</div>
        )}
      </StyledGrid>
    </StyledContainer>
  );
}
