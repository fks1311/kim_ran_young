"use client";

import styled from "styled-components";
import Slide from "./Slide";
import Image from "next/image";
import { motion } from "framer-motion";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useState } from "react";
import { useRouter } from "next/navigation";
import projectJson from "@/lib/project";

export default function Project() {
  const router = useRouter();
  const [hover, setHover] = useState(false);

  return (
    <div className="layout">
      <Slide />
      <ProjectFrame>
        <p className="header">ALL PROJECTS</p>
        <ProjectContainer>
          {projectJson().map((project, idx) => (
            <ProjectCard
              key={idx}
              onClick={() => router.push(`/project/${project.subject}`)}
              onMouseOver={() => setHover(idx)}
              onMouseOut={() => setHover(undefined)}
            >
              <Image src={project.thumbnails} height={500} objectFit="contain" alt="프로젝트" />
              <Subject idx={idx} hover={hover}>
                {hover === idx ? "lean more" : project.subject}
                <MdKeyboardArrowRight />
              </Subject>
            </ProjectCard>
          ))}
        </ProjectContainer>
      </ProjectFrame>
      <style jsx>{`
        .layout {
          position: relative;
          display: flex;
          align-items: flex-end;
          justify-content: flex-end;
        }
      `}</style>
    </div>
  );
}

const ProjectFrame = styled.div`
  position: absolute;
  height: 75vh;
  width: 40vw;
  border-radius: 10px;
  background-color: white;
  overflow: hidden;
  .header {
    height: 70px;
    line-height: 70px;
    padding-left: 3rem;
    letter-spacing: 0.3rem;
    border-bottom: 1px solid #f5f7f8;
  }
`;

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 3rem;
  height: calc(75vh - 70px);
  overflow-y: scroll;
  box-sizing: border-box;
`;
const ProjectCard = styled(motion.div)`
  position: relative;
  color: black;
  img {
    // object-fit: cover;
    width: 100%;
    border-radius: 10px;
  }
`;
const Subject = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: ${({ idx, hover }) => (idx === hover ? "1rem" : "0px")};
  width: 100%;
  height: 30px;
  padding: 2.5rem;
  box-sizing: border-box;
  color: white;
  font-size: 1.5rem;
  border-radius: 10px;
  transform: ${({ idx, hover }) => (idx === hover ? "scale(0.9)" : "scale(1)")};
  transition: transform 0.3s ease;
  background-color: #222831;
  // background-color: ${({ idx, hover }) => idx === hover && "white"};
`;
