import {StyledContainer, StyledFooter} from "./Footer.style.ts";
import {Link} from "@tanstack/react-router";

function Footer() {
    return <StyledFooter>
        <StyledContainer>
            <Link>
                개인정보처리방침
            </Link>
            <Link>
                이용약관
            </Link>
            <Link>
                유어슈 홈페이지
            </Link>
        </StyledContainer>
    </StyledFooter>
}

export default Footer;