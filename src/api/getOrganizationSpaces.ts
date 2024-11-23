import { Organization, Space } from "../types/organization.type.ts";
import { customAxios } from "./index.ts";

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
