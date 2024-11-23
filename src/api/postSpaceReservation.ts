import { customAxios } from ".";

export interface SpaceReservationRequest {
  name: string;
  startDateTime: string;
  endDateTime: string;
  password: string;
  personalPassword: string;
}

export interface SpaceReservationResponse {
  location: string;
}

export const postSpaceReservation = async (
  spaceId: number,
  reservationData: SpaceReservationRequest
): Promise<SpaceReservationResponse> => {
  const response = await customAxios.post(
    `/spaces/${spaceId}/reservations`,
    reservationData,
    {
      headers: {
        skipAuth: true,
      },
    }
  );

  const location = response.headers.location;

  return { location };
};
