import Image from "next/image";
import {StyledVideoContainer, StyledImage} from "./elements";

export const Video = ({video}) => {
  return (
    <StyledVideoContainer>
      <StyledImage
        src={video.src}
      />
    </StyledVideoContainer>
  );
};
