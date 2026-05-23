"use client";

import { SkillDataProvider } from "@/components/sub/skill-data-provider";
import { SkillText } from "@/components/sub/skill-text";

import {
  BACKEND_SKILL,
  FRONTEND_SKILL,
  FULLSTACK_SKILL,
} from "@/constants";

export const Skills = () => {
  const topRow = FRONTEND_SKILL;
  const middleRow = [
    FRONTEND_SKILL[0],
    FRONTEND_SKILL[1],
    BACKEND_SKILL[0],
    FULLSTACK_SKILL[0],
    FRONTEND_SKILL[4],
    FRONTEND_SKILL[5],
  ];
  const bottomRow = [
    FRONTEND_SKILL[2],
    FRONTEND_SKILL[5],
    FRONTEND_SKILL[6],
    BACKEND_SKILL[0],
  ];

  return (
    <section
      id="skills"
      style={{ transform: "scale(0.9)" }}
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20"
    >
      <SkillText />

      <div className="grid gap-8 w-full">
        <div className="overflow-hidden mx-auto max-w-[980px] rounded-[40px] border border-white/10 bg-white/5 shadow-[inset_0_0_40px_rgba(255,255,255,0.05)]">
          <div className="skill-marquee">
            {[...topRow, ...topRow, ...topRow].map((skill, i) => (
              <SkillDataProvider
                key={`${skill.skill_name}-top-${i}`}
                src={skill.image}
                name={skill.skill_name}
                width={skill.width}
                height={skill.height}
                index={i}
              />
            ))}
          </div>
        </div>

        <div className="overflow-hidden mx-auto max-w-[720px] rounded-[40px] border border-white/10 bg-white/5 shadow-[inset_0_0_30px_rgba(255,255,255,0.04)]">
          <div className="skill-marquee skill-marquee-medium">
            {[...middleRow, ...middleRow, ...middleRow].map((skill, i) => (
              <SkillDataProvider
                key={`${skill.skill_name}-middle-${i}`}
                src={skill.image}
                name={skill.skill_name}
                width={skill.width}
                height={skill.height}
                index={topRow.length + i}
              />
            ))}
          </div>
        </div>

        <div className="overflow-hidden mx-auto max-w-[520px] rounded-[40px] border border-white/10 bg-white/5 shadow-[inset_0_0_25px_rgba(255,255,255,0.03)]">
          <div className="skill-marquee skill-marquee-fast">
            {[...bottomRow, ...bottomRow, ...bottomRow].map((skill, i) => (
              <SkillDataProvider
                key={`${skill.skill_name}-bottom-${i}`}
                src={skill.image}
                name={skill.skill_name}
                width={skill.width}
                height={skill.height}
                index={topRow.length + middleRow.length + i}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .skill-marquee {
          display: inline-flex;
          align-items: center;
          gap: 2rem;
          padding: 1rem 0;
          animation: scroll-left 22s linear infinite;
          will-change: transform;
          min-width: max-content;
        }

        .skill-marquee > * {
          flex: 0 0 auto;
        }

        .skill-marquee-medium {
          animation-duration: 18s;
        }

        .skill-marquee-fast {
          animation-duration: 14s;
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.3333%);
          }
        }
      `}</style>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
          >
            <source src="/videos/skills-bg.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
};
