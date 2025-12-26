import event2video from "../assets/event video2.mp4";
import event3video from "../assets/eventvideo3.mp4";
import event4video from "../assets/eventvideo4.mp4";
import event5video from "../assets/eventvideo5.mp4";
import event7video from "../assets/eventvideo7.mp4";

import event1 from "../assets/event2.jpeg";
import event3 from "../assets/event4.jpeg";
import event4 from "../assets/event5.jpeg";
import event5 from "../assets/event6.jpeg";
import event6 from "../assets/event8.jpeg";

import mainpic from "../assets/Mainpic.jpeg";
import MainvideoTraining from "../assets/MainvideoTraining.mp4";
import trainevent1 from "../assets/trainevent1.jpeg";
import practice from "../assets/Practice.jpeg";
import videotraining from "../assets/2ndvideotraining.mp4";

// certificate Iamges of training
import certificate1 from "../assets/certificate (1).jpeg";
import certificate2 from "../assets/certificate (2).jpeg";
import certificate3 from "../assets/certificate (3).jpeg";
import certificate4 from "../assets/certificate (4).jpeg";
import certificate5 from "../assets/certificate (5).jpeg";
import certificate6 from "../assets/certificate (6).jpeg";
import certificate7 from "../assets/certificate (7).jpeg";
import certificate8 from "../assets/certificate (8).jpeg";
import certificate9 from "../assets/certificate (9).jpeg";
import certificate10 from "../assets/certificate (10).jpeg";
import certificate11 from "../assets/certificate (11).jpeg";
import certificate12 from "../assets/certificate (12).jpeg";
import certificate13 from "../assets/certificate (13).jpeg";
import certificate14 from "../assets/certificate (14).jpeg";


export const eventsData = [

  {
    id: "training",
    title: "21st Century Teaching Mindset Training",
    description:
      "A 4-day intensive training program empowering teachers with modern teaching strategies and AI-driven tools to enhance their classroom experience.",
    coverImage: mainpic,

    images: [
      { src: mainpic, alt: "Training Session" },
      { src: trainevent1, alt: "Training Session" },
      { src: practice, alt: "Training Session" },
    ],

    videos: [
      { title:"Training",src:MainvideoTraining},
      { title:"Training",src:videotraining}
    ],
    certificate:[
      {src:certificate1,alt:"Certificate Distribution"},
      {src:certificate2,alt:"Certificate Distribution"},
      {src:certificate3,alt:"Certificate Distribution"},
      {src:certificate4,alt:"Certificate Distribution"},
      {src:certificate5,alt:"Certificate Distribution"},
      {src:certificate6,alt:"Certificate Distribution"},
      {src:certificate7,alt:"Certificate Distribution"},
      {src:certificate8,alt:"Certificate Distribution"},
      {src:certificate9,alt:"Certificate Distribution"},
      {src:certificate10,alt:"Certificate Distribution"},
      {src:certificate11,alt:"Certificate Distribution"},
      {src:certificate12,alt:"Certificate Distribution"},
      {src:certificate13,alt:"Certificate Distribution"},
      {src:certificate14,alt:"Certificate Distribution"},
    ]
  },


    {
    id: "summer-camp",
    title: "Summer Camp Certification Ceremony",
    description:
      "Honoring our brilliant participants who completed the summer camp with creativity, teamwork, and innovation.",
    coverImage: event6,

    images: [
      { src: event1, alt: "Certificate Award" },
      { src: event3, alt: "Gift Giving" },
      { src: event4, alt: "Shield Giving" },
      { src: event5, alt: "Group Photo" },
      { src: event6, alt: "Parents & Students" },
    ],

    videos: [
      { title: "Chief Guest Address", src: event2video },
      { title: "Student Showcase", src: event3video },
      { title: "MOU Signing", src: event4video },
      { title: "Award Ceremony", src: event5video },
      { title: "Innovation Exhibition", src: event7video },
    ],
    certificate:[

    ]
  },
];
