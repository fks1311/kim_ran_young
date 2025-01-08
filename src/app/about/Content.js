import styled from "styled-components";
import AboutMeFrame from "./detail/AboutMe";
import UsableSkillFrame from "./detail/UsableSkills";

export default function ProfileContent() {
  return (
    <ContentLayout>
      <h2>Thank you for visiting my portfolio.</h2>
      <HeaderFrame>
        <h1>MY STORY</h1>
        <div className="border-bottom-line" />
        <div className="border-bottom-white" />
      </HeaderFrame>
      <AboutMeFrame />
      <UsableSkillFrame />
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
  h2 {
    font-size: 3rem;
    font-weight: lighter;
    margin-top: 10rem;
  }
`;

const HeaderFrame = styled.div`
  h1 {
    font-size: 10rem;
    font-weight: 900;
    font-family: Freesentation-9Black;
    letter-spacing: 1.5rem;
  }
  .border-bottom-line {
    border: 1px solid #f5f7f8;
    position: relative;
    top: -3rem;
    right: 50%;
    width: 200%;
  }
  .border-bottom-white {
    border: 5px solid #fff;
    position: relative;
    top: -3rem;
    right: 50%;
    width: 200%;
  }
`;

/* TODO
    - border-bottom-line : 길이 계산
*/
