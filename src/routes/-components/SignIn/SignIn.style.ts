import { Link } from '@tanstack/react-router';
import styled from 'styled-components';

export const StyledLogo = styled.span`
  color: #1781ee;
  font-family: 'Mungyeong Gamhong Apple';
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
`;

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const StyledH2 = styled.h3`
  color: #000;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
`;

export const StyledInput = styled.input`
  display: flex;
  width: 380px;
  height: 50px;
  padding: 0 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 5px;
  border: 1px solid #858585;
  background: #f9f9f9;

  color: #858585;

  font-size: 18px;
  font-style: normal;
  font-weight: 500;
`;

export const StyledFieldLabel = styled.label`
  color: #050505;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
`;

export const StyledFieldWrapper = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const StyledButtonWrapper = styled.div`
  display: flex;
  gap: 12px;
`;

interface StyledButtonProps {
  $type: 'primary' | 'normal';
}

export const StyledButton = styled.button<StyledButtonProps>`
  ${(props) =>
    props.$type === 'primary'
      ? `
                color: #FFF;
                border: none;
                background: #1781EE;
            `
      : `
                border-radius: 12px;
                border: 1px solid #858585;
                background: #FFF;
            `}
  display: flex;
  flex: 1;
  height: 50px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;

  font-size: 20px;
  font-style: normal;
  font-weight: 500;

  cursor: pointer;
`;

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StyledLink = styled(Link)`
  text-decoration-line: none;
  display: flex;
  flex: 1;
`;

export const StyledErrorMessage = styled.div`
  color: #eb0000;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  text-align: center;
  height: 35px;
  align-self: stretch;
  margin: 8px 0;
`;
