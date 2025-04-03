import Modal from 'react-modal';
import {
  StyledButton,
  StyledButtonWrapper,
  StyledLogo,
  StyledText,
  StyledWrapper,
} from './LoginAlert.style';

const customStyles = {
  overlay: {
    background: 'rgba(0, 0, 0, 0.40)',
  },
  content: {
    top: '166px',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, 0)',
    padding: '23px 35px',
    width: '400px',
    height: '250px',
    borderRadius: '20px',
  },
};

interface LoginAlertProps {
  open: boolean;
  closeModal: () => void;
}

const LoginAlert = ({ open, closeModal }: LoginAlertProps) => {
  return (
    <Modal
      isOpen={open}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <StyledWrapper>
        <StyledLogo>OPENSSUpot</StyledLogo>
        <StyledText>로그인 후 이용 가능합니다.</StyledText>
        <StyledButtonWrapper>
          <StyledButton onClick={closeModal}>닫기</StyledButton>
        </StyledButtonWrapper>
      </StyledWrapper>
    </Modal>
  );
};

export default LoginAlert;
