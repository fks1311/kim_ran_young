import styled from "styled-components";
import AboutMeFrame from "./detail/AboutMe";
import UsableSkillFrame from "./detail/UsableSkills";
import TimeLineFrame from "./detail/TimeLine";

export default function ProfileContent() {
  return (
    <ContentLayout>
      <h2 className="welcome">Thank you for visiting my portfolio.</h2>
      <HeaderFrame>
        <h1>MY STORY</h1>
        <div className="border-bottom-line" />
        <div className="border-bottom-white" />
      </HeaderFrame>
      <AboutMeFrame />
      <UsableSkillFrame />
      <TimeLineFrame />
    </ContentLayout>
  );
}

const ContentLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10rem;
  padding: 3rem;
  border-radius: 10px;
  background-color: white;
  .welcome {
    font-size: 3rem;
    font-weight: lighter;
    margin-top: 10rem;
  }
`;

const HeaderFrame = styled.div`
  width: 100%;
  margin-top: 10rem;
  h1 {
    font-size: 15rem;
    font-weight: 900;
    font-family: Freesentation-9Black;
    letter-spacing: 1.5rem;
    text-align: center;
  }
  .border-bottom-line {
    border: 1px solid #f5f7f8;
    position: relative;
    top: -4.5rem;
  }
  .border-bottom-white {
    border: 10px solid #fff;
    position: relative;
    top: -4.5rem;
  }
  @media ${({
      theme: {
        media: { tablet },
      },
    }) => tablet} {
    h1 {
      font-size: 13rem;
    }
  }
  @media ${({
      theme: {
        media: { smaller },
      },
    }) => smaller} {
    h1 {
      font-size: 10rem;
    }
    .border-bottom-line {
      top: -4rem;
    }
    .border-bottom-white {
      top: -4rem;
    }
  }
`;

/* TODO
    - border-bottom-line : 길이 계산
*/
