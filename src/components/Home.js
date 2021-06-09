import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Continue from "./Continue";
import Categories from "./Categories";
import Hollywood from "./Hollywood";
import Drama from "./Drama"
import Documentary from "./Documentary"
import Scifi from "./Scifi"
import Extra from "./Extra"

const Home = (props) => {
    return (
        <Container>
            <ImgSlider />
            <Continue />
            <Categories />
            <Hollywood />
            <Drama />
            <Documentary />
            <Scifi />
            <Extra />
        </Container>
    );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
  &:after {
    background: url("/images/home-background.jpg") center center / cover no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;