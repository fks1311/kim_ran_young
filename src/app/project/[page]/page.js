"use client";

import styled from "styled-components";
import Image from "next/image";
import { motion } from "framer-motion";
import { Fragment, useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import projectJson from "@/lib/project";
import decodedHTML from "@/lib/decodedHTML";
import Metadata from "@/components/Metadata";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { MdClose } from "react-icons/md";

export default function DetailPage() {
  const params = useParams();
  const router = useRouter();
  const [loading, setLoading] = useState(true); // 다른 방법
  const [projects, setProjects] = useState([]); // 현 프로젝트 정보
  const [list, setList] = useState([]);
  const [curIdx, setCurIdx] = useState();

  useEffect(() => {
    const filter = projectJson().filter((f) => f.subject === decodedHTML(params.page));
    setProjects(filter);
    setLoading(false);
    const project = projectJson().map((item) => ({ subject: item.subject }));
    const currentIdx = project.findIndex((item) => item.subject === filter[0].subject);
    setList(project);
    setCurIdx(currentIdx);
  }, [params.page]);

  const liveClick = (subject, link) => {
    subject === "Portfolio" ? router.push(link) : window.open(link, "_blank");
  };

  const prevClick = (i) => {
    if (i === 0) {
      router.push(`/project/${list[list.length - 1].subject}`);
    } else {
      router.push(`/project/${list[i - 1].subject}`);
    }
  };
  const nextClick = (i) => {
    if (i === list.length - 1) {
      router.push(`/project/${list[0].subject}`);
    } else {
      router.push(`/project/${list[i + 1].subject}`);
    }
  };

  const underlineVariants = {
    initial: { width: "100%" },
    visible: { width: "100%" },
    hover: {
      rotateX: 360,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <div className="layout">
      {loading ? (
        <></>
      ) : (
        <>
          {projects.map((project, i) => (
            <Fragment key={i}>
              <Metadata title={project.subject} />
              <Project>
                <div className="project-div">
                  <p className="subject">project</p>
                  <p>{project.subject}</p>
                </div>
                <div>
                  <p className="subject">project details</p>
                  <p>{project.project_detail}</p>
                </div>
                <div>
                  <p className="subject">use tech</p>
                  <p>{project.use_tech}</p>
                </div>
                <ViewLive
                  variants={underlineVariants}
                  initial="initial"
                  animate="visible"
                  whileHover="hover"
                  onClick={() => liveClick(project.subject, project.link)}
                >
                  VIEW LIVE PROJECT
                </ViewLive>
                <ListBtn>
                  <div className="btn" onClick={() => prevClick(curIdx)}>
                    <FaArrowLeft />
                    previous project
                  </div>
                  <div className="btn" onClick={() => router.push("/project")}>
                    <MdClose />
                    close
                  </div>
                  <div className="btn" onClick={() => nextClick(curIdx)}>
                    <FaArrowRight />
                    next project
                  </div>
                </ListBtn>
              </Project>
              <Frame>
                {project.project_images.map((img, idx) => (
                  <Image key={idx} src={img} alt={`프로젝트 이미지 ${idx}`} />
                ))}
              </Frame>
            </Fragment>
          ))}
        </>
      )}
      <style jsx>{`
        .layout {
          display: flex;
          align-items: center;
          gap: 3rem;
          height: 75vh;
          margin-top: 5rem;
          color: white;
        }
      `}</style>
    </div>
  );
}

const Project = styled.div`
  flex: 0.6;
  font-size: 1.5rem;
  padding: 5rem;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  line-height: 2.5rem;
  .project-div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .subject {
    font-size: 1.3rem;
    opacity: 0.5;
  }
`;
const Frame = styled(motion.div)`
  flex: 1;
  display: flex;
  gap: 1rem;
  overflow: hidden;
  overflow-x: scroll;
  border-radius: 10px;
  img {
    height: 70vh;
    width: 55vw;
    border-radius: 10px;
    border: 1px solid white;
    margin: 1rem;
  }
`;
const ViewLive = styled(motion.div)`
  display: flex;
  justify-content: center;
  line-height: 5rem;
  letter-spacing: 0.3rem;
  border-bottom: 1px solid white;
  cursor: pointer;
`;
const ListBtn = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  .btn {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;
