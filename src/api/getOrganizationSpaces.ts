import { Organization, Space } from "../types/organization.type";
import { customAxios } from "./index";

export interface OrganizationSpacesResponse {
  organization: Organization;
  spaces: Space[];
}

export const getOrganizationSpaces = async (organizationId: string) => {
  const { data } = await customAxios.get<OrganizationSpacesResponse>(
    `/spaces`,
    {
      params: {
        organizationId,
      },
      headers: { skipAuth: true },
    }
  );

  return data;
};
