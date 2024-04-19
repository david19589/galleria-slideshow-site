import styled from "styled-components";
import Logo from "/src/assets/shared/logo.svg";
import { Link } from "react-router-dom";

function Header(props: {
  slideshowText: boolean;
  setSlideshowText: React.Dispatch<React.SetStateAction<boolean>>;
  handleClick: () => void;
}) {
  return (
    <>
      <Container>
        <Link to="/">
          <LogoImg onClick={props.handleClick} src={Logo} alt="logo" />
        </Link>
        <StyledLink
          to={props.slideshowText ? "/" : "/Art/starry night"}
          onClick={props.handleClick}
        >
          <Title
            onClick={() => {
              props.handleClick;
            }}
          >
            {props.slideshowText ? "STOP SLIDESHOW" : "START SLIDESHOW"}
          </Title>
        </StyledLink>
      </Container>
      <Line></Line>
    </>
  );
}

export default Header;

const StyledLink = styled(Link)`
  cursor: default;
  text-decoration: none;
  color: inherit;
  :hover {
    color: #000;
  }
`;

const Container = styled.div`
  padding: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoImg = styled.img`
  width: 140px;
  margin-right: 10px;
  cursor: pointer;
`;

const Title = styled.button`
  font-weight: 700;
  font-size: 9px;
  line-height: 11.16px;
  letter-spacing: 1.93px;
  color: #7d7d7d;
  margin: 0px;
  cursor: pointer;
  border: none;
  background-color: unset;
  @media (min-width: 768px) {
    font-size: 12px;
    line-height: 14.88px;
    letter-spacing: 2.57px;
  }
`;

const Line = styled.span`
  width: 100%;
  height: 1px;
  background-color: #e5e5e5;
  display: flex;
  @media (min-width: 768px) {
    margin-bottom: 16px;
  }
  @media (min-width: 1440px) {
    margin-bottom: 45px;
  }
`;
