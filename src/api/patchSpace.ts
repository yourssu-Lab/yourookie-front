import { customAxios } from ".";

export interface SpaceFormData {
  name: string;
  location: string;
  openingTime: string;
  closingTime: string;
  capacity: number;
  image?: File | null;
}

export type UpdateSpaceParams = {
  name: string;
  location: string;
  openingTime: string;
  closingTime: string;
  capacity: number;
  image?: File | null;
};

export const patchSpace = async (spaceId: number, data: UpdateSpaceParams) => {
  const formData = new FormData();

  const requestData = {
    name: data.name,
    location: data.location,
    openingTime: data.openingTime,
    closingTime: data.closingTime,
    capacity: data.capacity,
  };

  const request = new Blob([JSON.stringify(requestData)], {
    type: "application/json",
  });

  formData.append("request", request);
  if (data.image) formData.append("image", data.image);

  const response = await customAxios.patch(`/spaces/${spaceId}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};
