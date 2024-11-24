import {customAxios} from "./index.ts";

interface GetMeetingRoomsResponse {
    name: string,
    spaceImageUrl: string,
    location: string,
    operatingTime: string, // ex. 10:00 ~ 21:00 (평일)\n09:00 ~ 15:00 (토요일)
    capacity: string, // ex. 3 ~ 8
    reservationUrl: string,
}

export interface GetMeetingRoomsParams {
    startDateTime: string;
    endDateTime: string;
}

export const getMeetingRooms = async (params: GetMeetingRoomsParams) => {
    try {
        const {data} = await customAxios.get<GetMeetingRoomsResponse[]>(
            '/meetingrooms',
            {
                params,
                headers: {skipAuth: true}
            },
        );
        return data;
    } catch { /* empty */ }
}