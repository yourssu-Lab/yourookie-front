import { customAxios } from ".";

interface Reservation {
  id: number;
  name: string;
  startDateTime: string;
  endDateTime: string;
}

export const getReservationsTime = async (spaceId: number, time: string) => {
  const { data } = await customAxios.get<Reservation[]>(
    `/spaces/${spaceId}/reservations`,
    {
      params: { time },
      headers: {
        skipAuth: true,
      },
    }
  );

  return data;
};
