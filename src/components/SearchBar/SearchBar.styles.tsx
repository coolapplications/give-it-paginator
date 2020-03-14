import {
  createStyles,
  fade,
  Theme,
  makeStyles
} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      justifyItems: "center"
    },
    button: {
      textAlign: "center",
      color: "white",
      display: "flex",
      margin: "auto",
      fontFamily: "fantasy,",
      fontSize: "larger"
    },
    toolbar: {
      display: "flex",
      flexDirection: "row",
      margin: "initial"
    },
    title: { padding: "0 20px", color: "black" },
    sectionDesktop: {
      display: "flex",
      margin: "auto",
      [theme.breakpoints.up("md")]: {}
    },

    search: {
      position: "sticky",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.25)
      },

      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto"
      },
      margin: "auto"
    },
    searchIcon: {
      width: theme.spacing(7),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },

    inputRoot: {
      color: "inherit"
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: 120,
        "&:focus": {
          width: 200
        }
      }
    }
  })
);
