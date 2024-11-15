import styled from "styled-components";
import {Link} from "@tanstack/react-router";

export const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    width: 100%;
    height: 4rem;
    padding-right: 10vw;
    position: sticky;
    top: 0;
    background-color: rgb(255, 255, 255);
    border-bottom: 1px solid rgba(16, 17, 18, 0.1);
    z-index: 9;
`;

export const StyledNav = styled.nav`
    display: flex;
    margin-left: 7.5rem;
`;

export const StyledLink = styled(Link)`
    font-size: 12px;
    font-weight: 500;
    line-height: 1.3;
    letter-spacing: 0;
    font-family: "Spoqa Han Sans Neo", "sans-serif";
    display: flex;
    position: relative;
    padding: 1.5rem;
    color: rgb(142, 147, 152);
    text-decoration: none;
    cursor: pointer;
    white-space: nowrap;
`

export const StyledSpace = styled.div`
    flex-grow: 1;
`
