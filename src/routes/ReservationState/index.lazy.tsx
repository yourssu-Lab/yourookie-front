// import { createLazyFileRoute } from "@tanstack/react-router";
// import { useState } from "react";
// import { ReservationStateCard } from "../-components/ReservationStateCard/ReservationStateCard";
// import { mockDateReservations } from "../../mock/reservationData";
// import { StyledContainer, StyledGrid, StyledTitle } from "./-index.style";

// export const Route = createLazyFileRoute("/ReservationState/")({
//   component: RouteComponent,
// });

// function RouteComponent() {
//   const [selectedCardId, setSelectedCardId] = useState<number | null>(null);

//   const handleCardSelect = (id: number) => {
//     setSelectedCardId(selectedCardId === id ? null : id);
//   };

//   return (
//     <StyledContainer>
//       <StyledTitle>공간 예약 현황 조회</StyledTitle>
//       <StyledGrid>
//         {mockDateReservations.map((reservation) => (
//           <ReservationStateCard
//             key={reservation.id}
//             {...reservation}
//             isSelected={selectedCardId === reservation.id}
//             onCardSelect={() => handleCardSelect(reservation.id)}
//           />
//         ))}
//       </StyledGrid>
//     </StyledContainer>
//   );
// }
