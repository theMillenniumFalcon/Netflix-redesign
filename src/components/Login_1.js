import styled from "styled-components";

const Login_1 = (props) => {
  return (
    <Container>
      <Content>
        <Brief>
          <Available>
            Now on Netflix
          </Available>
          <Name_1>
            The
          </Name_1>
          <Name_2>
            Irishman
          </Name_2>
          <Description>
            In the 1950s, truck driver Frank Sheeran gets involved with Russell Bufalino and his Pennsylvania crime family.
            As Sheeran climbs the ranks to become a top hit man, he also goes to work for Jimmy Hoffa --
            a powerful Teamster tied to organized crime.
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
  background-image: url("/images/irish-background.jpg");
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
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;
`;

const Name_1 = styled.a`
margin-top: 5px;
font-family: 'Noto Sans JP', sans-serif;
font-size: 50px;
text-transform: uppercase;
letter-spacing:2px;
max-width: 600px;
min-height: 1px;
display: block;
width: 100%;
`;

const Name_2 = styled.div`
margin-bottom: 5px;
font-family: 'Noto Sans JP', sans-serif;
font-size: 70px;
text-transform: uppercase;
letter-spacing:2px;
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

export default Login_1;