import { useQuery } from "@tanstack/react-query";
import {
  createLazyFileRoute,
  Outlet,
  useNavigate,
} from "@tanstack/react-router";
import { OrganizationInfoCard } from "../../-components/OrganizationInfoCard/OrganizationInfoCard";
import { SpaceCard } from "../../-components/SpaceCard/SpaceCard";
import {
  getOrganizationSpaces,
  OrganizationSpacesResponse,
} from "../../../api/getOrganizationSpaces";
import {
  StyledAddSpaceButton,
  StyledContainer,
  StyledSpaceGrid,
} from "./-index.style";

export const Route = createLazyFileRoute("/organizations/$organizationId/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { organizationId } = Route.useParams();
  const navigate = useNavigate();

  const { data, isLoading, isError } = useQuery<OrganizationSpacesResponse>({
    queryKey: ["organizationSpaces", organizationId],
    queryFn: () => getOrganizationSpaces(organizationId),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !data) {
    return <div>Error loading data.</div>;
  }

  const { organization, spaces = [] } = data;
  const handleEditOrganization = () => {
    navigate({
      to: "/organizations/$organizationId/edit",
      params: { organizationId },
    });
  };

  const handleEditSpace = (spaceId: number) => {
    navigate({
      to: "/organizations/$organizationId/spaceEdit/$spaceId",
      params: {
        organizationId,
        spaceId: spaceId.toString(),
      },
    });
  };

  const handleAddSpace = () => {
    navigate({
      to: "/organizations/$organizationId/open",
      params: { organizationId },
    });
  };

  if (!organization) {
    return null;
  }

  return (
    <StyledContainer>
      <OrganizationInfoCard
        organization={organization}
        onEditClick={handleEditOrganization}
      />

      <StyledAddSpaceButton onClick={handleAddSpace}>
        + 공간 추가
      </StyledAddSpaceButton>

      <StyledSpaceGrid>
        {spaces?.map((space) => (
          <SpaceCard
            onEditClick={() => handleEditSpace(space.id)}
            key={space.id}
            space={space}
          />
        ))}
      </StyledSpaceGrid>
      <Outlet />
    </StyledContainer>
  );
}
