import { useQuery } from "@tanstack/react-query";
import {
  createLazyFileRoute,
  useParams,
  useRouter,
} from "@tanstack/react-router";
import { GroupCard } from "../../-components/GroupCard/GroupCard";
import { getOrganization } from "../../../api/getOrganization";
import {
  SearchContainer,
  SearchHeader,
  SearchResultsGrid,
  StyledHr,
} from "./-index.style";

export const Route = createLazyFileRoute("/SearchResult/$query/")({
  component: SearchResults,
});

function SearchResults() {
  const router = useRouter();
  const { query } = useParams({
    from: "/SearchResult/$query/",
  });

  const { data: organizations = [] } = useQuery({
    queryKey: ["organizations", query],
    queryFn: () => getOrganization(query),
    enabled: !!query,
  });

  const handleGroupClick = (space: string, groupId: number) => {
    handleSpaceSelect(space, groupId);
  };

  const handleSpaceSelect = (space: string, id: number) => {
    console.log(`Selected space: ${space}`);
    router.navigate({ to: `/SearchResult/$query/organizations/${id}` });
  };

  return (
    <SearchContainer>
      <SearchHeader>단체 정보</SearchHeader>
      <StyledHr />
      <SearchResultsGrid>
        {organizations.map((org) => (
          <GroupCard
            key={org.id}
            group={{
              id: org.id,
              name: org.name,
              description: org.description,
              logoImageUrl: org.logoImageUrl,
              hashtags: org.hashtags,
            }}
            onClick={handleGroupClick}
          />
        ))}
      </SearchResultsGrid>
    </SearchContainer>
  );
}
