export interface Reservation {
  id: number;
  name: string;
  startDateTime: string;
  endDateTime: string;
}

export const mockDateReservations: Reservation[] = [
  {
    id: 1,
    name: "유어슈 동아리방",
    startDateTime: "2024-11-15T14:00:00",
    endDateTime: "2024-11-15T16:00:00",
  },
  {
    id: 2,
    name: "창신관",
    startDateTime: "2024-11-15T16:30:00",
    endDateTime: "2024-11-15T18:30:00",
  },
  {
    id: 3,
    name: "세미나룸",
    startDateTime: "2024-11-15T19:00:00",
    endDateTime: "2024-11-15T21:00:00",
  },
];

// export const mockTimeReservations: Reservation[] = [
//   {
//     id: 4,
//     name: "유어슈 동아리방",
//     startDateTime: "2024-11-22T20:00:00",
//     endDateTime: "2024-11-22T22:00:00",
//   },
//   {
//     id: 5,
//     name: "유어슈 동아리방",
//     startDateTime: "2024-11-22T14:00:00",
//     endDateTime: "2024-11-22T16:00:00",
//   },
//   {
//     id: 6,
//     name: "유어슈 동아리방",
//     startDateTime: "2024-11-22T17:00:00",
//     endDateTime: "2024-11-22T19:00:00",
//   },
// ];
