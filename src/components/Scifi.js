import styled from "styled-components";
import { Link } from "react-router-dom";

const Scifi = (props) => {
    return (
        <Container>
          <Nav>
           <Sci>
            Sci-fi:
           </Sci>
           <Explore>
             Explore more
           </Explore>
          </Nav>
            <Content>
               <Wrap>
                   <img src = '/images/interstellar.jpg' alt = '' />
                   <video autoPlay = { true } loop = { true } playsInline = { true }>
                      <source src="/videos/army.mp4" type="video/mp4" />
                      </video>
               </Wrap>
               <Wrap>
                   <img src = '/images/tasm2.jpg' alt = '' />
                   <video autoPlay = { true } loop = { true } playsInline = { true }>
                      <source src="/videos/oxygen.mp4" type="video/mp4" />
                      </video>
               </Wrap>
               <Wrap>
                   <img src = '/images/lucy.jpg' alt = '' />
                   <video autoPlay = { true } loop = { true } playsInline = { true }>
                      <source src="/videos/trial.mp4" type="video/mp4" />
                      </video>
               </Wrap>
               <Wrap>
                   <img src = '/images/tomorrow.jpg' alt = '' />
                   <video autoPlay = { true } loop = { true } playsInline = { true }>
                      <source src="/videos/dot.mp4" type="video/mp4" />
                      </video>
               </Wrap>
               <Wrap>
                   <img src = '/images/inception.jpg' alt = '' />
                   <video autoPlay = { true } loop = { true } playsInline = { true }>
                      <source src="/videos/dot.mp4" type="video/mp4" />
                      </video>
               </Wrap>
               <Wrap>
                   <img src = '/images/transformers.jpg' alt = '' />
                   <video autoPlay = { true } loop = { true } playsInline = { true }>
                      <source src="/videos/dot.mp4" type="video/mp4" />
                      </video>
               </Wrap>
               <Wrap>
                   <img src = '/images/bvs.jpg' alt = '' />
                   <video autoPlay = { true } loop = { true } playsInline = { true }>
                      <source src="/videos/dot.mp4" type="video/mp4" />
                      </video>
               </Wrap>
               <Wrap>
                   <img src = '/images/mortal.jpg' alt = '' />
                   <video autoPlay = { true } loop = { true } playsInline = { true }>
                      <source src="/videos/dot.mp4" type="video/mp4" />
                      </video>
               </Wrap>
            </Content>
        </Container>
    );
};

const Container = styled.div`
margin-top: 5px;
padding: 0 0 26px;

`;

const Content = styled.div`
margin-top: 5px;
display: grid;
grid-gap: 25px;
gap: 25px;
grid-template-columns: repeat(4, minmax(0, 1fr));

@media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
padding-top: 56.25%;
border-radius: 10px;
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
cursor: pointer;
overflow: hidden;
position: relative;
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
border: 3px solid rgba(249, 249, 249, 0.1);

img {
    opacity: 1;
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    position: absolute;
    width: 100%;
    z-index: 1;
    top: 0;
}

video {
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    opacity: 0;
    z-index: 0;
  }
  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    img {
      opacity: 0;
    }
    video {
      opacity: 1;
    }
  }
  }
`;

const Nav = styled.div`
font-size: 20px;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  letter-spacing: 2px;
  z-index: 3;
`;


const Sci = styled.div`
  width: 220px;
  margin-top: 4px;
  margin-bottom: 4px;
  max-height: 70px;
  display: inline-block;
`;

const Explore = styled.div`
cursor: pointer;
`;

export default Scifi;