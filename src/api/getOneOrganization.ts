import { customAxios } from ".";
import { Organization } from "../types/organization.type";

export const getOneOrganization = async (organizationId: number) => {
  const { data } = await customAxios.get<Organization>(
    `/organizations/${organizationId}`
  );
  return data;
};
