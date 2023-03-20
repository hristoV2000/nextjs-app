import styled from "styled-components";
import { SectionContainer } from "~/components";

export const StyledMainContainer = styled(SectionContainer)`
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 768px) {
        display: grid;
    }
`;



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
