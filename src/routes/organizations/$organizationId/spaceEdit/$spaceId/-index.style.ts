import styled from 'styled-components';

export const StyledContainer = styled.form`
  width: 100%;
  padding: 35px 50px;
  background: white;
`;

export const StyledTitle = styled.h1`
  display: flex;
  font-size: 28px;
  font-weight: 700;
  color: #3a3a3a;
  padding: 10px 10px 10px 0;
  margin-bottom: 16px;
`;

export const StyledFieldGroup = styled.div`
  margin-bottom: 40px;
`;

export const StyledLabel = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: #3a3a3a;
`;

export const StyledDetailLabel = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: #4f4f4f;
  margin-left: 4px;
`;

export const StyledLabelRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const StyledInput = styled.input`
  margin-top: 16px;
  width: 100%;
  padding: 12px 20px;
  border: none;
  box-shadow: 0 0 0 0.5px #858585;
  border-radius: 5px;
  font-size: 18px;

  &::placeholder {
    font-size: 14px;
    color: #858585;
  }
`;

export const StyledImageRow = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`;

export const StyledImageUpload = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 6px 12px;
  background-color: #e2ecf7;
  color: #000;
  font-size: 14px;
  font-weight: 500;
  border-radius: 12px;
  cursor: pointer;

  &:hover {
    background-color: #e5e9f2;
  }
`;

export const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const StyledButton = styled.button`
  border-radius: 12px;
  background: #1781ee;
  padding: 10px 38px;
  font-size: 20px;
  border: none;
  text-align: center;
  cursor: pointer;
  color: #ffffff;

  &:hover {
  }
`;

export const StyledImageInput = styled.input`
  display: none;
`;

export const StyledRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
`;

export const StyledTimeInput = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #e1e1e8;
  border-radius: 8px;
  font-size: 14px;
  margin-top: 16px;

  &::placeholder {
    color: #999;
  }
`;

export const StyledTimeContainer = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const StyledLogoWrapper = styled.div`
  display: inline-block;
  margin-left: auto;
  img {
    width: 132px;
    height: auto;
  }
`;

export const StyledHeaderRow = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledImageNameInput = styled.input`
  flex-grow: 1;
  white-space: pre-wrap;
  text-overflow: ellipsis;
  margin-top: 16px;
  width: 100%;
  padding: 12px 20px;
  border: none;
  box-shadow: 0 0 0 0.5px #858585;
  border-radius: 5px;
  font-size: 18px;

  &::placeholder {
    font-size: 14px;
    color: #858585;
  }
`;

export const StyledCheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  gap: 8px;
`;

export const StyledCheckbox = styled.input`
  margin-right: 4px;
`;

export const StyledCheckboxLabel = styled.label`
  font-size: 14px;
`;
