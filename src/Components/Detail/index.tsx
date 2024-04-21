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

  const [showImg, setShowImg] = useState<boolean>(false);

  return (
    <>
      {ArtObj && (
        <Container>
          <SecondContainer>
            <ThirdContainer>
              <InnerContainer>
                <ArtImg src={ArtObj.images.hero.small} alt={ArtObj.name} />
                <ArtImgTablet
                  src={ArtObj.images.hero.large}
                  alt={ArtObj.name}
                />
                <ViewBox
                  onClick={() => {
                    setShowImg(true);
                  }}
                >
                  <ViewSvg src={View} alt="View" />
                  <ViewImageH1>VIEW IMAGE</ViewImageH1>
                </ViewBox>
              </InnerContainer>
              <BoxOfH>
                <ArtName>{ArtObj.name}</ArtName>
                <ArtistName>{ArtObj.artist.name}</ArtistName>
                <ArtistImg src={ArtObj.artist.image} alt={ArtObj.artist.name} />
              </BoxOfH>
            </ThirdContainer>
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
          </SecondContainer>
          <SlideshowArrows>
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
                  style={{
                    opacity: currentIndex === Data.length - 1 ? 0.4 : 1,
                  }}
                  disabled={currentIndex === Data.length - 1}
                />
              </PrevNext>
            </PrevNextBox>
          </SlideshowArrows>
          {showImg ? (
            <FullScreenImg>
              <ClosAndArt>
                <CloseDiv>
                  <Close
                    onClick={() => {
                      setShowImg(false);
                    }}
                  >
                    CLOSE
                  </Close>
                </CloseDiv>
                <FullArtImg src={ArtObj.images.hero.small} alt={ArtObj.name} />
              </ClosAndArt>
            </FullScreenImg>
          ) : (
            ""
          )}
        </Container>
      )}
    </>
  );
}

export default Detail1;

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const InnerContainer = styled.div`
  position: relative;
  overflow: hidden;
`;

const ArtImg = styled.img`
  width: 100%;
  margin-bottom: 24px;
  @media (min-width: 768px) {
    display: none;
  }
`;

const ArtImgTablet = styled.img`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    max-width: 366px;
    margin-bottom: 64px;
  }
  @media (min-width: 1440px) {
    max-width: 435px;
  }
`;

const ViewBox = styled.button`
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
  border: none;
  @media (min-width: 768px) {
    top: unset;
    bottom: 90px;
  }
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
  @media (min-width: 768px) {
    transform: translate(-104px, 0px);
    position: relative;
    padding-left: 64px;
    padding-top: 0px;
    padding-bottom: 67px;
  }
`;

const ArtName = styled.h1`
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #000;
  margin-bottom: 8px;
  margin-top: 0px;
  @media (min-width: 768px) {
    font-size: 56px;
    line-height: 64px;
    margin-bottom: 24px;
    width: 380px;
  }
  @media (min-width: 1440px) {
    width: 363px;
  }
`;

const ArtistName = styled.h2`
  font-weight: 400;
  font-size: 15px;
  line-height: 18.6px;
  color: #7d7d7d;
  margin: 0px;
`;

const SecondContainer = styled.div`
  margin-left: 24px;
  margin-right: 24px;
  margin-top: 24px;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 40px;
    margin-right: 40px;
    margin-top: 40px;
    @media (min-width: 1440px) {
      display: flex;
      flex-direction: row;
      justify-content: center;
      margin-left: unset;
      margin-right: unset;
    }
  }
`;

const ArtistImg = styled.img`
  width: 64px;
  margin-left: 16px;
  transform: translate(-27px, 25px);
  @media (min-width: 768px) {
    position: absolute;
    right: -132px;
    bottom: -103px;
    width: 128px;
  }
`;

const ThirdContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
    align-items: flex-start;
  }
  @media (min-width: 1440px) {
    margin-right: 150px;
  }
`;

const InfoDiv = styled.div`
  transform: translate(0px, -100px);
  @media (min-width: 768px) {
    transform: translate(0px, 0px);
    display: flex;
    flex-direction: column;
    max-width: 457px;
  }
  @media (min-width: 1440px) {
    max-width: 350px;
  }
`;

const YearOfArt = styled.span`
  font-weight: 700;
  font-size: 100px;
  line-height: 100px;
  color: #f3f3f3;
  display: flex;
  justify-content: flex-end;
  max-width: 327px;
  @media (min-width: 768px) {
    font-size: 200px;
    line-height: 150px;
    max-width: 476px;
    transform: translate(-130px, 0px);
  }
  @media (min-width: 1440px) {
    transform: translate(88px, 0px);
    max-width: unset;
  }
`;

const ArtInfo = styled.p`
  font-weight: 700;
  font-size: 14px;
  line-height: 28px;
  color: #7d7d7d;
  margin-bottom: 68px;
  max-width: 327px;
  transform: translate(0px, -40px);
  @media (min-width: 768px) {
    max-width: 457px;
    align-self: center;
    transform: translate(0px, -75px);
    margin: 0;
  }
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
  @media (min-width: 768px) {
    margin-bottom: 50px;
  }
`;

const SlideshowArrows = styled.div`
  @media (min-width: 1440px) {
    width: 100%;
  }
`;

const LinesBox = styled.div`
  margin-bottom: 16px;
  position: relative;
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
  margin-left: 24px;
  margin-right: 24px;
`;

const ArtName2 = styled.h1`
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #000;
  margin-bottom: 8px;
  margin-top: 0px;
  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 22.32px;
  }
`;

const ArtistName2 = styled.h1`
  font-weight: 400;
  color: #7d7d7d;
  margin: 0px;
  font-size: 10px;
  line-height: 12.4px;
  @media (min-width: 768px) {
    font-size: 13px;
    line-height: 16.12px;
  }
`;

const ArtName2ArtistName2 = styled.div`
  margin-bottom: 24px;
`;

const PrevNext = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 24px;
`;

const PrevPage = styled.img<{ disabled?: boolean }>`
  width: 16.78px;
  height: 16px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.4 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
  @media (min-width: 768px) {
    width: 23.77px;
    height: 23.77px;
  }
`;

const NextPage = styled.img<{ disabled?: boolean }>`
  width: 16.78px;
  height: 16px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.4 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
  @media (min-width: 768px) {
    width: 23.77px;
    height: 23.77px;
  }
`;

const Close = styled.button`
  font-weight: 700;
  font-size: 14px;
  line-height: 17.36px;
  letter-spacing: 3px;
  text-align: Right;
  cursor: pointer;
  margin-bottom: 20px;
  width: fit-content;
  height: fit-content;
  color: #fff;
  background-color: unset;
  border: none;
`;

const CloseDiv = styled.div`
  height: 120px;
  :hover {
    opacity: 0.25;
  }
  display: flex;
  align-items: flex-end;
  @media (min-width: 768px) {
    height: 70px;
  }
`;

const FullArtImg = styled.img`
  width: 100%;
  align-self: center;
`;

const ClosAndArt = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  max-width: 1000px;
`;

const FullScreenImg = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  padding: 24px;
  padding-right: 24px;
  background-color: #000000e0;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    padding-left: 150px;
    padding-right: 150px;
  }
  @media (min-width: 1080px) {
    padding-left: 280px;
    padding-right: 280px;
  }
  @media (min-width: 1440px) {
    padding-left: 280px;
    padding-right: 280px;
    align-items: center;
  }
`;
