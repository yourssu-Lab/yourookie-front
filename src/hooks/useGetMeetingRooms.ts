import { useQuery } from '@tanstack/react-query';
import { getMeetingRooms, GetMeetingRoomsParams } from '../api/getMeetingRooms';

export const useGetMeetingRooms = ({ startDateTime, endDateTime }: GetMeetingRoomsParams) => {
  return useQuery({
    gcTime: 0,
    staleTime: 0,
    queryKey: ['meetingRooms', startDateTime, endDateTime],
    queryFn: () => getMeetingRooms({ startDateTime, endDateTime }),
  });
};
