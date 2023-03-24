import styled from "styled-components";
import { SectionContainer } from "~/components";

// MainContainer style

export const StyledMainContainer = styled(SectionContainer)`
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 768px) {
        display: grid;
    }
`;

// TitleContainer style

export const StyledHeaderContainer = styled.div`
  width: 100%;
  margin-top: ${({isMainTitle})=> isMainTitle ? '3rem': '0rem'};
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: ${({isMainTitle})=> isMainTitle ? 'center': 'left'};
  flex-direction: column;

  @media screen and (max-width: 768px) {
        margin-left: 20px;
        margin-bottom: ${({isMainTitle})=> isMainTitle ? '5rem': '1rem'};
    }
`;

export const StyledTitle = styled.h1`
  color: ${({selected})=> selected ? '#20B9FE' : 'black'};
  text-decoration: ${({selected}) => selected ? 'underline' : 'none'};
  font-family: Poppins;
`;
export const StyledSubTitle = styled.p`
  color: black;
  font-family: Poppins;
  padding-right: 10px;
  margin-top: -1rem;
`;

// ContentContainer style

export const ContentContainer = styled.div`
  background-image: ${({ background }) => `url(${background})`};
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-bottom: 100px;

  @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

// VideoContainer and Image style

export const StyledVideoContainer = styled.div`
  max-width: 32.03rem;
  max-height: 65rem;
  width: 100%;
  height: 100%;
`;

export const StyledImage = styled.img`
  object-fit: cover;
  width: 450px;
  height: auto;

  @media screen and (max-width: 768px) {
    width: 350px;
    margin-left: 5rem;
    }
`;