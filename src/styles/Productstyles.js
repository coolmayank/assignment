import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    backgroundColor: "#4FCF64"
  },
  card: {
    display: "flex"
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto",
    minWidth: "160px",
    paddingRight: "1.5px !important"
  },
  cover: {
    width: "100%"
  },

  crdimg: {
    width: 150,
    display: "flex",
    [theme.breakpoints.between("xs", "sm")]: {
      minWidth: 50,
      height: 80,
      width: 50,
      paddingLeft: theme.spacing(2),
      paddingBottom: theme.spacing(1),
      paddingTop: theme.spacing(3),
      marginRight: theme.spacing(2)
    }
  },
  controls: {
    display: "flex",
    alignItems: "center",

    paddingBottom: theme.spacing(1),
    paddingTop: theme.spacing(0)
  }
}));

export default useStyles;
