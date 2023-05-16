const theme = {
  colors: {
    black: "#3A3A1F",
    grey: "#939393",
    greyLight: "#AAAAAA",
    greyLightest: "#E4E4E4",
  },
  minWidth: {
    xs: `(min-width: 375px)`,
    sm: `(min-width: 768px)`,
    md: `(min-width: 1024px)`,
    lg: `(min-width: 1280px)`,
    xl: `(min-width: 1440px)`,
    xxl: `(min-width: 1728px)`,
  },
  layoutWidth: {
    xs: "100%",
    sm: "768px",
    md: "1024px",
    lg: "1280px",
    xl: "1440px",
    xxl: "1728px",
  },
  cubicBezier: {
    base: "cubic-bezier(.25, .8, .25, 1)",
    bounce: "cubic-bezier(0.68, -0.6, 0.32, 1.6)",
  },
  transitionTime: "0.3s",
  columnGap: {
    lg: "20px",
    xl: "30px",
  },
};

export default theme;
