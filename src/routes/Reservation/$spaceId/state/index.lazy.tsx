import { useQuery } from '@tanstack/react-query';
import { createLazyFileRoute } from '@tanstack/react-router';
import dayjs from 'dayjs';
import { useState } from 'react';
import { ReservationStateCard } from '@/components/ReservationStateCard/ReservationStateCard';
import { getReservationsTime } from '../../../../api/getReservationInfoTime';
import { StyledContainer, StyledDivider, StyledGrid, StyledNoResults, StyledTitle } from './-index.style';
import { ReservationCalendar } from '@/components/ReservationCalendar/ReservationCalendar.tsx';

export const Route = createLazyFileRoute('/Reservation/$spaceId/state/')({
  component: RouteComponent,
});

function RouteComponent() {
  const { spaceId } = Route.useParams();

  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const currentDate = dayjs(selectedDate).format('YYYY-MM-DDTHH:mm:00');

  const { data: reservations = [] } = useQuery({
    queryKey: ['reservations', spaceId, currentDate],
    queryFn: () => getReservationsTime(Number(spaceId), currentDate),
    enabled: !!spaceId,
  });

  return (
    <StyledContainer>
      <StyledTitle>예약 현황 조회</StyledTitle>
      <ReservationCalendar selectedDate={selectedDate} onDateSelect={setSelectedDate} />
      <StyledDivider />
      <StyledGrid>
        {reservations.length > 0 ? (
          reservations.map((reservation) => (
            <ReservationStateCard
              key={reservation.id}
              spaceId={Number(spaceId)}
              {...reservation}
            />
          ))
        ) : (
          <StyledNoResults>예약된 내역이 없습니다.</StyledNoResults>
        )}
      </StyledGrid>
    </StyledContainer>
  );
}
