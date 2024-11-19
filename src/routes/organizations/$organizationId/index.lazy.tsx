import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { OrganizationInfoCard } from "../../-components/OrganizationInfoCard/OrganizationInfoCard";
import { SpaceCard } from "../../-components/SpaceCard/SpaceCard";
import { mockOrganization, mockSpaces } from "../../../mock/organizationData";
import { Organization, Space } from "../../../types/organization.type";
import {
  StyledAddSpaceButton,
  StyledContainer,
  StyledSpaceGrid,
} from "./-index.style";

export const Route = createLazyFileRoute("/organizations/$organizationId/")({
  component: RouteComponent,
});

function RouteComponent() {
  const [organization] = useState<Organization>(mockOrganization);
  const [spaces] = useState<Space[]>(mockSpaces);
  const { organizationId } = Route.useParams();
  const navigate = useNavigate();

  const handleEditOrganization = () => {
    navigate({
      to: "/organizations/$organizationId/edit",
      params: { organizationId },
    });
  };

  const handleEditSpace = (spaceId: number) => {
    // 공간 정보 수정 페이지로 이동
    console.log("Edit space:", spaceId);
  };

  const handleAddSpace = () => {
    navigate({
      to: "/organizations/$organizationId/open",
      params: { organizationId },
    });
  };

  return (
    <StyledContainer>
      <OrganizationInfoCard
        name={organization.name}
        description={organization.description}
        image={organization.logoImageUrl}
        tags={organization.tags}
        onEditClick={handleEditOrganization}
      />

      <StyledAddSpaceButton onClick={handleAddSpace}>
        + 공간 추가
      </StyledAddSpaceButton>

      <StyledSpaceGrid>
        {spaces.map((space) => (
          <SpaceCard
            onEditClick={() => handleEditSpace(space.id)}
            key={space.id}
            space={space}
          />
        ))}
      </StyledSpaceGrid>
    </StyledContainer>
  );
}
