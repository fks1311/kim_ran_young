// 320px ~ 768px 미만 : mobile
// 768px ~ 1023px 미만 : tablet
// 1024px : pc

// min-width(최소 width) 즉 1000px 이상인 경우 : 최소 ~ 이상 / 모바일 -> 데스크
// max-width(최대 width) 즉 1000px 이하인 경우 : 최대 ~ 이하 / 데스크 -> 모바일

const deviceSizes = {
  mobile: `768px`,
  tablet: `1023px`,
  desktop: `1024px`,
};

const media = {
  small: `screen and (max-width: ${deviceSizes.mobile})`, // 최대 768 이하
  middle: `screen and (max-width: ${deviceSizes.tablet})`, // 최대 1023 이하
  large: `screen and (min-width:${deviceSizes.desktop})`, // 최소 1024 이상
};

const color = {
  black: "#123524",
};

export const theme = {
  media,
  color,
};
