import styled from 'styled-components'

const Categories = (props) => {
    return (
        <Container>
            <Nav>
                <Categories_1>
                    Categories:
                </Categories_1>
                <Explore>
                    Explore more
                </Explore>
            </Nav>
            <Content>
            <Wrap>
                <span>Action</span>
            </Wrap>
            <Wrap>
                <span>Comedy</span>
            </Wrap>
            <Wrap>
                <span>Thriller</span>
            </Wrap>
            <Wrap>
                <span>Animation</span>
            </Wrap>
            <Wrap>
                <span>Adventure</span>
            </Wrap>
            <Wrap>
                <span>Documentry</span>
            </Wrap>
            <Wrap>
                <span>Fantasy</span>
            </Wrap>
            <Wrap>
                <span>Drama</span>
            </Wrap>
            </Content>
        </Container>
    )
}

const Container = styled.div`
margin-top: 5px;
padding: 0 0 26px;
  `;

  const Content = styled.div`
  margin-top: 5px;
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  font-size: 13px;
  grid-template-columns: repeat(8, minmax(0, 1fr));
  
  @media (max-width: 768px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  @media (max-width: 1500px) {
      grid-template-columns: repeat(4, minmax(0, 1fr));
      font-size: 9.5px;
    }
  `;

const Wrap = styled.div`
   text-transform: uppercase;
   background-color: rgba(0, 0, 0, 0.6);
   padding: 8px 16px;
   box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
   letter-spacing: 1.5px;
   border: 1px solid #f9f9f9;
   padding-top: 4%;
   padding-bottom: 4%;
   border-radius: 14px;
   cursor: pointer;
   overflow: hidden;
   position: relative;
   transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

   span {
       display: flex;
       justify-content: center;
    height: 100%;
    object-fit: cover;
    position: relative;
    width: 100%;
    z-index: 1;
    top: 0;
   }


  &:hover {
    background-color: rgb(229, 9, 20);
    transform: scale(1.05);
    color: #000;
    border-color: transparent;
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


const Categories_1 = styled.div`
  width: 220px;
  margin-top: 4px;
  margin-bottom: 4px;
  max-height: 70px;
  display: inline-block;
`;

const Explore = styled.div`
cursor: pointer;
`;

export default Categories;