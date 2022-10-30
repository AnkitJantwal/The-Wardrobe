import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: cyan;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>Buy 1 get 1 Free. ** valid on all products **</Container>;
};

export default Announcement;
