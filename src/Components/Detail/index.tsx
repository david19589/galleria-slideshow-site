import styled from "styled-components";
import Data from "../data";
import View from "/src/assets/shared/icon-view-image.svg";
import Prev from "/src/assets/shared/icon-back-button.svg";
import Next from "/src/assets/shared/icon-next-button.svg";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail1() {
  const { Art } = useParams();
  const ArtTitle = Art ? Art : "";
  const initialIndex = Data.findIndex(
    (item) => item.name.toLowerCase() === ArtTitle.toLowerCase()
  );
  const [currentIndex, setCurrentIndex] = useState<number>(
    initialIndex !== -1 ? initialIndex : 0
  );

  const handleDecrement = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Data.length - 1 : prevIndex - 1
    );
    window.history.pushState(
      null,
      "",
      `/Art/${Data[currentIndex - 1].name.toLowerCase()}`
    );
  };

  const handleIncrement = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === Data.length - 1 ? 0 : prevIndex + 1
    );
    window.history.pushState(
      null,
      "",
      `/Art/${Data[currentIndex + 1].name.toLowerCase()}`
    );
  };

  const ArtObj = Data[currentIndex];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentIndex]);

  return (
    <>
      {ArtObj && (
        <Container>
          <SecondContainer>
            <ThirdContainer>
              <InnerContainer>
                <ArtImg src={ArtObj.images.gallery} alt={ArtObj.name} />
                <ViewBox>
                  <ViewSvg src={View} alt="View" />
                  <ViewImageH1>VIEW IMAGE</ViewImageH1>
                </ViewBox>
              </InnerContainer>
              <BoxOfH>
                <ArtName>{ArtObj.name}</ArtName>
                <ArtistName>{ArtObj.artist.name}</ArtistName>
              </BoxOfH>
            </ThirdContainer>
            <ArtistImg src={ArtObj.artist.image} alt={ArtObj.artist.name} />
          </SecondContainer>
          <InfoDiv>
            <YearOfArt>{ArtObj.year}</YearOfArt>
            <ArtInfo>{ArtObj.description}</ArtInfo>
            <Anchor
              href={ArtObj.source}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Source>GO TO SOURCE</Source>
            </Anchor>
          </InfoDiv>
          <LinesBox>
            <Line1></Line1>
            <Line2 width={(currentIndex / (Data.length - 1)) * 100}></Line2>
          </LinesBox>
          <PrevNextBox>
            <ArtName2ArtistName2>
              <ArtName2>{ArtObj.name}</ArtName2>
              <ArtistName2>{ArtObj.artist.name}</ArtistName2>
            </ArtName2ArtistName2>
            <PrevNext>
              <PrevPage
                onClick={() => {
                  handleDecrement();
                }}
                src={Prev}
                alt="Prev"
                style={{ opacity: currentIndex === 0 ? 0.4 : 1 }}
                disabled={currentIndex === 0}
              />
              <NextPage
                onClick={() => {
                  handleIncrement();
                }}
                src={Next}
                alt="Next"
                style={{ opacity: currentIndex === Data.length - 1 ? 0.4 : 1 }}
                disabled={currentIndex === Data.length - 1}
              />
            </PrevNext>
          </PrevNextBox>
        </Container>
      )}
    </>
  );
}

export default Detail1;

const Container = styled.div`
  padding: 24px;
`;

const InnerContainer = styled.div`
  position: relative;
  overflow: hidden;
`;

const ArtImg = styled.img`
  width: 100%;
  margin-bottom: 24px;
`;

const ViewBox = styled.div`
  width: fit-content;
  background-color: #000;
  padding-right: 16px;
  padding-left: 16px;
  padding-top: 14px;
  padding-bottom: 13px;
  display: flex;
  position: absolute;
  top: 16px;
  left: 16px;
  cursor: pointer;
`;

const ViewSvg = styled.img`
  margin-right: 14px;
`;

const ViewImageH1 = styled.div`
  font-weight: 700;
  font-size: 10px;
  line-height: 12.4px;
  letter-spacing: 2.14px;
  color: #fff;
`;

const BoxOfH = styled.div`
  width: fit-content;
  background-color: #fff;
  padding: 24px;
  max-width: 232px;
  transform: translate(0px, -75px);
`;

const ArtName = styled.h1`
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #000;
  margin-bottom: 8px;
  margin-top: 0px;
`;

const ArtistName = styled.h2`
  font-weight: 400;
  font-size: 15px;
  line-height: 18.6px;
  color: #7d7d7d;
  margin: 0px;
`;

const SecondContainer = styled.div``;

const ArtistImg = styled.img`
  width: 64px;
  margin-left: 16px;
  transform: translate(0px, -75px);
`;

const ThirdContainer = styled.div``;

const InfoDiv = styled.div`
  transform: translate(0px, -100px);
`;

const YearOfArt = styled.span`
  font-weight: 700;
  font-size: 100px;
  line-height: 100px;
  color: #f3f3f3;
  display: flex;
  justify-content: flex-end;
  max-width: 327px;
`;

const ArtInfo = styled.p`
  font-weight: 700;
  font-size: 14px;
  line-height: 28px;
  color: #7d7d7d;
  margin-bottom: 68px;
  max-width: 327px;
  transform: translate(0px, -40px);
`;

const Anchor = styled.a`
  width: fit-content;
  display: flex;
`;

const Source = styled.h1`
  font-weight: 700;
  font-size: 9px;
  line-height: 11.16px;
  letter-spacing: 1.93px;
  width: fit-content;
  color: #7d7d7d;
  text-decoration: underline;
  cursor: pointer;
  margin: 0px;
`;

const LinesBox = styled.div`
  margin-left: -48px;
  margin-bottom: 16px;
  position: relative;
  right: -24px;
`;

const Line1 = styled.span`
  width: 100%;
  height: 1px;
  background-color: #e5e5e5;
  display: flex;
`;

const Line2 = styled.span<{ width: number }>`
  width: ${({ width }) => `${width}%`};
  height: 1px;
  background-color: #000;
  display: flex;
  margin-top: -1px;
`;

const PrevNextBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ArtName2 = styled(ArtName)`
  font-size: 14px;
  line-height: 17.36px;
  margin-bottom: 9px;
`;

const ArtistName2 = styled(ArtistName)`
  font-size: 10px;
  line-height: 12.4px;
`;

const ArtName2ArtistName2 = styled.div``;

const PrevNext = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const PrevPage = styled.img<{ disabled?: boolean }>`
  width: 16.78px;
  height: 16px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.4 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
`;

const NextPage = styled.img<{ disabled?: boolean }>`
  width: 16.78px;
  height: 16px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.4 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
`;
