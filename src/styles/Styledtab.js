import React, { useEffect } from "react";
import Tab from "@material-ui/core/Tab";
import { makeStyles, withStyles } from "@material-ui/core/styles";
const StyledTab = withStyles(theme => ({
    root: {
      textTransform: "none",
      color: "#fff",
      fontSize: "14px",
      fontWeight: "300",
      textTransform: "uppercase",
      letterSpacing: "1px",
      marginRight: theme.spacing(1),
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      lineHeight: "inherit",
      borderRadius: "5%",
      minHeight: "auto",
      "&:focus": {
        opacity: 1
      }
    }
  }))(props => <Tab disableRipple {...props} />);
  

  export default StyledTab;