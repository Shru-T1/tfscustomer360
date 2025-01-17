import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
//import Icon from "@material-ui/core/Icon";
// @material-ui/icons
//import Warning from "@material-ui/icons/Warning";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import Search from "@material-ui/icons/Search";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
//import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import { bugs, website, server } from "variables/general.js";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart,
} from "variables/charts.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

// Import D3
import * as d3 from "d3";

// Import Graph
import { ForceGraph } from "../../components/Graph/Graph";

// Import data
import data from "../../data/data.json";

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
  const nodeHoverTooltip = React.useCallback((node) => {
    return `<div>${node.name}</div>`;
  }, []);
  return (
    <div>
      <GridContainer>
        {/* <GridItem xs={8}>
          <CustomTabs
            title=""
            headerColor="primary"
            tabs={[
              {
                tabName: "Search",
                tabIcon: Search,
                tabContent: (
                  <Tasks
                    checkedIndexes={[0, 3]}
                    tasksIndexes={[0, 1, 2, 3]}
                    tasks={bugs}
                  />
                ),
              },
            ]}
          />
        </GridItem> */}
        <GridItem xs={8}>
          <Card>
            <ForceGraph
              linksData={data.links}
              nodesData={data.nodes}
              nodeHoverTooltip={nodeHoverTooltip}
            />
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
