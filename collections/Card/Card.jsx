import { CardContainer, Card, IconContainer } from "./elements";
import { StyledHeaderContainer, StyledTitle, StyledSubTitle } from "../../sections/Main/elements";
import Image from "next/image";

export const CardsSection = ({cardData,isMainTitle,selected,title,subtitle}) => {
const renderSections = (cards) =>
  cards.map((section) => (
    <Card selected={section.selected}>
      <IconContainer>
        <Image
          layout="intrinsic"
          src={section.icon}
          alt=""
          width={70}
          height={70}
        />
      </IconContainer>
      <StyledHeaderContainer isMainTitle={isMainTitle}>
        <StyledTitle selected={selected}>{section.title}</StyledTitle>
          <StyledSubTitle>{section.desc}</StyledSubTitle>
      </StyledHeaderContainer>
    </Card>
  ));
  return <CardContainer>{renderSections(cardData)}</CardContainer>;
};
