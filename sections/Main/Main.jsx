import { Video, TitleSection, ServicesSection } from "~/components";

import { StyledMainContainer, ContentContainer } from "./elements";

export const Main = ({ image, video }) => {
  return (
    <StyledMainContainer id='main'>
      <TitleSection title={'Managed agency selection'} subtitle={'Stengthen your onboarding process'}/>
      <ContentContainer background={image.src}>
        <Video video={video} />
        <ServicesSection/>
      </ContentContainer>
    </StyledMainContainer>
  );
};
