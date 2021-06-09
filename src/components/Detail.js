import styled from "styled-components";

const Detail = (props) => {
    return (
        <Container>
            <Content>
                <Brief>
                <Studio>
                    <Studioname>
                        The Stone Quarry
                    </Studioname>
                    <Title>
                        Army of the Dead
                    </Title>
                </Studio>
                <Runtime>
                    2h 28m
                </Runtime>
                <Release>
                    2021
                </Release>
                <Description>
                    After a zombie outbreak in Las Vegas, a group of mercenaries takes
                    the ultimate gamble by venturing into the quarantine zone for the
                    greatest heist ever.
                </Description>
                </Brief>
                <Btngroup>
                    <Watch>
                        Watch Now
                    </Watch>
                    <List>
                        Add to List
                    </List>
                    </Btngroup>
                    <Overview>
                        <Name>
                            Overview
                        </Name>
                        <Images>
                            <Wrap>
                                <img src="/images/army-1.jpg" alt="" />
                            </Wrap>
                            <Wrap>
                                <img src="/images/army-2.jpg" alt="" />
                            </Wrap>
                            <Wrap>
                                <img src="/images/army-3.jpg" alt="" />
                            </Wrap>
                        </Images>
                    </Overview>
                <Background>
                    <img src = "/images/army-background.jpg" alt = "" />
                </Background>
            </Content>
        </Container>
    )
}

const Container = styled.section`
  font-family: 'Noto Sans JP', sans-serif;
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
  justify-content: left;
  align-items: left;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;

const Brief = styled.div`
  margin-top: 120px;
  margin-left: 10px;
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Studio = styled.div`
display: flex;
flex-direction: column;
`;

const Studioname = styled.div`
font-size: 25px;
text-transform: uppercase;
`;

const Title = styled.div`
margin-bottom: 5px;
font-family: 'Noto Sans JP', sans-serif;
font-size: 70px;
letter-spacing: 2px;
max-width: 700px;
min-height: 1px;
display: block;
width: 100%;
`;

const Runtime = styled.div`
margin-bottom: 10px;
font-size: 15px;
`;

const Release = styled.div`
margin-bottom: 10px;
font-size: 15px;
`;

const Description = styled.div`
margin-bottom: 10px;
margin-top: 10px;
font-size: 15.5px;
`;

const Btngroup = styled.div`
margin-left: 10px;
margin-bottom: 10px;
margin-top: 10px;
font-size: 15px;
display: flex;
flex-direction: row;
`;

const Watch = styled.div`
cursor: pointer;
border-radius: 20px;
background-color: rgb(229, 9, 20);
margin-right: 30px;
cursor: pointer;
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #E50914;
  padding-right: 16px;
  padding-left: 16px;
  transition: all 0.2s ease 0s;
  &:hover {
    background-color: rgb(255, 255, 255);
    color: #000;
    border-color: transparent;
  }
`;

const List = styled.div`
cursor: pointer;
border-radius: 20px;
color: #000;
background-color: rgb(225, 255, 255);
margin-right: 30px;
cursor: pointer;
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  padding-right: 16px;
  padding-left: 16px;
  transition: all 0.2s ease 0s;
  &:hover {
    background-color: rgb(0, 0, 0);
    color: #fff;
    border-color: transparent;
`;

const Overview = styled.div`
margin-left: 10px;
margin-top: 10px;
margin-bottom: 10px;
display: flex;
flex-direction: column;
`;

const Name = styled.div`
font-size: 20px;
`;

const Images = styled.div`
margin-top: 5px;
margin-bottom: 30px;
display: grid;
grid-gap: 25px;
gap: 25px;
grid-template-columns: repeat(4, minmax(0, 1fr));

@media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
padding-top: 55%;
border-radius: 10px;
cursor: pointer;
position: relative;
border: 1px solid rgba(249, 249, 249, 0.1);

img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    position: absolute;
    width: 100%;
    z-index: 1;
    top: 0;
}
`;

const Background = styled.div`
left: 0px;
opacity: 0.8;
position: fixed;
right: 0px;
top: 0px;
z-index: -1;
img {
  width: 100vw;
  height: 100vh;
  @media (max-width: 768px) {
    width: initial;
  }
}
`;

export default Detail;