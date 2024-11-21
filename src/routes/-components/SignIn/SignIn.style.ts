import styled from "styled-components";
import {Link} from "@tanstack/react-router";

export const StyledH2 = styled.h2`
    color: #BDBDBD;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-align: center;
`;

export const StyledH3 = styled.h3`
    color: #000;
    font-family: "Spoqa Han Sans Neo";
    font-size: 26px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-align: center;
    margin-top: 29px;
`;

export const StyledInput = styled.input`
    border-radius: 4px;
    border: 1px solid #000;
    width: 100%;
    font-size: 18px;
    height: 73px;
    padding: 0 12px;
`;

export const StyledFieldLabel = styled.label`
    color: #000;
    font-family: "Spoqa Han Sans Neo";
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

export const StyledFieldWrapper = styled.div`
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    gap: 7px;
`;

export const StyledButtonWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
`;

interface StyledButtonProps {
    $type: 'primary' | 'normal';
}

export const StyledButton = styled.button<StyledButtonProps>`
    ${props => props.$type === 'primary'
            ? `
                background: #0095DE;
                color: #FFF;
                border: none;
               
               &:hover {
                    background: #007AB8; // 좀 더 진한 파란색
                    cursor: pointer;
                    transition: background-color 0.2s ease;
                }
            `
            : `
                background: #FFF;
                color: #0095DE;
                border: 1px solid #000;
                
                &:hover {
                    background: #F0F0F0; // 살짝 회색 배경
                    border: 1px solid #0095DE;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }
            `
    } // button 
    border-radius: 4px;
    display: flex;
    width: 190px;
    padding: 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;

    // font
    font-family: "Spoqa Han Sans Neo";
    font-size: 24px;
    font-style: normal;
    font-weight: 700;

    cursor: pointer;
`;

export const StyledContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const StyledLink = styled(Link)`
    text-decoration-line: none;
`

export const StyledErrorMessage = styled.div`
    color: #0095DE;
    font-family: "Spoqa Han Sans Neo";
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    text-align: center;
    margin-top: 31px;
`