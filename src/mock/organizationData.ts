import Logo from "../assets/mockLogo.svg";
import { Organization, Space } from "../types/organization.type";

export const mockOrganization: Organization = {
  id: 1,
  name: "유어슈",
  description:
    "유어슈 서로를 존중하고 커뮤니케이션 하는 동아리입니다. 성장하는 문화를 통 같이 있는 것만으로도 즐겁고 배울 수 있는 동아리입니다.",
  logoImageUrl: Logo,
};

export const mockSpaces: Space[] = [
  {
    id: 1,
    name: "유어슈 동방",
    spaceImageUrl: Logo,
    location: "학생회관 206호",
    openingTime: "09:00",
    closingTime: "20:00",
    capacity: 20,
  },
  {
    id: 2,
    name: "유어슈 동방",
    spaceImageUrl: Logo,
    location: "창신관 407호",
    openingTime: "10:00",
    closingTime: "18:00",
    capacity: 15,
  },
  {
    id: 3,
    name: "유어슈 동방",
    spaceImageUrl: Logo,
    location: "창신관 407호",
    openingTime: "10:00",
    closingTime: "18:00",
    capacity: 15,
  },
  {
    id: 4,
    name: "유어슈 동방",
    spaceImageUrl: Logo,
    location: "창신관 407호",
    openingTime: "10:00",
    closingTime: "18:00",
    capacity: 15,
  },
  {
    id: 5,
    name: "유어슈 창신관",
    spaceImageUrl: Logo,
    location: "창신관 407호",
    openingTime: "10:00",
    closingTime: "18:00",
    capacity: 15,
  },
];
