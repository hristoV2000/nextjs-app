import { CardsSection } from "~/collections";
import { StyledMainContainer, StyledHeaderContainer, StyledTitle, StyledSubTitle,ContentContainer, StyledVideoContainer,StyledImage } from "./elements";

export const Main = ({ image, video, cardData, isMainTitle = true }) => {
  return (
    <StyledMainContainer id='main'>
      <StyledHeaderContainer isMainTitle={isMainTitle}>
        <StyledTitle>Managed agency selection</StyledTitle>
          <StyledSubTitle>Stengthen your onboarding process</StyledSubTitle>
      </StyledHeaderContainer>
      <ContentContainer background={image.src}>
        <StyledVideoContainer>
          <StyledImage
            src={video.src}
          />
        </StyledVideoContainer>
        <CardsSection cardData={cardData}/>
      </ContentContainer>
    </StyledMainContainer>
  );
};