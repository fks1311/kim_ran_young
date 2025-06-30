import portfolio_main from "@/assets/portfolio-main.png";
import day6_main from "@/assets/day6-main.png";
import mvz_main from "@/assets/mvz-main.png";
import to_do_focus_main from "@/assets/todofocus_main.png";
import spotify_main from "@/assets/spotify.png";

export default function projectJson() {
  return [
    {
      thumbnails: portfolio_main,
      subject: "Portfolio",
      project_detail:
        "현재 보고 계신 포트폴리오이며, Next.js 프레임워크를 사용했습니다. 현재 이 포트폴리오는 app router 방식으로 설계되어 있으며, styled-components와 framer-motion의 라이브러리를 활용하였습니다.",
    },
    {
      thumbnails: day6_main,
      subject: "Day6 Fan Ground",
      project_detail:
        "밴드 Day6의 팬 페이지입니다. Youtube Open API를 활용하여 Day6 공식 유튜브 계정과 멤버 개인 유튜브 계정의 재생목록을 가져왔으며, dummy API를 만들어 밴드 Day6의 앨범 목록과 수록곡 등을 확인할 수 있습니다. 해당 프로젝트에서는 react-query(tanstack Query) 라이브러리를 활용하여 데이터를 관리했습니다.",
    },
    {
      thumbnails: mvz_main,
      subject: "MovieZip",
      project_detail:
        "Next.js의 page router 기반으로 설계된 영화 정보 제공 사이트입니다. 일별/주간 박스오피스 정보와 장르/연도/국가별 영화 정보 목록을 확인 할 수 있으며, 관련 데이터들은 한국영상자료원과 영화진흥위원회 Open API를 통해 제공받았습니다. 해당 프로젝트에서는 Next.js의 page router의 데이터 Fetching과 react-query의 데이터 Fetching 두 가지 방법으로 데이터 관리가 이루어졌습니다.",
    },
    {
      thumbnails: to_do_focus_main,
      subject: "to do focus",
      project_detail:
        "Typescript를 사용해보기 위해 만들어진 사이트로, React 기반으로 만들어진 Todo + 뽀모도로를 합친 사이트입니다. 오늘/내일/이번주/완료됨으로 구분되어 있습니다. 뽀모도로는 기본 25분으로 설정했으며 본인이 원하는 타이머로 조정도 가능합니다. 또한 입력된 일정들은 선택된 네비에 따라 완료/미루기/취소/삭제가 가능합니다. (완료됨에 있는 일정들은 선택 시, 오늘 일정으로 추가됩니다.) 하루 경과 시, 내일의 일정은 오늘로 이동하며, 일주일 경과 시 모든 일정과 타이머 시간은 초기화됩니다. 해당 프로젝트는 DB를 사용하지 않고 LocalStorage에 데이터를 저장하여 관리합니다.",
    },
    { thumbnails: spotify_main, subject: "Spotify" },
  ];
}
