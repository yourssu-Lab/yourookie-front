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

export const getOneSpaceOrga = async (
  spaceId: number
): Promise<Organization> => {
  const { data } = await customAxios.get<GetOneSpaceResponse>(
    `/spaces/${spaceId}`,
    {
      headers: {
        skipAuth: true,
      },
    }
  );
  return data.organization;
};
