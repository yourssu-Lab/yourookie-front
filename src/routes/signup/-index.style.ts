import styled from "styled-components";

export const FormContainer = styled.form`
  max-width: 480px;
  margin: 0 auto;
  padding: 2rem;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
`;

export const SubTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1rem;
`;

export const Section = styled.div`
  margin-bottom: 2rem;
`;

export const SectionTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #666;
`;

export const FieldWrapper = styled.div`
  margin-bottom: 1rem;
`;

export const FileInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
`;

export const TextArea = styled.textarea`
  width: 100%;
  min-height: 120px;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 1rem;
  resize: vertical;
`;

export const StyledTag = styled.div`
    display: inline-flex;
    align-items: center;
    padding: 4px 12px;
    background-color: #f0f0f0;
    border-radius: 16px;
    font-size: 14px;
    color: #666;

    &:before {
        content: '#';
        margin-right: 2px;
        color: #888;
    }
`;

export const StyledTagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  width: 100%;
`;