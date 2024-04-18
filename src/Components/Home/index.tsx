import styled from "styled-components";
import Data from "../data";
import { Link } from "react-router-dom";

function Home(props: { slideshowText: boolean; handleClick: () => void }) {
  return (
    <Container>
      {Data.map((item, index) => {
        return (
          <Link to={`/Art/${item.name.toLowerCase()} `} key={index}>
            <InnerContainer onClick={props.handleClick}>
              <ArtImg src={item.images.thumbnail} alt={item.name} />
              <ArtWorkInfo>
                <Title>{item.name}</Title>
                <Author>{item.artist.name}</Author>
              </ArtWorkInfo>
            </InnerContainer>
          </Link>
        );
      })}
    </Container>
  );
}

export default Home;

const Container = styled.div`
  padding: 24px;
`;

const InnerContainer = styled.div`
  position: relative;
  :hover {
    opacity: 70%;
  }
  cursor: pointer;
`;

const ArtImg = styled.img`
  width: 100%;
  margin-bottom: 24px;
`;

const ArtWorkInfo = styled.div`
  width: -webkit-fill-available;
  position: absolute;
  bottom: 28px;
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
