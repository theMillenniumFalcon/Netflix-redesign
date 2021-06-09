import styled from "styled-components";

const Login_2 = (props) => {
  return (
    <Container>
      <Content>
        <Brief>
          <Available>
            Season-3 now on Netflix
          </Available>
          <Name>
            Dark
          </Name>
          <Description>
          In the aftermath of a child's disappearance, Dark follows characters from the 
          fictional German town of Winden as they pursue the truth. They follow connections 
          between four estranged families to unravel a sinister time travel conspiracy which spans several generations.
          </Description>
        </Brief>
        <Button>
          Start Watching
        </Button>
        <DownButton>
          <DownArrow src="/images/down-arrow.svg" />
        </DownButton>
        <BgImage />
      </Content>
    </Container>
  );
};

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: left;
  height: 100vh;
`;

const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: left;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;

const BgImage = styled.div`
  height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("/images/dark-background.jpg");
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
`;

const Brief = styled.div`
margin-top: 170px;
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Available = styled.div`
  text-transform: uppercase;
  letter-spacing: 5px;
  margin-top: 10px;
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;
`;

const Name = styled.div`
margin-bottom: 5px;
font-family: 'Roboto', sans-serif;
font-size: 64px;
text-transform: uppercase;
letter-spacing: 6px;
max-width: 600px;
min-height: 1px;
display: block;
width: 100%;
`;

const Description = styled.p`
  margin-top; 30px;
  margin-bottom; 30px;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: 1.5px;
`;

const Button = styled.div`
margin-top: 20px;
margin-bottom: 110px;
max-width: 180px;
cursor: pointer;
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 2px;
  padding-right: 10px;
  padding-left: 16px;
  transition: all 0.2s ease 0s;
  &:hover {
    background-color: rgb(255, 255, 255);
    color: #000;
    border-color: transparent;
  }
`;

const DownButton = styled.div`
height: 10%;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const DownArrow = styled.img`
margin-top: 30px;
height: 40px;
animation: animateDown infinite 1.5s;
`;

export default Login_2;