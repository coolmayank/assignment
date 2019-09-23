import React, { useEffect } from "react";
import Tabs from "@material-ui/core/Tabs";
import { makeStyles, withStyles } from "@material-ui/core/styles";

const StyledTabs = withStyles({
    indicator: {
      display: "flex",
      justifyContent: "center",
      backgroundColor: "transparent",
      "& > div": {
        maxWidth: 40,
        width: "100%"
      }
    },
    root: {}
  })(props => <Tabs {...props} TabIndicatorProps={{ children: <div /> }} />);


  export default StyledTabs;