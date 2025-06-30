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
import { SiGithub, SiVelog } from "react-icons/si";
import { fetchS3 } from "@/lib/function";

export default function DetailPage() {
  const params = useParams();
  const router = useRouter();
  const [loading, setLoading] = useState(true); // 다른 방법
  const [projects, setProjects] = useState([]); // 현 프로젝트 정보
  const [list, setList] = useState([]);
  const [curIdx, setCurIdx] = useState();
  const [hover, setHover] = useState([false, false, false]);

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
                  {console.log(project)}
                  {project.project_detail.map((data, idx) => (
                    <UlStyle key={idx}>
                      {data.includes("GitHub로 관리하던 JSON") ? (
                        <li>
                          {data}
                          &nbsp;
                          <a
                            href="https://velog.io/@well_log/Portfolio-GitHub-AWS-S3-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EC%9D%B4%EC%A0%84"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "#67ae6e", textDecoration: "none" }}
                          >
                            🔗 관련 글 보기
                          </a>
                        </li>
                      ) : (
                        <li>{data}</li>
                      )}
                    </UlStyle>
                  ))}
                </div>
                <div>
                  <p className="subject">use tech</p>
                  <p>{project.use_tech}</p>
                </div>
                <LinkContainer>
                  <div
                    className="github"
                    onMouseOver={() => setHover((prev) => [true, prev[1], prev[2]])}
                    onMouseOut={() => setHover((prev) => [false, prev[1], prev[2]])}
                    onClick={() => window.open(project.github, "_blank")}
                  >
                    <SiGithub /> <p>GitHub</p>
                    <motion.div animate={{ x: hover[0] ? 2 : 0, y: hover[0] ? 0 : 2 }}>
                      <MdArrowOutward />
                    </motion.div>
                  </div>
                  <div
                    className="blog"
                    onMouseOver={() => setHover((prev) => [prev[0], true, prev[2]])}
                    onMouseOut={() => setHover((prev) => [prev[0], false, prev[2]])}
                    onClick={() => window.open(project.blog, "_blank")}
                  >
                    <SiVelog /> <p>프로젝트 후기 읽기</p>
                    <motion.div animate={{ x: hover[1] ? 2 : 0, y: hover[1] ? 0 : 2 }}>
                      <MdArrowOutward />
                    </motion.div>
                  </div>
                </LinkContainer>
                <ViewLive
                  onMouseOver={() => setHover((prev) => [prev[0], prev[1], true])}
                  onMouseOut={() => setHover((prev) => [prev[0], prev[1], false])}
                  onClick={() => liveClick(project.subject, project.link)}
                >
                  VIEW LIVE PROJECT
                  <motion.div animate={{ x: hover[2] ? 2 : 0, y: hover[2] ? 0 : 2 }}>
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
const LinkContainer = styled.div`
  display: flex;
  gap: 1rem;
`;
const Project = styled.div`
  flex: 0.8;
  font-size: 1.5rem;
  padding: 5rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  line-height: 2.5rem;
  height: 85%;
  overflow: hidden;
  overflow-y: auto;
  .project-div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .subject {
    font-size: 1.3rem;
    opacity: 0.5;
  }
  .github {
    display: flex;
    align-items: center;
    opacity: 0.5;
    cursor: pointer;

    p {
      margin-left: 0.5rem;
    }
    &:hover {
      font-weight: bold;
      color: #fbfbfb;
      opacity: 1;
    }
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
      opacity: 1;
    }
  }
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #b3b3b3;
  }
  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: #282828;
  }
`;
const Frame = styled(motion.div)`
  flex: 1;
  display: flex;
  gap: 1rem;
  border-radius: 10px;
  overflow: hidden;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    height: 4px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #b3b3b3;
  }
  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: #282828;
  }
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

const UlStyle = styled.ul`
  list-style-type: square;
  padding-left: 1.5rem;
  margin: 0;
`;
