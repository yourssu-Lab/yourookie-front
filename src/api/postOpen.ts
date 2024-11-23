import { customAxios } from ".";

export interface SpaceParams {
  name: string;
  location: string;
  openingTime: string;
  closingTime: string;
  capacity: number | string;
  image: File | null;
}

export const postOpen = async ({
  name,
  location,
  openingTime,
  closingTime,
  capacity,
  image,
}: SpaceParams) => {
  const formData = new FormData();

  const request = new Blob(
    [
      JSON.stringify({
        name,
        location,
        openingTime,
        closingTime,
        capacity,
      }),
    ],
    {
      type: "application/json",
    }
  );

  formData.append("request", request);
  if (image) formData.append("image", image);

  const response = await customAxios.post("/spaces", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};
