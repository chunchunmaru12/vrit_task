import React from "react";
import CustomCards from "./CustomCards";

type HoverItem = {
  content: string;
  contentSize: string;
  contentPosition: string;
  image: string;
  imageCoords: string;
  bgImage: string;
};

type CardItem = {
  title: string;
  subTitle?: string;
  description: string;
  image: string;
  bgColor: string;
  imagePosition: "left" | "right";
  imageCoords: string;
  hoverData?: HoverItem[];
};

const cards: CardItem[] = [
  {
    title: "Start with Clarity",
    subTitle: "Step into a better learning path.",
    description:
      "Overwhelmed by too many learning options? SkillShikshya provides a clear, curated roadmap from the start. Whether you're a beginner or upskilling, we have a path tailored to your growth.",
    image: "/Clarity.svg",
    bgColor: "#F45b5b",
    imagePosition: "left",
    imageCoords: "-left-20 -top-[8px]",
    hoverData: [
      {
        content: "Clarity unlocked—stickers, sips, and skills all in one go!",
        contentSize: "w-[230px]",
        contentPosition: "bottom-[315px] left-[346px]",
        image: "/RedHover.svg",
        imageCoords: "left-[24px] top-[6px]",
        bgImage: "/RedCard.svg",
      },
    ],
  },
  {
    title: "Learn by Doing",
    subTitle: "Practical skills, real projects.",
    description:
      "Theory is great, but action is better. At SkillShikshya, you learn by doing. Hands-on projects and real-world scenarios help you build, break, and create-leading to true mastery.",
    image: "/Doing.svg",
    bgColor: "#5492a0",
    imagePosition: "right",
    imageCoords: "left-[380px] top-[-14px]",
    hoverData: [
      {
        content: "Focused faces—learning mode: ON!",
        contentSize: "w-[241px]",
        contentPosition: "top-[-340px] left-[80px]",
        image: "/BlueHover1.svg",
        imageCoords: "left-[60px] top-[10px]",
        bgImage: "/BlueCard.svg",
      },
      {
        content: "Laptops, lessons, and a whole lot of growth!",
        contentSize: "w-[380px] text-center",
        contentPosition: "top-[-340px] left-[100px]",
        image: "/BlueHover2.svg",
        imageCoords: "left-[12px] top-[2px]",
        bgImage: "/BlueCard.svg",
      },
    ],
  },
  {
    title: "Get Mentored & Supported",
    subTitle: "You're not learning alone.",
    description:
      "Stuck or need feedback? SkillShikshya’s community of mentors and learners has your back with live support, interactive discussions, and expert insights. You’re never on your own.",
    image: "/Mentored.svg",
    bgColor: "#6c64a8",
    imagePosition: "left",
    imageCoords: "-left-[48.92px] -top-[106px]",
  },
  {
    title: "Achieve & Showcase",
    subTitle: "Build your portfolio, get job-ready.",
    description:
      "Your journey ends with achievement. Each completed project builds a portfolio showcasing your skills and job readiness, bringing you closer to that dream job, promotion, or your own venture.",
    image: "/Achieve.svg",
    bgColor: "#a88964",
    imagePosition: "right",
    imageCoords: "-right-[20px] -top-[60px] rotate-[-6.05deg]",
  },
];

const JourneySection: React.FC = () => {
  return (
    <section className="min-h-screen w-full bg-[#FAFAFC] flex flex-col items-center py-16 px-6">
      <div className="max-w-7xl w-full">
        <div className="mb-16 space-y-2">
          <p className="text-gray-800 font-medium text-[24px] pb-4">
            Your SkillShikshya Journey
          </p>

          <h1 className="text-[32px] md:text-5xl font-extrabold">
            <span className="text-[#1DA077]">Step</span> In.{" "}
            <span className="text-[#1DA077]">Skill</span> Up.{" "}
            <span className="text-[#1DA077]">Stand</span> Out. 🚀
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10">
          {cards.map((card, index) => (
            <CustomCards key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneySection;