import { useState } from "react";
import styled from "styled-components";
import { BiRadioCircle } from "react-icons/bi";
import { SiReact, SiRecoil, SiReactquery, SiExpress, SiStyledcomponents, SiFramer } from "react-icons/si";
import { RiReactjsFill, RiNextjsLine, RiNodejsFill } from "react-icons/ri";
import { motion } from "framer-motion";

export default function UsableSkillFrame() {
  const [hover, setHover] = useState();
  const [curPosition, setCurPosition] = useState({ x: 0, y: 0 });
  const skills = [
    {
      tool: "React",
      icon: <SiReact />,
    },
    {
      tool: "Next.js",
      icon: <RiNextjsLine />,
    },
    {
      tool: "Recoil",
      icon: <SiRecoil />,
    },
    {
      tool: "Tanstack Query",
      icon: <SiReactquery />,
    },
    {
      tool: "Express",
      icon: <SiExpress />,
    },
    {
      tool: "Node.js",
      icon: <RiNodejsFill />,
    },
    {
      tool: "Styled-components",
      icon: <SiStyledcomponents />,
    },
    {
      tool: "Framer-motion",
      icon: <SiFramer />,
    },
  ];

  return (
    <SkillFrame>
      <SubTitle>
        <BiRadioCircle />
        USABLE SKILLS
      </SubTitle>
      <SkillContent>
        {skills.map((skill, idx) => (
          <div key={idx}>
            {skill.icon}
            {skill.tool}
          </div>
        ))}
      </SkillContent>
    </SkillFrame>
  );
}

const SkillFrame = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const SubTitle = styled.div`
  font-size: 1.5rem;
`;

const SkillContent = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  gap: 3rem;
  padding: 5rem;
  color: white;
  font-size: 2rem;
  border-radius: 10px;
  background-color: #0b0c0f;
  svg {
    height: 10rem;
    width: 5rem;
    color: white;
  }
  div:nth-child(7) {
    display: flex;
    flex-direction: column;
    align-items: center;
    svg {
      height: 8rem;
    }
  }
  @media ${({
      theme: {
        media: { laptop },
      },
    }) => laptop} {
    grid-template-columns: repeat(3, 1fr);
    div:nth-child(4),
    div:nth-child(7),
    div:nth-child(8) {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
      svg {
        height: 8rem;
      }
    }
  }
  @media ${({
      theme: {
        media: { tablet },
      },
    }) => tablet} {
    grid-template-columns: repeat(2, 1fr);
    div:nth-child(4),
    div:nth-child(7),
    div:nth-child(8) {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
      font-size: 1.8rem;
      svg {
        height: 8rem;
      }
    }
  }
  @media ${({
      theme: {
        media: { smaller },
      },
    }) => smaller} {
    div:nth-child(7) {
      text-align: center;
    }
  }
`;

const Rense = styled(motion.div)``;
