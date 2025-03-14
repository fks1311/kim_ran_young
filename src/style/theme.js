// 320px ~ 768px 미만 : mobile
// 768px ~ 1023px 미만 : tablet
// 1024px : pc

// min-width(최소 width) 즉 1000px 이상인 경우 : 최소 ~ 이상 / 모바일 -> 데스크
// max-width(최대 width) 즉 1000px 이하인 경우 : 최대 ~ 이하 / 데스크 -> 모바일

const deviceSizes = {
  smaller: `576px`,
  tablet: `768px`,
  laptop: `1279px`,
  desktop: `1280px`,
};

const media = {
  smaller: `screen and (max-width: ${deviceSizes.smaller})`,
  tablet: `screen and (max-width: ${deviceSizes.tablet})`, // 최대 768 이하
  laptop: `screen and (max-width: ${deviceSizes.laptop})`, // 최대 1023 이하
  desktop: `screen and (min-width:${deviceSizes.desktop})`, // 최소 1024 이상
};

const color = {
  black: "#123524",
};

export const theme = {
  media,
  color,
};
