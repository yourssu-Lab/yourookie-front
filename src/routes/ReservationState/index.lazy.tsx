import { createLazyFileRoute } from "@tanstack/react-router";
import { ReservationStateCard } from "../-components/ReservationStateCard/ReservationStateCard";
import { mockDateReservations } from "../../mock/reservationData";
import { StyledContainer, StyledGrid, StyledTitle } from "./-index.style";

export const Route = createLazyFileRoute("/ReservationState/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <StyledContainer>
      <StyledTitle>공간 예약 현황 조회</StyledTitle>
      <StyledGrid>
        {mockDateReservations.map((reservation) => (
          <ReservationStateCard key={reservation.id} {...reservation} />
        ))}
      </StyledGrid>
    </StyledContainer>
  );
}
