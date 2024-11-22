import { Link, useRouter } from "@tanstack/react-router";
import { StyledContainer, StyledFooter } from "./Footer.style.ts";

function Footer() {
  const router = useRouter();

  const isModalRoute =
    router.matchRoute({
      to: "/organizations/$organizationId/edit",
    }) ||
    router.matchRoute({
      to: "/organizations/$organizationId/spaceEdit/$spaceId",
    });

  if (isModalRoute) return null;
  return (
    <StyledFooter>
      <StyledContainer>
        <Link>개인정보처리방침</Link>
        <Link>이용약관</Link>
        <Link>유어슈 홈페이지</Link>
      </StyledContainer>
    </StyledFooter>
  );
}

export default Footer;
