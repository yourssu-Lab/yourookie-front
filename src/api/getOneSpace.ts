import { customAxios } from ".";
import { Organization, Space } from "../types/organization.type";

export interface GetOneSpaceResponse {
  organization: Organization;
  space: Space;
}

export const getOneSpace = async (spaceId: number): Promise<Space> => {
  const { data } = await customAxios.get<GetOneSpaceResponse>(
    `/spaces/${spaceId}`,
    {
      headers: {
        skipAuth: true,
      },
    }
  );
  return data.space;
};
