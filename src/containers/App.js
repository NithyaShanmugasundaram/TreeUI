//Import dependencies
import React, { useState, useEffect } from "react";

//Import TreeView component
import { makeStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import TreeItem from "@material-ui/lab/TreeItem";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

//Import configuration data from JSON
import { data } from "../data/data";

//Import Card component
import Cards from "../components/card";

const useStyles = makeStyles({
  root: {
    height: 216,
    flexGrow: 1,
    maxWidth: 400,
  },
  indent: {
    marginLeft: 50,
    marginTop: 10,
  },
});

export default function ControlledTreeView() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState([]);
  const [selected, setSelected] = React.useState([]);

  const handleToggle = (event, nodeIds) => {
    setExpanded(nodeIds);
  };

  const handleSelect = (event, nodeIds) => {
    setSelected(nodeIds);
  };


//Render child component on the UI
  const getTreeItemsFromData = (treeItems) => {
    return treeItems.map((treeItemData) => {
      let children = "";
      if (treeItemData.children && treeItemData.children.length > 0) {
        children = getTreeItemsFromData(treeItemData.children);
      }
      const array = [];
      array.push(treeItemData);
      return (
        <TreeItem
          className={classes.indent}
          key={treeItemData.email}
          nodeId={treeItemData.email}
          label={<Cards details={array} />}
          children={children}
        ></TreeItem>
      );
    });
  };

  return (
    <TreeView
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      expanded={expanded}
      selected={selected}
      onNodeToggle={handleToggle}
      onNodeSelect={handleSelect}
    >
      {getTreeItemsFromData(data)}
    </TreeView>
  );
}
