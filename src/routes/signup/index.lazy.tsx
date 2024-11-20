import {createLazyFileRoute} from '@tanstack/react-router'
import {BoxButton, PasswordTextField, SimpleTextField} from "@yourssu/design-system-react";
import {useForm} from "react-hook-form";
import {
    FieldWrapper,
    FileInput,
    FormContainer,
    Section,
    SectionTitle, StyledTag, StyledTagList,
    SubTitle, TextArea,
    Title
} from "./-index.style.ts";
import {useState} from "react";

export const Route = createLazyFileRoute('/signup/')({
    component: RouteComponent,
})

function RouteComponent() {
    const {register, handleSubmit} = useForm();
    const [tagList, ] = useState<string[]>([]);

    const onSubmit = handleSubmit(() => {
    });

    return (
        <FormContainer onSubmit={onSubmit}>
            <Title>OpenSSUpot</Title>
            <SubTitle>회원가입</SubTitle>

            <Section>
                <SectionTitle>필수정보</SectionTitle>
                <FieldWrapper>
                    <SimpleTextField
                        placeholder="이메일"
                        {...register("email", {required: true})}
                    />

                </FieldWrapper>

                <FieldWrapper>
                    <BoxButton
                        size="medium"
                        variant="filled"
                        rounding={4}
                        type="button"
                    >
                        이메일 중복 확인
                    </BoxButton>
                </FieldWrapper>

                <FieldWrapper>
                    <PasswordTextField
                        placeholder="비밀번호"
                        {...register("password", {required: true})}
                    />
                </FieldWrapper>

                <FieldWrapper>
                    <PasswordTextField
                        placeholder="비밀번호 확인"
                        {...register("password_confirm", {required: true})}
                    />
                </FieldWrapper>

                <FieldWrapper>
                    <PasswordTextField
                        placeholder="단체 비밀번호"
                        {...register("group_password", {required: true})}
                    />
                </FieldWrapper>
            </Section>

            <Section>
                <SectionTitle>선택 정보</SectionTitle>
                <FileInput
                    {...register("image", {required: true})}
                    id="inputFile"
                    type="file"
                    accept=".jpg, .jpeg, .png, .gif"
                />
                <TextArea
                    {...register("explain")}
                    placeholder="자기소개를 입력해주세요"
                />
                {tagList.length !== 0 &&
                    <StyledTagList>
                        {tagList.map((tag) => <StyledTag key={tag}>{tag}</StyledTag>)}
                    </StyledTagList>
                }
            </Section>

            <BoxButton
                size="medium"
                variant="filled"
                rounding={4}
                type="submit"
            >
                회원가입
            </BoxButton>
        </FormContainer>
    );
}