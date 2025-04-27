import {
  CardWrapper,
  GroupCardProps,
  GroupContent,
  GroupDescription,
  GroupImage,
  GroupName,
  StyledTag,
  StyledTags,
  StyledViewSpaceButton,
} from './GroupCard.style.ts';

export const GroupCard = ({ group, onClick }: GroupCardProps) => {
  const handleSpaceView = (space: string) => {
    onClick(space, group.id);
  };

  return (
    <CardWrapper>
      <GroupImage>
        <img src={group.logoImageUrl} alt={group.name} />
      </GroupImage>
      <GroupContent>
        <GroupName>{group.name}</GroupName>
        <GroupDescription>{group.description}</GroupDescription>
        <StyledTags>
          {group.hashtags.map((tag) => (
            <StyledTag key={tag}>#{tag}</StyledTag>
          ))}
        </StyledTags>
      </GroupContent>
      <StyledViewSpaceButton onClick={() => handleSpaceView(group.name)}>
        공간보기
      </StyledViewSpaceButton>
    </CardWrapper>
  );
};
