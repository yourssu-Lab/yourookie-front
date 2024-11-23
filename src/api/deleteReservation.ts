import { customAxios } from ".";

export const deleteReservation = async (
  reservationId: number,
  personalPassword: string
) => {
  const { data } = await customAxios.delete(`/reservations/${reservationId}`, {
    data: { personalPassword },
    headers: {
      skipAuth: true,
    },
  });

  return data;
};
