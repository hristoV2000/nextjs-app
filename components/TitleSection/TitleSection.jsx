import {StyledTitle, StyledSubTitle, StyledHeaderContainer} from "./elements";

export const TitleSection = ({title, subtitle, isMainTitle = true, selected=false}) => {
    return (
      <StyledHeaderContainer isMainTitle={isMainTitle}>
        <StyledTitle selected={selected}>{title}</StyledTitle>
          <StyledSubTitle>{subtitle}</StyledSubTitle>
      </StyledHeaderContainer>
    );
  };