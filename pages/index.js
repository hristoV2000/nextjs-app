import { Hero, Main } from "../sections";

const heroProps = {
  image: { src: "/img/heroimg.png", alt: "", width: 1000, height: 1680 },
  title: "Agency procurement, outsourced.",
  description: "Start the process here",
  ctaText: "Start",
};

const mainProps = {
  image: {src: '/img/background.png'},
  video: {src: '/img/video.png', alt: "", width:658, height: 1050},
  cardData: [
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
  ]
}

export default function Home() {
  return (
    <>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <div>
        <Hero {...heroProps} />
        <Main {...mainProps}/>
      </div>
    </>
  );
}
