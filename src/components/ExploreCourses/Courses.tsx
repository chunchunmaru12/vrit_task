import React, { useState } from "react";
import ArrowRight from "../../assets/arrowRight.png";
import reactImg from "../../assets/react.png";
import ratingImg from "../../assets/pen.png";
import likesImg from "../../assets/like.png";
import vueImg from "../../assets/vue.png";

type Course = {
  id: number;
  number: string;
  title: string;
  description: string;
};

type CourseCardProps = Course & {
  activeId: number;
  isActive: boolean;
  onCardClick: (id: number) => void;
};

const coursesData: Course[] = [
  {
    id: 1,
    number: "23",
    title: "All Courses",
    description: "courses you're powering through right now.",
  },
  {
    id: 2,
    number: "05",
    title: "Upcoming Courses",
    description: "exciting new courses waiting to boost your skills.",
  },
  {
    id: 3,
    number: "10",
    title: "Ongoing Courses",
    description: "currently happening—don't miss out on the action!",
  },
];

const Courses: React.FC = () => {
  const [activeId, setActiveId] = useState<number>(1);

  const onCardClick = (id: number) => {
    setActiveId(id);
  };

  return (
<div className="w-full mx-auto my-12 flex flex-col items-center gap-4 xl:flex-row xl:justify-center xl:gap-4 xl:max-w-[92rem]">
      {coursesData.map((course) => (
        <CourseCard
          key={course.id}
          {...course}
          activeId={activeId}
          isActive={activeId === course.id}
          onCardClick={onCardClick}
        />
      ))}
    </div>
  );
};

const CourseCard: React.FC<CourseCardProps> = ({
  id,
  activeId,
  isActive,
  onCardClick,
  number,
  title,
  description,
}) => {
  const imageStateClass =
    !isActive && id < activeId
      ? "translate-x-full opacity-0"
      : !isActive && id > activeId
      ? "-translate-x-full opacity-0"
      : "translate-x-0 opacity-100";

  return (
    <div
  className={`shrink-0 overflow-hidden rounded-[2rem] transition-all duration-1000 w-[15rem] md:w-[17.5rem] ${
    isActive ? "md:w-[36rem]" : ""
  }`}
  style={{
    transitionTimingFunction: "cubic-bezier(0.68, -0.55, 0.27, 1.55)",
  }}
>
      <div
        onClick={() => onCardClick(id)}
        className={`relative overflow-hidden rounded-[2rem] cursor-pointer w-full md:w-[31rem] px-6 py-6 md:pt-10 md:pr-8 md:pb-4 md:pl-12 transition-colors duration-500 ${
          isActive ? "text-[#f9ebec]" : "text-[var(--course-primary)]"
        } bg-[#f9ebec]`}
      >
        <div
          className={`absolute bottom-[1%] left-[-1%] z-0 h-[10px] w-[10px] rounded-full bg-[var(--course-primary)] transition-transform duration-500 ${
            isActive ? "scale-[200]" : "scale-100"
          }`}
        />

        <div className="relative z-[1] ml-auto flex w-fit items-center justify-end gap-2 font-sans text-base md:text-[1.15rem] font-medium max-md:hidden">
          <span className="max-md:hidden">View all Courses</span>
          <span className="flex group-hover:animate-[arrow-animation_1s_ease-in-out_infinite]">
            <img
              src={ArrowRight}
              alt="Arrow Right"
              className="w-3 md:w-[0.875rem] h-full object-contain"
            />
          </span>
        </div>

        <div
          className={`relative z-[1] my-12 flex items-center justify-around gap-4 transition-all duration-1000 ${imageStateClass}`}
          style={{
            transitionTimingFunction: "cubic-bezier(0.68, -0.55, 0.27, 1.55)",
            transitionDelay: "0.1s",
          }}
        >
          <img
            src={reactImg}
            alt="React"
            className="h-auto max-h-16 w-16 object-contain md:max-h-20 md:w-20"
          />
          <img
            src={likesImg}
            alt="Likes"
            className="h-auto max-h-16 w-16 object-contain md:max-h-20 md:w-20"
          />
          <img
            src={vueImg}
            alt="Vue"
            className="h-auto max-h-16 w-16 object-contain md:max-h-20 md:w-20"
          />
          <img
            src={ratingImg}
            alt="Rating"
            className="h-auto max-h-16 w-16 object-contain md:max-h-20 md:w-20"
          />
        </div>

        <div className={`relative z-[1] flex gap-6 md:gap-10 ${isActive ? "items-start md:items-end" : "items-end"}`}>
          <div
            className={`relative w-fit font-bold leading-none transition-transform duration-300 ${
              isActive
                ? "translate-x-0 text-[4rem] md:text-[9rem]"
                : "translate-x-8 md:-translate-x-4 text-[4rem] md:text-[9rem]"
            }`}
            style={{ transitionDelay: "0.5s" }}
          >
            {number}
            <div className="absolute top-0 -right-5 md:-right-8 text-[2rem] md:text-[3.5rem] font-semibold leading-none">
              +
            </div>
          </div>

          <div
            className={`relative transition-transform duration-1000 ${
              isActive
                ? "top-0 translate-x-0 translate-y-0 rotate-0 w-auto"
                : "top-0 md:top-3 w-[11rem] md:w-[15rem] -translate-x-24 -translate-y-32 md:-translate-x-[250px] md:-translate-y-[230px] -rotate-90"
            }`}
            style={{
              transitionTimingFunction: "cubic-bezier(0.68, -0.55, 0.27, 1.35)",
            }}
          >
            <div className="mt-0 md:mt-2 font-bold text-[1.25rem] md:text-[1.85rem] leading-[1.2] font-[Outfit,sans-serif]">
              {title}
            </div>

            <div className="mt-2 min-w-[11rem] text-base md:text-[1.1rem] leading-[1.35] font-normal">
              {description}
            </div>
          </div>
        </div>

        <div className={`relative z-[1] mt-4 flex w-fit items-center justify-end gap-2 font-sans text-base font-medium md:hidden ${isActive ? "flex" : "hidden"}`}>
          <span>View all Courses</span>
          <span className="flex">
            <img
              src={ArrowRight}
              alt="Arrow Right"
              className="w-3 h-full object-contain"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Courses;