import { customAxios } from ".";

interface PatchOrganizationRequest {
  name: string;
  description: string;
  reservationPassword: string | null;
  hashtags: string[];
  imageFile?: File | null;
}

export const patchOrganization = async (
  organizationId: number,
  data: PatchOrganizationRequest
) => {
  const formData = new FormData();

  const requestData = {
    name: data.name,
    description: data.description,
    reservationPassword: data.reservationPassword,
    hashtags: data.hashtags,
  };

  formData.append(
    "request",
    new Blob([JSON.stringify(requestData)], {
      type: "application/json",
    })
  );

  if (data.imageFile) {
    formData.append("image", data.imageFile);
  }

  const response = await customAxios.patch(
    `/organizations/${organizationId}`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
};
