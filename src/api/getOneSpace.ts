import { customAxios } from ".";
import { Space } from "../types/organization.type";

export const getOneSpace = async (spaceId: number) => {
  const { data } = await customAxios.get<Space>(`/spaces/${spaceId}`, {
    headers: {
      skipAuth: true,
    },
  });

  return data;
};
