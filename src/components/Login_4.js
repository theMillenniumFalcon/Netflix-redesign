import styled from "styled-components";

const Login_4 = (props) => {
  return (
    <Container>
      <Content>
        <Brief>
          <Available>
            Season-1 now on Netflix
          </Available>
          <Name_1>
            The
          </Name_1>
          <Name_2>
            Queen's Gambit
          </Name_2>
          <Description>
          In a 1950s orphanage, a young girl reveals an astonishing talent for chess 
          and begins an unlikely journey to stardom while grappling with addiction.
          </Description>
        </Brief>
        <Button>
          Start Watching
        </Button>
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
  background-image: url("/images/queen-background.jpg");
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
`;

const Brief = styled.div`
color: #000000;
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
color: #000000;
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
  font-size: 13px;
  line-height: 1.5;
  letter-spacing: 1.5px;
`;

const Button = styled.div`
color: #000000;
margin-top: 20px;
margin-bottom: 110px;
max-width: 180px;
cursor: pointer;
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #000000;
  border-radius: 2px;
  padding-right: 10px;
  padding-left: 16px;
  transition: all 0.2s ease 0s;
  &:hover {
    background-color: rgb(0, 0, 0);
    color: #ffffff;
    border-color: transparent;
  }
`;

export default Login_4;