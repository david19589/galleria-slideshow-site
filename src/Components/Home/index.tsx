import styled from "styled-components";
import Data from "../data";
import { Link } from "react-router-dom";

function Home(props: { slideshowText: boolean; handleClick: () => void }) {
  return (
    <Container>
      {Data.map((item, index) => {
        return (
          <SecondContainer key={index}>
            <StyledLink to={`/Art/${item.name.toLowerCase()} `}>
              <InnerContainer onClick={props.handleClick}>
                <ArtImg src={item.images.thumbnail} alt={item.name} />
                <ArtWorkInfo>
                  <Title>{item.name}</Title>
                  <Author>{item.artist.name}</Author>
                </ArtWorkInfo>
              </InnerContainer>
            </StyledLink>
          </SecondContainer>
        );
      })}
    </Container>
  );
}

export default Home;

const Container = styled.div`
  padding: 24px;
  @media (min-width: 768px) {
    -webkit-columns: 2;
    column-count: 2;
    padding: 40px;
    gap: 30px;
  }
  @media (min-width: 1440px) {
    -webkit-columns: 4;
    column-count: 4;
    padding: 40px;
    gap: 30px;
  }
`;

const SecondContainer = styled.div`
  margin-bottom: 24px;
  @media (min-width: 768px) {
    height: fit-content;
    margin-bottom: 30px;
  }
`;

const StyledLink = styled(Link)`
  height: fit-content;
`;

const ArtImg = styled.img`
  width: 100%;
`;

const InnerContainer = styled.div`
  position: relative;
  cursor: pointer;
  &:hover {
    ${ArtImg} {
      opacity: 0.8;
    }
  }
  @media (min-width: 768px) {
  }
`;

const ArtWorkInfo = styled.div`
  width: -webkit-fill-available;
  position: absolute;
  bottom: 2px;
  padding: 32px;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.0001) 0%,
    rgba(0, 0, 0, 0.841672) 100%
  );
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 24px;
  line-height: 29.76px;
  color: #fff;
  margin-bottom: 6px;
`;

const Author = styled.p`
  font-weight: 400;
  font-size: 13px;
  line-height: 16.12px;
  color: #fff;
  opacity: 75.28%;
  margin: 0px;
`;
