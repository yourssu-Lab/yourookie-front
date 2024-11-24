import Modal from "react-modal";
import {
    StyledButton,
    StyledButtonWrapper,
    StyledContent, StyledErrorMessage,
    StyledFieldLabel,
    StyledFieldWrapper,
    StyledH2, StyledHeader,
    StyledInput, StyledLink, StyledLogo
} from "./SignIn.style.ts";
import {useForm} from "react-hook-form";
import {usePostLogin} from "../../../hooks/usePostLogin.ts";
import {PostLoginParams} from "../../../api/postLogin.ts";

const customStyles = {
    overlay: {
        background: 'rgba(50, 49, 49, 0.40)',
    },
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        padding: '50px'
    },
};

interface SignInProps {
    open: boolean;
    closeModal: () => void;
}

type SignInFormFields = PostLoginParams;

const SignIn = ({open, closeModal}: SignInProps) => {
    const {register, handleSubmit, formState} = useForm<SignInFormFields>();
    const postLoginMutation = usePostLogin({
        then: closeModal
    });
    const onSubmit = handleSubmit((data) => {
        postLoginMutation.mutate(data);
    })

    return (
        <Modal
            isOpen={open}
            onRequestClose={closeModal}
            style={customStyles}
        >
            <StyledContent>
                <StyledHeader>
                    <StyledH2>로그인</StyledH2>
                    <StyledLogo>openssupot</StyledLogo>
                </StyledHeader>

                <form onSubmit={onSubmit}>
                    <StyledFieldWrapper>
                        <StyledFieldLabel htmlFor="email">이메일</StyledFieldLabel>
                        <StyledInput 
                            id="email" 
                            {...register("email", {required: true})} 
                            type="email"
                            placeholder="이메일을 입력하세요"
                        />
                    </StyledFieldWrapper>
                    <StyledFieldWrapper>
                        <StyledFieldLabel htmlFor="password">비밀번호</StyledFieldLabel>
                        <StyledInput 
                            id="password" 
                            {...register("password", {required: true})} 
                            type="password"
                            placeholder="비밀번호를 입력하세요"
                        />
                    </StyledFieldWrapper>
                    <StyledErrorMessage>{(formState.errors.email || formState.errors.password || postLoginMutation.isError) && "이메일과 비밀번호를 확인해주세요."}</StyledErrorMessage>
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