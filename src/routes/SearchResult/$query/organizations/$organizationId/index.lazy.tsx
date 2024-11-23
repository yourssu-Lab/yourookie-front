import { useQuery } from "@tanstack/react-query";
import {
  createLazyFileRoute,
  Outlet,
  useNavigate,
} from "@tanstack/react-router";
import { SearchInfoCard } from "../../../../-components/OrganizationInfoCard/SearchInfoCard";
import { SearchSpaceCard } from "../../../../-components/SpaceCard/SearchSpaceCard";
import {
  getOrganizationSpaces,
  OrganizationSpacesResponse,
} from "../../../../../api/getOrganizationSpaces";
import {
  StyledAddSpaceButton,
  StyledContainer,
  StyledSpaceGrid,
} from "./-index.style";
export const Route = createLazyFileRoute(
  "/SearchResult/$query/organizations/$organizationId/"
)({
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

  const handleReservationSpace = (spaceId: number) => {
    navigate({
      to: "/Reservation/$spaceId",
      params: {
        spaceId: spaceId.toString(),
      },
    });
  };

  return (
    <StyledContainer>
      <SearchInfoCard
        name={organization.name}
        description={organization.description}
        image={organization.logoImageUrl}
        hashtags={organization.hashtags}
      />
      <StyledAddSpaceButton />
      <StyledSpaceGrid>
        {spaces.map((space) => (
          <SearchSpaceCard
            onClick={() => handleReservationSpace(space.id)}
            key={space.id}
            space={space}
          />
        ))}
      </StyledSpaceGrid>
      <Outlet />
    </StyledContainer>
  );
}
