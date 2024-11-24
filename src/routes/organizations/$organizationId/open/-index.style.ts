import styled from "styled-components";

export const StyledContainer = styled.form`
  width: 100%;
  max-width: 1220px;
  margin: 0 auto;
  padding: 60px;
`;

export const StyledTitle = styled.h1`
  font-size: 28px;
  font-weight: 700;
  color: #3a3a3a;
  margin-bottom: 16px;
  padding: 10px;
`;

export const StyledForm = styled.div`
  border-radius: 20px;
  padding: 50px;
  box-shadow: 0 0 0 0.5px #858585;
`;

export const StyledRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
`;

export const StyledFieldGroup = styled.div`
  margin-bottom: 40px;
`;

export const StyledLabel = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: #3a3a3a;
  margin-bottom: 16px;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 12px 20px;
  border: none;
  box-shadow: 0 0 0 0.5px #858585;
  border-radius: 5px;
  font-size: 18px;

  &::placeholder {
    color: #858585;
  }
`;

export const StyledTimeInput = styled.input`
  width: 100%;
  padding: 12px 20px;
  border: none;
  box-shadow: 0 0 0 0.5px #858585;
  border-radius: 5px;
  font-size: 18px;

  &::placeholder {
    color: #858585;
  }
`;

export const StyledTimeContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const StyledImageSection = styled.div`
  display: flex;
  gap: 16px;
  align-items: flex-start;
`;

export const StyledImageWrapper = styled.div`
  position: relative;
`;

export const StyledImageUploadBox = styled.div<{
  $isEmpty?: boolean;
  $isMain?: boolean;
}>`
  width: ${(props) => (props.$isEmpty ? "560px" : "560px")};
  /* aspect-ratio: ${(props) => (props.$isEmpty ? "auto" : "16/10")}; */
  min-height: ${(props) => (props.$isEmpty ? "420px" : "420px")};
  border: 1px solid #e5e8eb;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  overflow: hidden;
  background: #ffffff;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${(props) =>
    !props.$isEmpty &&
    props.$isMain &&
    `
   &::before {
     content: '대표';
     position: absolute;
     top: 11px;
     left: 15px;
     background: #1781ee;
     color: white;
     padding: 6px 13px;
     border-radius: 12px;
     font-size: 14px;
     z-index: 1;
   }
 `}
`;
export const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const StyledButton = styled.button`
  border-radius: 12px;
  background: #1781ee;
  box-shadow: 0.5px 0.5px 1px 0px rgba(0, 0, 0, 0.17);
  padding: 10px 38px;
  font-size: 20px;
  border: none;
  text-align: center;
  cursor: pointer;
  color: #ffffff;
  margin-top: 40px;

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

export const StyledContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

export const StyledPlaceholder = styled.div`
  color: #858585;
  font-size: 18px;
  font-weight: 500;
`;

export const StyledAdd = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: #e2ecf7;
  color: #1781ee;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
`;

export const StyledAddButton = styled(StyledAdd)`
  margin-top: 105px;
  cursor: pointer;
`;

export const StyledDetailLabel = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: #4f4f4f;
  margin-bottom: 10px;
  margin-left: 4px;
`;

export const StyledLabelRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
