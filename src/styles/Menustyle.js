import { fade, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  },
  card: {
    width: 100,
    position: "static",
    display: "flex"
  },
  menuButton: {
    marginRight: theme.spacing(0)
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(115),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    marginTop: theme.spacing(1),
    pointerEvents: "none",
    display: "flex",

    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  },
  sectionDesktop: {
    display: "flex"
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  icons: {
    marginLeft: "85%",
    [theme.breakpoints.between("xs", "sm")]: {
      marginLeft: "13%"
    },
    [theme.breakpoints.up(350)]: {
      marginLeft: "23%"
    },
    [theme.breakpoints.between("sm", "md")]: {
      marginLeft: "60%"
    },
    [theme.breakpoints.between("md", "lg")]: {
      marginLeft: "72%"
    },
    [theme.breakpoints.between("lg", "xl")]: {
      marginLeft: "80%"
    }
  }
}));

export default useStyles;
