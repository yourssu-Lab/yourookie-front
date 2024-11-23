import { customAxios } from ".";

interface Reservation {
  id: number;
  name: string;
  startDateTime: string;
  endDateTime: string;
}

export const getReservationInfo = async (
  spaceId: number,
  date: string
): Promise<Reservation[]> => {
  const { data } = await customAxios.get<Reservation[]>(
    `/spaces/${spaceId}/reservations`,
    {
      params: { date },
      headers: {
        skipAuth: true,
      },
    }
  );

  return data;
};
