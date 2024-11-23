import { customAxios } from ".";

interface Organization {
  id: number;
  name: string;
  description: string;
  logoImageUrl: string;
  hashtags: string[];
}

export const getOrganization = async (name: string) => {
  const { data } = await customAxios.get<Organization[]>(`/organizations`, {
    params: { name },
    headers: {
      skipAuth: true,
    },
  });

  return data;
};
