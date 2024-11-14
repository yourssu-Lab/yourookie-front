import {StyledHeader} from "./Header.style.ts";
import {Link} from "@tanstack/react-router";
import {SearchTextField} from "@yourssu/design-system-react";

function Header() {
    return <StyledHeader>
        <SearchTextField></SearchTextField>
        <Link to="/">
            공간오픈/관리
        </Link>
        <Link to="/about">
            공간찾기
        </Link>
        <Link>
            교내회의실
        </Link>
        <Link>
            로그인
        </Link>
        <Link>
            로그아웃
        </Link>
    </StyledHeader>
}

export default Header;