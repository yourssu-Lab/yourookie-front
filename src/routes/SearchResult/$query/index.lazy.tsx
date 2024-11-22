import {
  createLazyFileRoute,
  useParams,
  useRouter,
} from "@tanstack/react-router";
import { GroupCard } from "../../-components/GroupCard/GroupCard";
import { Organization } from "../../-components/GroupCard/GroupCard.style";
import logo from "../../../assets/mockLogo.svg";
import logo2 from "../../../assets/test.jpg";
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
  const { query } = useParams({
    from: "/SearchResult/$query/",
  });
  const router = useRouter();

  const groups: Organization[] = [
    {
      id: 1,
      name: "동아리 A",
      description:
        "유어슈 서로를 존중하고 커뮤니케이션 하는 동아리입니다. 성장하는 문화를 통해 같이 있는 것만으로 즐겁게 배울 수 있는 동아리입니다.",
      logoImageUrl: logo,
      tags: ["공간 1", "공간 2", "공간 3", "공간 4"],
    },
    {
      id: 2,
      name: "동아리 A",
      description: "동아리 A에 대한 설명입니다.",
      logoImageUrl: logo,
      tags: ["공간 1", "공간 2", "공간 3", "공간 4"],
    },
    {
      id: 3,
      name: "동아리 A",
      description: "동아리 A에 대한 설명입니다.",
      logoImageUrl: logo2,
      tags: ["공간 1", "공간 2", "공간 3", "공간 4"],
    },
    {
      id: 4,
      name: "동아리 A",
      description: "동아리 A에 대한 설명입니다.",
      logoImageUrl: logo2,
      tags: ["공간 1", "공간 2", "공간 3", "공간 4"],
    },
    {
      id: 5,
      name: "동아리 A",
      description: "동아리 A에 대한 설명입니다.",
      logoImageUrl: logo2,
      tags: ["공간 1", "공간 2", "공간 3", "공간 4"],
    },
  ];

  // const filteredGroups = groups.filter((group) =>
  //   group.name.includes(query || "")
  // );

  // const handleSearch = (space: string) => {
  //   console.log(`Selected space: ${space}`);
  // };

  const handleGroupClick = (space: string, groupId: number) => {
    handleSpaceSelect(space, groupId);
  };

  const handleSpaceSelect = (space: string, id: number) => {
    console.log(`Selected space: ${space}`);
    router.navigate({ to: `/organizations/${id}` });
  };

  return (
    <SearchContainer>
      <SearchHeader>단체 정보 / 검색 결과: {query}</SearchHeader>
      <StyledHr />
      <SearchResultsGrid>
        {groups.map((group) => (
          <GroupCard key={group.id} group={group} onClick={handleGroupClick} />
        ))}
      </SearchResultsGrid>
    </SearchContainer>
  );
}
