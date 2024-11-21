import Modal from "react-modal";
import {
    StyledButton,
    StyledButtonWrapper,
    StyledContent, StyledErrorMessage,
    StyledFieldLabel,
    StyledFieldWrapper,
    StyledH2,
    StyledH3,
    StyledInput, StyledLink
} from "./SignIn.style.ts";
import {useForm} from "react-hook-form";
import {useEffect} from "react";
import {usePostLogin} from "../../../hooks/usePostLogin.ts";
import {PostLoginParams} from "../../../api/postLogin.ts";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '622px',
        padding: '72px 71px 76px 76px'
    },
};

interface SignInProps {
    open: boolean;
    closeModal: () => void;
}

type SignInFormFields = PostLoginParams;

const SignIn = ({open, closeModal}: SignInProps) => {
    const {register, handleSubmit, formState} = useForm<SignInFormFields>();
    const isError = formState.isSubmitted && !formState.isValid;
    const postLoginMutation = usePostLogin();
    const onSubmit = handleSubmit((data) => {
        postLoginMutation.mutate(data);
    })

    useEffect(() => {
        console.log(formState.isSubmitted);
    }, [formState])

    return (
        <Modal
            isOpen={open}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <StyledContent>
                <StyledH2>OpenSSUpot</StyledH2>
                <StyledH3>로그인</StyledH3>
                <form onSubmit={onSubmit}>
                    <StyledFieldWrapper>
                        <StyledFieldLabel htmlFor="email">이메일</StyledFieldLabel>
                        <StyledInput id="email" {...register("email", {required: true})} type="email" />
                    </StyledFieldWrapper>
                    <StyledFieldWrapper>
                        <StyledFieldLabel htmlFor="password">비밀번호</StyledFieldLabel>
                        <StyledInput id="password" {...register("password", {required: true})} type="password"/>
                    </StyledFieldWrapper>
                    {
                        isError &&
                        <StyledErrorMessage>이메일과 비밀번호를 확인해주세요.</StyledErrorMessage>
                    }
                    <StyledButtonWrapper>
                        <StyledLink to={'/signup'}>
                            <StyledButton type="button" onClick={closeModal} $type="normal">
                                회원가입
                            </StyledButton>
                        </StyledLink>
                        <StyledButton $type="primary">
                            로그인
                        </StyledButton>
                    </StyledButtonWrapper>
                </form>
            </StyledContent>
        </Modal>
    );
}

export default SignIn;