import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { tabsStyles, tabItemStyles } from "../../assets/styles/AppleTabs";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

export default function HomeSection2() {
  const tabsStyle = tabsStyles();
  const tabItemStyle = tabItemStyles();

  const [tabIndex, setTabIndex] = React.useState(0);

  return (
    <div>
      <Tabs
        classes={tabsStyle}
        value={tabIndex}
        onChange={(e, index) => setTabIndex(index)}
      >
        <Tab classes={tabItemStyle} disableRipple label={"All"} />
        <Tab classes={tabItemStyle} disableRipple label={"Missed"} />
        <Tab classes={tabItemStyle} disableRipple label={"Calls"} />
      </Tabs>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({}));
