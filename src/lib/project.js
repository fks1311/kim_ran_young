import blank from "@/lib/blankImg.svg";

/**
 * subject
 * tech
 * introduce letter
 * hard
 * new tech
 * img
 */
export default function projectJson() {
  return [
    {
      thumbnails: blank,
      subject: "Portfolio",
      project_detail:
        "현재 보고 계신 포트폴리오이며, Next.js 프레임워크를 사용했습니다. 현재 이 포트폴리오는 app router 방식으로 설계되어 있으며, styled-components와 framer-motion의 라이브러리를 활용하였습니다.",
      use_tech: "Next.js, styled-components, framer-motion",
      project_images: [blank, blank, blank, blank, blank],
    },
    {
      thumbnails: blank,
      subject: "Day6 Fan Ground",
      project_detail:
        "밴드 Day6의 팬 페이지입니다. Youtube Open API를 활용하여 Day6 공식 유튜브 계정과 멤버 개인 유튜브 계정의 재생목록을 가져왔으며, dummy API를 만들어 밴드 Day6의 앨범 목록과 수록곡 등을 확인할 수 있습니다. 해당 프로젝트에서는 react-query(tanstack Query) 라이브러리를 활용하여 데이터를 관리했습니다.",
      use_tech: "ES6, React, react-query, axios, react-slick, react-youtube, styled-components, framer-motion",
      project_images: [blank, blank, blank, blank, blank, blank],
    },
    {
      thumbnails: blank,
      subject: "MovieZip",
      project_detail:
        "현재 보고 계신 포트폴리오이며, Next.js 프레임워크를 사용했습니다. 현재 이 포트폴리오는 app router 방식으로 설계되어 있으며, styled-components와 framer-motion의 라이브러리를 활용하였습니다.",
      use_tech: "Next.js, styled-components, framer-motion",
      project_images: [blank, blank, blank],
    },
  ];
}
