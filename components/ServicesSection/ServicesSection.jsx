import { ServiceContainer, Service, IconContainer } from "./elements";
import { TitleSection } from "~/components";
import Image from "next/image";
const Sections = [
  {
    icon: "/img/brief.png",
    title: "Brief",
    desc: "Complete brief writing or simple guidance on what to include, we've got you covered.",
    selected: false
  },
  {
    icon: "/img/search.png",
    title: "Search",
    desc: "In-depth agency search covering; criteria matching, door knocking and due-dillingence vetting.",
    selected: false
  },
  {
    icon: "/img/pitch.png",
    title: "Pitch",
    desc: "Comprehensive pitch management, including comms, dairy management and pitch hosting.",
    selected: true
  },
];

const renderSections = () =>
  Sections.map((section) => (
    <Service selected={section.selected}>
      <IconContainer>
        <Image
          layout="intrinsic"
          src={section.icon}
          alt=""
          width={70}
          height={70}
        />
      </IconContainer>
      <TitleSection title={section.title} subtitle={section.desc} isMainTitle={false} selected={section.selected}/>
    </Service>
  ));

export const ServicesSection = () => {
  return <ServiceContainer>{renderSections()}</ServiceContainer>;
};
