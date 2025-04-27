import Modal from 'react-modal';
import {
  StyledButton,
  StyledButtonWrapper,
  StyledText,
  StyledWrapper,
} from './LoginAlert.style.ts';

const customStyles = {
  overlay: {
    background: 'rgba(0, 0, 0, 0.40)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    padding: '24px 36px',
    width: '400px',
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
        <StyledText>로그인 후 이용 가능합니다.</StyledText>
        <StyledButtonWrapper>
          <StyledButton onClick={closeModal}>닫기</StyledButton>
        </StyledButtonWrapper>
      </StyledWrapper>
    </Modal>
  );
};

export default LoginAlert;
