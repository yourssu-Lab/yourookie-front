import styled from "styled-components";

export const StyledContainer = styled.form`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

export const StyledTitle = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: #333;
  margin-bottom: 32px;
  text-align: center;
`;

export const StyledForm = styled.div`
  background: white;
  border-radius: 16px;
  padding: 32px;
`;

export const StyledRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-bottom: 24px;
`;

export const StyledFieldGroup = styled.div`
  margin-bottom: 24px;
`;

export const StyledLabel = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #333;
  margin-bottom: 8px;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #e1e1e8;
  border-radius: 8px;
  font-size: 14px;

  &::placeholder {
    color: #999;
  }
`;

export const StyledTimeInput = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #e1e1e8;
  border-radius: 8px;
  font-size: 14px;

  &::placeholder {
    color: #999;
  }
`;

export const StyledTimeContainer = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const StyledImageUpload = styled.div`
  width: 100%;
  height: 200px;
  border: 1px solid #e1e1e8;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-bottom: 16px;

  &:hover {
  }
`;

export const StyledButton = styled.button`
  width: 100%;
  padding: 12px;
  border: 1px solid #e1e1e8;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;

  &:hover {
  }
`;

export const StyledImageInput = styled.input`
  display: none;
`;

export const StyledImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
`;

export const StyledAdd = styled.span``;
