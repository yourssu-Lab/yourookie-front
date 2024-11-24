import {useQuery} from "@tanstack/react-query";
import {getMeetingRooms, GetMeetingRoomsParams} from "../api/getMeetingRooms.ts";

export const useGetMeetingRooms = ({startDateTime, endDateTime}: GetMeetingRoomsParams) => {
    return useQuery({
        queryKey: ['meetingRooms', startDateTime, endDateTime],
        queryFn: () => getMeetingRooms({startDateTime, endDateTime}),
    })
}