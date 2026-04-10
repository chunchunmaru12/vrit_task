import clarityImg from "../assets/task1/clarity.png";
import doingImg from "../assets/task1/doing.png";
import mentorImg from "../assets/task1/mentor.png";
import showcaseImg from "../assets/task1/showcase.png";

export interface Task1CardItem {
  id: number;
  title: string;
  subHeading: string;
  description: string;
  bgColor: string;
  image: string;
  imageAlt: string;
  imageSide: "left" | "right";
}

export const card1Data: Task1CardItem[] = [
  {
    id: 1,
    title: "Start with Clarity",
    subHeading: "Step into a better learning path.",
    description:
      "Overwhelmed by too many learning options? SkillShikshya provides a clear, curated roadmap from the start. Whether you're a beginner or upskilling, we have a path tailored to your growth.",
    bgColor: "#F25F5C",
    image: clarityImg,
    imageAlt: "Student thinking illustration",
    imageSide: "left",
  },
  {
    id: 2,
    title: "Learn by Doing",
    subHeading: "Practical skills, real projects.",
    description:
      "Theory is great, but action is better. At SkillShikshya, you learn by doing. Hands-on projects and real-world scenarios help you build, break, and create leading to true mastery.",
    bgColor: "#5C98A5",
    image: doingImg,
    imageAlt: "Student learning illustration",
    imageSide: "right",
  },
  {
    id: 3,
    title: "Get Mentored & Supported",
    subHeading: "You're not learning alone.",
    description:
      "Stuck or need feedback? SkillShikshya's community of mentors and learners has your back with live support, interactive discussions, and expert insights. You're never on your own.",
    bgColor: "#776CB2",
    image: mentorImg,
    imageAlt: "Mentorship illustration",
    imageSide: "left",
  },
  {
    id: 4,
    title: "Achieve & Showcase",
    subHeading: "Build your portfolio, get job-ready.",
    description:
      "Your journey ends with achievement. Each completed project builds a portfolio showcasing your skills and job readiness, bringing you closer to that dream job, promotion, or your own venture.",
    bgColor: "#B1916A",
    image: showcaseImg,
    imageAlt: "Student showcasing work illustration",
    imageSide: "right",
  },
];