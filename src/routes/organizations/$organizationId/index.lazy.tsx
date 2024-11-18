import { createLazyFileRoute } from "@tanstack/react-router";
import { BoxButton } from "@yourssu/design-system-react";
import { useState } from "react";
import { OrganizationInfoCard } from "../../-components/OrganizationInfoCard/OrganizationInfoCard";
import { SpaceCard } from "../../-components/SpaceCard/SpaceCard";
import { mockOrganization, mockSpaces } from "../../../mock/organizationData";
import { Organization, Space } from "../../../types/organization.type";
import {
  StyledAddButton,
  StyledContainer,
  StyledSpaceGrid,
} from "./-index.style";

export const Route = createLazyFileRoute("/organizations/$organizationId/")({
  component: RouteComponent,
});

function RouteComponent() {
  const [organization] = useState<Organization>(mockOrganization);
  const [spaces] = useState<Space[]>(mockSpaces);

  const handleEditOrganization = () => {
    // 단체 정보 수정 페이지로 이동
  };

  const handleEditSpace = () => {
    // 공간 정보 수정 페이지로 이동
  };

  const handleAddSpace = () => {
    // 새 공간 오픈 페이지로 이동
  };

  return (
    <StyledContainer>
      <OrganizationInfoCard
        name={organization.name}
        description={organization.description}
        image={organization.logoImageUrl}
        onEditClick={handleEditOrganization}
      />

      <StyledSpaceGrid>
        {spaces.map((space) => (
          <SpaceCard
            onEditClick={handleEditSpace}
            key={space.id}
            space={space}
          />
        ))}
      </StyledSpaceGrid>
      <StyledAddButton>
        <BoxButton
          onClick={handleAddSpace}
          size="large"
          variant="filled"
          rounding={8}
        >
          새 공간 오픈하기
        </BoxButton>
      </StyledAddButton>
    </StyledContainer>
  );
}
