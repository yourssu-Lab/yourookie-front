import {createLazyFileRoute} from '@tanstack/react-router'
import {useForm} from "react-hook-form";
import {
    StyledFieldWrapper,
    StyledFormContainer,
    StyledSection,
    StyledSectionTitle,
    StyledContainer,
    StyledInput,
    StyledTitle,
    StyledEmailCheckButton,
    StyledFieldLabel,
    StyledFieldDescription,
    StyledSectionDescription,
    StyledFieldSuccessMessage,
    StyledFieldErrorMessage,
    StyledSubmitButton,
    StyledUploadBackground, StyledUploadDescription, StyledEditImage, StyledErrorMessage
} from "./-index.style.ts";
import {PostOrganizationParams} from "../../api/postOrganization.ts";
import {getCheckEmail} from "../../api/getCheckEmail.ts";
import {ChangeEvent, useEffect, useState} from "react";
import {isEmail} from "@yourssu/utils";
import {usePostOrganization} from "../../hooks/usePostOrganization.ts";
import UploadImage from "../../assets/upload.svg?react"
import EditImage from "../../assets/Pencil.svg?react"
import {AxiosError} from "axios";

export const Route = createLazyFileRoute('/signup/')({
    component: RouteComponent,
})

interface SignUpFormFields extends Omit<PostOrganizationParams, "image"> {
    passwordConfirm: string;
}

function RouteComponent() {
    const {register, handleSubmit, watch} = useForm<SignUpFormFields>();
    const [emailValidated, setEmailValidated] = useState<boolean | null>(null);
    const postOrganizationMutation = usePostOrganization();
    const [previewUrl, setPreviewUrl] = useState<string>('');
    const [image, setImage] = useState<File | null>(null);

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        setImage(file ?? null);
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewUrl(reader.result as string);
            };
            reader.readAsDataURL(file);
        } else {
            setPreviewUrl('');
        }
    };

    const onSubmit = handleSubmit((data) => {
        if (watch("password") !== watch("passwordConfirm")) return;
        if (!emailValidated) return;

        postOrganizationMutation.mutate({...data, image});
    });

    const emailValue = watch("email");
    useEffect(() => {
        setEmailValidated(null);
    }, [emailValue]);

    const onEmailCheck = async () => {
        const email = watch("email");

        if (!isEmail(email)) return;

        const {validated} = await getCheckEmail({email});
        setEmailValidated(validated);
    }

    return (
        <StyledContainer>
            <StyledTitle>회원가입</StyledTitle>
            <StyledFormContainer onSubmit={onSubmit}>
                <StyledSection>
                    <StyledSectionTitle>1. 필수정보</StyledSectionTitle>
                    <StyledFieldWrapper>
                        <StyledFieldLabel>단체명</StyledFieldLabel>
                        <StyledInput
                            placeholder="단체명"
                            {...register("name", {required: true})}
                        />
                    </StyledFieldWrapper>

                    <StyledFieldWrapper>
                        <StyledFieldLabel>이메일</StyledFieldLabel>
                        <div style={{display: "flex", gap: "50px"}}>
                            <StyledInput
                                placeholder="이메일을 입력하세요"
                                {...register("email", {required: true})}
                            />
                            <StyledEmailCheckButton
                                type="button"
                                onClick={onEmailCheck}
                            >
                                이메일 확인
                            </StyledEmailCheckButton>
                        </div>
                        {
                            emailValidated === true &&
                            <StyledFieldSuccessMessage>사용 가능한 이메일입니다!</StyledFieldSuccessMessage>
                        }
                        {
                            emailValidated === false &&
                            <StyledFieldErrorMessage>이미 사용중인 이메일입니다.</StyledFieldErrorMessage>
                        }
                    </StyledFieldWrapper>

                    <StyledFieldWrapper>
                        <div style={{display: "flex", gap: "40px", width: "100%"}}>
                            <div style={{flex: 1}}>
                                <StyledFieldLabel>비밀번호</StyledFieldLabel>
                                <StyledInput
                                    placeholder="비밀번호를 입력하세요"
                                    {...register("password", {required: true})}
                                    type="password"
                                />
                                <StyledFieldDescription>영어와 숫자를 섞어 8자리 이상 입력하세요.</StyledFieldDescription>
                            </div>
                            <div style={{flex: 1}}>
                                <StyledFieldLabel>비밀번호 확인</StyledFieldLabel>
                                <StyledInput
                                    placeholder="비밀번호를 입력하세요"
                                    {...register("passwordConfirm", {required: true})}
                                    type="password"
                                />
                                {
                                    watch("password") !== watch("passwordConfirm") &&
                                    <StyledFieldErrorMessage>비밀번호 확인이 올바르지 않습니다.</StyledFieldErrorMessage>
                                }
                            </div>
                        </div>
                    </StyledFieldWrapper>

                    <StyledFieldWrapper>
                        <div style={{display: "flex", gap: "40px", width: "100%"}}>
                            <div style={{flex: 1}}>
                                <StyledFieldLabel>단체 비밀번호 입력</StyledFieldLabel>
                                <StyledInput
                                    type="password"
                                    placeholder="단체 비밀번호를 입력하세요"
                                    {...register("reservationPassword",
                                        {required: true})}
                                />
                            </div>
                            <div style={{flex: 1}}></div>
                        </div>

                    </StyledFieldWrapper>
                </StyledSection>

                <StyledSection>
                    <StyledSectionTitle>
                        2. 선택 정보 <StyledSectionDescription>단체 페이지에 사용되는 정보입니다!</StyledSectionDescription>
                    </StyledSectionTitle>

                    <StyledFieldWrapper>
                        <input
                            id="inputFile"
                            type="file"
                            accept=".jpg, .jpeg, .png, .gif"
                            style={{display: "none"}}
                            onChange={handleImageChange}
                        />

                        <StyledFieldLabel>단체 사진</StyledFieldLabel>
                        <StyledUploadBackground style={{backgroundImage: `url(${previewUrl})`}} htmlFor="inputFile">
                            {!previewUrl && <>
                                <UploadImage style={{minWidth: '52px', minHeight: '52px'}} />
                                <StyledUploadDescription>사진을 추가해주세요</StyledUploadDescription>
                            </>}
                            {previewUrl &&
                                <StyledEditImage>
                                    <EditImage />
                                </StyledEditImage>
                            }
                        </StyledUploadBackground>
                    </StyledFieldWrapper>

                    <StyledFieldWrapper>
                        <StyledFieldLabel>단체 소개</StyledFieldLabel>
                        <StyledInput placeholder="단체 소개를 입력하세요" {...register("description")} />
                    </StyledFieldWrapper>
                    <div style={{display: "flex", gap: "8px", width: "100%"}}>
                        {
                            [1, 2, 3].map((el, index) => (
                                <div key={el} style={{flex: 1}}>
                                    <StyledFieldLabel>해시태그 {el}</StyledFieldLabel>
                                    <StyledInput placeholder="해시태그를 추가하세요" {...register(`hashtags.${index}`)} />
                                </div>
                            ))
                        }
                    </div>
                </StyledSection>
                {
                    postOrganizationMutation.error && <StyledErrorMessage>
                        {(postOrganizationMutation.error as AxiosError<{message: string}>).response?.data?.message}
                    </StyledErrorMessage>
                }

                <StyledSubmitButton
                    type="submit"
                >
                    회원가입
                </StyledSubmitButton>
            </StyledFormContainer>
        </StyledContainer>

    );
}