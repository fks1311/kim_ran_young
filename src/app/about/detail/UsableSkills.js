import { useRef, useState } from "react";
import styled from "styled-components";
import { BiRadioCircle } from "react-icons/bi";
import { SiReact, SiRecoil, SiReactquery, SiExpress, SiStyledcomponents, SiFramer } from "react-icons/si";
import { RiReactjsFill, RiNextjsLine, RiNodejsFill } from "react-icons/ri";

export default function UsableSkillFrame() {
  const divRefs = useRef([]);
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

  const onMouseOver = (e, idx) => {
    setHover(true);
    const div = divRefs.current[idx];
    const rect = div.getBoundingClientRect();
    setCurPosition({
      x: e.clientX - rect.left - 15, // 원의 중심이 div의 마우스 위치에 오도록 오프셋 조정
      y: e.clientY - rect.top - 15, // 원의 중심이 div의 마우스 위치에 오도록 오프셋 조정
    });
  };
  const onMouseOut = () => {
    setHover(false);
  };

  return (
    <SkillFrame>
      <SubTitle>
        <BiRadioCircle />
        USABLE SKILLS
      </SubTitle>
      <SkillContent>
        {skills.map((skill, idx) => (
          <div
            key={idx}
            ref={(el) => (divRefs.current[idx] = el)}
            onMouseOver={(e) => onMouseOver(e, idx)}
            onMouseOut={onMouseOut}
          >
            {skill.icon}
            {skill.tool}
          </div>
        ))}
        <CircleRense $hover={hover} $curPosition={curPosition} />
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
`;

const CircleRense = styled.div`
  width: ${({ $hover }) => $hover && `15rem`};
  height: ${({ $hover }) => $hover && `15rem`};
  position: absolute;
  top: ${({ $curPosition }) => ($curPosition.y ? `${$curPosition.y}px` : "0")};
  left: ${({ $curPosition }) => ($curPosition.x ? `${$curPosition.x}px` : "0")};
  border-radius: 50%;
  background-color: white;
`;
