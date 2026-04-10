import React, { useEffect, useRef, useState } from "react";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import gsap from "gsap";

type HoverItem = {
  content: string;
  image: string;
  imageCoords: string;
  contentSize: string;
  contentPosition: string;
  bgImage: string;
};

export type CustomCardProps = {
  title: string;
  subTitle?: string;
  description: string;
  image: string;
  bgColor: string;
  imagePosition: "left" | "right";
  hoverData?: HoverItem[];
};

const CustomCards: React.FC<CustomCardProps> = ({
  title,
  subTitle,
  description,
  image,
  bgColor,
  imagePosition,
  hoverData = [],
}) => {
  const svgRef = useRef<HTMLDivElement | null>(null);
  const defaultRef = useRef<HTMLDivElement | null>(null);
  const hoverRef = useRef<HTMLDivElement | null>(null);

  const hasHoverContent = hoverData.length > 0;
  const [currentHoverIndex, setCurrentHoverIndex] = useState<number>(0);
  const currentHover = hasHoverContent ? hoverData[currentHoverIndex] : null;

  useEffect(() => {
    if (!svgRef.current) return;

    const tween = gsap.fromTo(
      svgRef.current,
      { y: -15 },
      {
        y: 15,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      }
    );

    return () => {
      tween.kill();
    };
  }, []);

  const handleNextHover = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (!hoverData.length) return;
    setCurrentHoverIndex((prev) => (prev + 1) % hoverData.length);
  };

  const handlePrevHover = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (!hoverData.length) return;
    setCurrentHoverIndex(
      (prev) => (prev - 1 + hoverData.length) % hoverData.length
    );
  };

  const handleMouseOver = () => {
    if (!hasHoverContent) return;

    gsap.to(defaultRef.current, {
      opacity: 0,
      x: -400,
      filter: "blur(5px)",
      duration: 0.8,
      ease: "power2.out",
      onStart: () => {
        if (defaultRef.current) defaultRef.current.style.pointerEvents = "none";
      },
    });

    gsap.to(hoverRef.current, {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      duration: 0.5,
      ease: "power2.out",
      onStart: () => {
        if (hoverRef.current) hoverRef.current.style.pointerEvents = "auto";
      },
    });
  };

  const handleMouseLeave = () => {
    if (!hasHoverContent) return;

    gsap.to(defaultRef.current, {
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
      duration: 0.8,
      ease: "power2.out",
      onComplete: () => {
        if (defaultRef.current) defaultRef.current.style.pointerEvents = "auto";
      },
    });

    gsap.to(hoverRef.current, {
      opacity: 0,
      x: 40,
      filter: "blur(5px)",
      duration: 0.5,
      ease: "power2.out",
      onStart: () => {
        if (hoverRef.current) hoverRef.current.style.pointerEvents = "none";
      },
    });
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      {/* DEFAULT CARD */}
      <Card
        ref={defaultRef}
        className="w-full max-w-[592px] min-h-[341px] !overflow-visible relative z-10"
        style={{ backgroundColor: bgColor }}
      >
        {/* Floating Image */}
        <div
          ref={svgRef}
          className={`absolute top-24 z-10 ${
            imagePosition === "left" ? "left-4" : "right-4"
          }`}
        >
          <img
            src={image}
            alt={title}
            className="max-w-[210px] h-auto object-contain"
          />
        </div>

        {/* TEXT CONTENT */}
        {imagePosition === "left" ? (
          <div className="w-full pr-8 py-8 text-right text-white relative z-20 flex flex-col justify-center h-full gap-8">
            <div className="flex flex-col gap-[10px]">
              <h2 className="text-[32px] tracking-[0.05em] font-bold">
                {title}
              </h2>
              {subTitle && (
                <p className="text-[24px] font-medium">{subTitle}</p>
              )}
            </div>
            <p className="text-[18px] pl-[206px] font-normal">
              {description}
            </p>
          </div>
        ) : (
          <div className="w-full pl-8 py-8 text-left text-white relative z-20 flex flex-col justify-center h-full gap-8">
            <div className="flex flex-col gap-[10px]">
              <h2 className="text-[32px] font-bold">{title}</h2>
              {subTitle && (
                <p className="text-[24px] font-medium">{subTitle}</p>
              )}
            </div>
            <p className="text-[18px] pr-[206px] font-normal">
              {description}
            </p>
          </div>
        )}
      </Card>

      {/* HOVER CARD */}
      {hasHoverContent && currentHover && (
        <Card
          ref={hoverRef}
          className="border-none opacity-0 w-full max-w-[592px] min-h-[341px] overflow-hidden absolute top-0 left-0 z-20 bg-cover bg-center"
          style={{ backgroundImage: `url(${currentHover.bgImage})` }}
        >
          <div className={`absolute ${currentHover.imageCoords} z-10`}>
            <img src={currentHover.image} alt={title} />
          </div>

          <h2
            className={`text-[20px] text-white ${currentHover.contentSize} absolute ${currentHover.contentPosition} font-bold`}
          >
            {currentHover.content}
          </h2>

          {/* LEFT BUTTON */}
          <div className="absolute left-4 top-1/2 -translate-y-1/2 z-30">
            <Button
              className="rounded-full w-10 h-10 bg-white text-black"
              onClick={handlePrevHover}
            >
              ←
            </Button>
          </div>

          {/* RIGHT BUTTON */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 z-30">
            <Button
              className="rounded-full w-10 h-10 bg-white text-black"
              onClick={handleNextHover}
            >
              →
            </Button>
          </div>
        </Card>
      )}
    </div>
  );
};

export default CustomCards;
