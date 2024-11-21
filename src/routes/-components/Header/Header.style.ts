import styled from "styled-components";
import {Link} from "@tanstack/react-router";

export const StyledHeader = styled.header`
    display: flex;
    width: 100%;
    padding: 0 30px;
    align-items: center;
    
    gap: 174px;
    background: #0095DE;
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

export const StyledAuth = styled.div`
    display: flex;
`;
