"use client";

import styled from "styled-components";
import Image from "next/image";
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { Fragment, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import projectJson from "@/lib/project";
import decodedHTML from "@/lib/decodedHTML";

export default function DetailPage() {
  const params = useParams();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true); // 다른 방법
  useEffect(() => {
    const filter = projectJson().filter((f) => f.subject === decodedHTML(params.page));
    setProjects(filter);
    setLoading(false);
  }, []);

  // const { scrollY } = useScroll();
  // const x = useTransform();
  // const [y, setY] = useState(0);
  // const emptyArrays = Array.from({ length: 5 }, () => []);
  // const array = Array.from(Array(5), () => []);

  // useMotionValueEvent(scrollY, "change", (latest) => {
  //   console.log("x changed to", latest);
  //   setY(latest);
  // });

  return (
    <div className="layout">
      {loading ? (
        <></>
      ) : (
        <>
          {projects.map((project, i) => (
            <Fragment key={i}>
              <Project>
                <div>
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
                <ViewLive>VIEW LIVE PROJECT</ViewLive>
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
  div {
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
  width: 100%;
  border-radius: 10px;
  img {
    height: 70vh;
    border-radius: 10px;
  }
`;
const ViewLive = styled.div`
  text-align: center;
  line-height: 5rem;
  letter-spacing: 0.3rem;
  border-bottom: 1px solid white;
`;
