import blank from "@/lib/blankImg.svg";
import portfolio_main from "@/assets/portfolio/portfolio-main.png";
import home_gif from "@/assets/portfolio/home.gif";
import about_gif from "@/assets/portfolio/about.gif";
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
      thumbnails: portfolio_main,
      subject: "Portfolio",
      project_detail:
        "현재 보고 계신 포트폴리오이며, Next.js 프레임워크를 사용했습니다. 현재 이 포트폴리오는 app router 방식으로 설계되어 있으며, styled-components와 framer-motion의 라이브러리를 활용하였습니다.",
      use_tech: "Next.js, styled-components, framer-motion",
      project_images: [home_gif, home_gif, home_gif, home_gif, home_gif],
      link: "/",
    },
    {
      thumbnails: blank,
      subject: "Day6 Fan Ground",
      project_detail:
        "밴드 Day6의 팬 페이지입니다. Youtube Open API를 활용하여 Day6 공식 유튜브 계정과 멤버 개인 유튜브 계정의 재생목록을 가져왔으며, dummy API를 만들어 밴드 Day6의 앨범 목록과 수록곡 등을 확인할 수 있습니다. 해당 프로젝트에서는 react-query(tanstack Query) 라이브러리를 활용하여 데이터를 관리했습니다.",
      use_tech: "ES6, React, react-query, axios, react-slick, react-youtube, styled-components, framer-motion",
      project_images: [blank, blank, blank, blank, blank, blank],
      link: "https://github.com/fks1311",
    },
    {
      thumbnails: blank,
      subject: "MovieZip",
      project_detail:
        "Next.js의 page router 기반으로 설계된 영화 정보 제공 사이트입니다. 일별/주간 박스오피스 정보와 장르/연도/국가별 영화 정보 목록을 확인 할 수 있으며, 관련 데이터들은 한국영상자료원과 영화진흥위원회 Open API를 통해 제공받았습니다. 해당 프로젝트에서는 Next.js의 page router의 데이터 Fetching과 react-query의 데이터 Fetching 두 가지 방법으로 데이터 관리가 이루어졌습니다.",
      use_tech: "Next.js, react-query, axios, styled-components, framer-motion",
      project_images: [blank, blank, blank],
      link: "https://velog.io/@well_log/posts",
    },
  ];
}
