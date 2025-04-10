import Modal from 'react-modal';
import { GetMeetingRoomsParams } from '../../api/getMeetingRooms.ts';
import { useGetMeetingRooms } from '../../hooks/useGetMeetingRooms.ts';
import {
  StyledButton,
  StyledCard,
  StyledCardTitle,
  StyledCardWrapper,
  StyledContent,
  StyledContentTitle,
  StyledContentWrapper,
  StyledLink,
  StyledTitle,
} from './MeetingRoomResult.style.ts';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: 0, // 패딩을 0으로 설정
    borderRadius: '20px',
    background: '#FBFBFB',
    border: 'none',
    maxHeight: '90vh',
    overflow: 'hidden', // 바깥쪽 컨테이너의 overflow를 hidden으로
  },
};

interface MeetingRoomsResultProps {
  open: boolean;
  closeModal: () => void;
  meetingRoomParams: GetMeetingRoomsParams;
}

const MeetingRoomResult = ({ open, closeModal, meetingRoomParams }: MeetingRoomsResultProps) => {
  const { data: results, error } = useGetMeetingRooms(meetingRoomParams);

  return (
    <Modal isOpen={open} onRequestClose={closeModal} style={customStyles}>
      <div
        style={{
          padding: '40px 50px 50px 50px',
          maxHeight: 'calc(90vh - 40px)', // 모달 높이에서 여유분을 뺀 값
          overflowY: 'auto',
        }}
      >
        <StyledTitle>조회 결과</StyledTitle>
        <StyledCardWrapper>
          {error && '서버에서 에러가 발생했습니다.'}
          {results &&
            results.map((result) => (
              <StyledCard key={result.name}>
                <div>
                  <StyledCardTitle>{result.name}</StyledCardTitle>
                  <img
                    style={{ width: '100%', height: '153px', marginTop: '16px' }}
                    width="100%"
                    src={result.spaceImageUrl}
                  />
                  <StyledContentWrapper>
                    <div style={{ width: '100%' }}>
                      <StyledContentTitle>위치</StyledContentTitle>
                      <StyledContent>{result.location}</StyledContent>
                    </div>
                    <div style={{ width: '100%' }}>
                      <StyledContentTitle>이용시간</StyledContentTitle>
                      <StyledContent>{result.operatingTime}</StyledContent>
                    </div>
                    <div style={{ width: '100%' }}>
                      <StyledContentTitle>가능인원</StyledContentTitle>
                      <StyledContent>{result.capacity}</StyledContent>
                    </div>
                  </StyledContentWrapper>
                </div>
                <StyledLink target="_blank" to={result.reservationUrl}>
                  <StyledButton>예약</StyledButton>
                </StyledLink>
              </StyledCard>
            ))}
        </StyledCardWrapper>
      </div>
    </Modal>
  );
};

export default MeetingRoomResult;
