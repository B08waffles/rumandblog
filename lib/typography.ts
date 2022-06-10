import Typography from "typography";
import githubTheme from "@justjavac/typography-theme-github";

const typography = new Typography(githubTheme);
//delete githubTheme.googleFonts;

githubTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  "h1,h2,h3,h4,h5,h6": {
    marginTop: rhythm(1 / 2),
  },
  h2: {
    fontWeight: 900,
    letterSpacing: "1px",
    fontSize: "40px",
  },
});
githubTheme.scaleRatio = 5 / 2;

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
