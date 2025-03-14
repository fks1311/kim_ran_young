import { BiRadioCircle } from "react-icons/bi";
import Image from "next/image";
import me from "@/lib/me.jpg";
import styled from "styled-components";

export default function AboutMeFrame() {
  return (
    <AboutFrame>
      <div className="profile">
        <Image
          src={me}
          height={500}
          style={{
            borderRadius: "10px",
          }}
          unoptimized={true}
          alt="profile"
        />
      </div>
      <div className="about">
        <div className="sub-title">
          <BiRadioCircle />
          ABOUT ME
        </div>
        <div className="intro">
          <div className="name">
            KIM RAN YOUNG<span>김란영</span>
          </div>
          <div className="brief-info">
            <span>TEL.</span>
            <span>010.2994.3118</span>
            <span>E-mail.</span>
            <span>fks1311@gmail.com</span>
            <span>GIT.</span>
            <span>https://github.com/fks1311</span>
            <span>BLOG.</span>
            <span>https://velog.io/@well_log/posts</span>
          </div>
        </div>
        <div className="brief-intro">
          <ul>
            <li>안녕하세요, 김란영입니다.</li>
            <li>
              3년차 프론트엔드 개발자입니다.
              <br />
              시간의 흐름에 따른 연차 쌓기가 아닌, 실력에 의한 연차 쌓기를 원합니다.
            </li>
            <li>
              코드의 정돈함을 좋아합니다.
              <br />
              단순 코드 길이 수 줄이기가 아닌, 이해하기 위한 리팩토링을 좋아합니다.
            </li>
            <li>
              협업과 커뮤니케이션의 상관관계를 압니다.
              <br />
              하나의 최상의 결과를 만들기 위해 모인 만큼,
              <br />
              서로간의 업무에 대한 존중과 존중에서 나오는 대화의 중요성을 압니다.
            </li>
          </ul>
        </div>
      </div>
    </AboutFrame>
  );
}

const AboutFrame = styled.div`
  display: flex;
  gap: 2rem;
  width: 100%;
  .profile {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background-color: black;
  }
  .about {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 5rem;
    padding: 2rem;

    .sub-title {
      font-size: 1.5rem;
    }

    .intro {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      .name {
        font-size: 7rem;
        font-weight: lighter;
        span {
          font-size: 1.3rem;
          margin-left: 1rem;
        }
      }
      .brief-info {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1rem;
        max-width: 80%;
        font-size: 1.5rem;
        padding: 1rem;
        span:nth-child(6) {
          margin-right: 1rem;
        }
      }
    }

    .brief-intro {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      font-size: 1.8rem;
      font-weight: lighter;
      max-width: 80%;
      // line-height: 3rem;
      ul {
        list-style-type: square;
        line-height: 4rem;
        padding-left: 2.5rem;
        li {
          // line-height: 4rem;
        }
      }
    }
  }
  @media ${({
      theme: {
        media: { laptop },
      },
    }) => laptop} {
    display: flex;
    flex-direction: column;
    .profile {
      height: 20vh;
      img {
        height: 45vh;
        // padding: 5rem 0px;
        margin: 5rem 0px;
      }
    }
    .about {
      .intro {
        .brief-info {
          font-size: 1.35rem;
          span:nth-child(6) {
            margin-right: 5rem;
          }
        }
      }
      .brief-intro {
        font-size: 1.6rem;
      }
    }
  }
  @media ${({
      theme: {
        media: { tablet },
      },
    }) => tablet} {
    .about {
      .intro {
        .name {
          font-size: 5rem;
        }
        .brief-info {
          grid-template-columns: 0.5fr 2fr;
          gap: 1.5rem;
        }
      }
      .brief-intro {
        font-size: 1.5rem;
      }
    }
  }
  @media ${({
      theme: {
        media: { smaller },
      },
    }) => smaller} {
    .about {
      .brief-intro {
        max-width: 100%;
        ul {
        }
      }
    }
  }
`;
