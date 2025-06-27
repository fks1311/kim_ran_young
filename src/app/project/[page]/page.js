"use client";

import styled from "styled-components";
import Image from "next/image";
import { motion } from "framer-motion";
import { Fragment, useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import decodedHTML from "@/lib/decodedHTML";
import Metadata from "@/components/Metadata";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { SiVelog } from "react-icons/si";
import { fetchS3 } from "@/lib/function";

export default function DetailPage() {
  const params = useParams();
  const router = useRouter();
  const [loading, setLoading] = useState(true); // 다른 방법
  const [projects, setProjects] = useState([]); // 현 프로젝트 정보
  const [list, setList] = useState([]);
  const [curIdx, setCurIdx] = useState();
  const [hover, setHover] = useState([false, false]);

  useEffect(() => {
    fetchS3().then((res) => {
      const filter = res.res.filter((f) => f.subject === decodedHTML(params.page));
      const project = res.res.map((item) => ({ subject: item.subject }));
      const currentIdx = project.findIndex((item) => item.subject === filter[0].subject);
      setProjects(filter);
      setList(project);
      setCurIdx(currentIdx);
    });
    setLoading(false);
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

  return (
    <Layout>
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
                <div
                  className="blog"
                  onMouseOver={() => setHover((prev) => [true, prev[1]])}
                  onMouseOut={() => setHover((prev) => [false, prev[1]])}
                  onClick={() => window.open(project.blog, "_blank")}
                >
                  <SiVelog /> <p>프로젝트 후기 읽기</p>
                  <motion.div animate={{ x: hover[0] ? 2 : 0, y: hover[0] ? 0 : 2 }}>
                    <MdArrowOutward />
                  </motion.div>
                </div>
                <ViewLive
                  onMouseOver={() => setHover((prev) => [prev[0], true])}
                  onMouseOut={() => setHover((prev) => [prev[0], false])}
                  onClick={() => liveClick(project.subject, project.link)}
                >
                  VIEW LIVE PROJECT
                  <motion.div animate={{ x: hover[1] ? 2 : 0, y: hover[1] ? 0 : 2 }}>
                    <MdArrowOutward color="white" />
                  </motion.div>
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
                  <Image
                    key={idx}
                    src={img}
                    width={400}
                    height={500}
                    unoptimized={true}
                    alt={`프로젝트 이미지 ${idx}`}
                  />
                ))}
              </Frame>
            </Fragment>
          ))}
        </>
      )}
    </Layout>
  );
}

const Layout = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  margin-top: 5rem;
  color: white;
  @media ${({
      theme: {
        media: { desktop },
      },
    }) => desktop} {
    height: 75vh;
  }
  @media ${({
      theme: {
        media: { tablet },
      },
    }) => tablet} {
    flex-direction: column;
  }
`;
const Project = styled.div`
  flex: 0.6;
  font-size: 1.5rem;
  padding: 5rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
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
  .blog {
    display: flex;
    align-items: center;
    opacity: 0.5;
    cursor: pointer;

    p {
      margin-left: 0.5rem;
    }
    &:hover {
      font-weight: bold;
      color: #67ae6e;
    }
  }
`;
const Frame = styled(motion.div)`
  flex: 1;
  display: flex;
  gap: 1rem;
  border-radius: 10px;
  overflow: hidden;
  overflow-x: scroll;
  img {
    height: 70vh;
    width: 55vw;
    border-radius: 10px;
    border: 1px solid white;
    margin: 1rem;
  }
  @media ${({
      theme: {
        media: { laptop },
      },
    }) => laptop} {
    img {
      height: 60vh;
      width: 50vw;
    }
  }
  @media ${({
      theme: {
        media: { tablet },
      },
    }) => tablet} {
    flex-direction: column;
    overflow: hidden;
    img {
      width: 95%;
    }
  }
  @media ${({
      theme: {
        media: { smaller },
      },
    }) => smaller} {
    img {
      height: 50vh;
      width: 95%;
    }
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
  // flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  .btn {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    opacity: 0.5;
    &:hover {
      opacity: 1;
    }
  }
  @media ${({
      theme: {
        media: { laptop },
      },
    }) => laptop} {
    // flex-direction: column;
    flex-wrap: wrap;
  }
`;
