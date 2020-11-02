import React from "react";

//Import card component
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import EmailIcon from "@material-ui/icons/Email";
import CallIcon from "@material-ui/icons/Call";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginBottom: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  large: {
    width: theme.spacing(9),
    height: theme.spacing(9),
  },
  content: {
    backgroundColor: "#ffffff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#979797",
  },
  action: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "#f7fbfc",
    color: "#979797",
  },
  button: {
    color: " #c9d5d8",
  },
  registered: {
    paddingLeft: 160,
    marginTop: 50,
    backgroundColor: "#f7fbfc",
    color: "#979797",
    fontSize: 10,
  },
  about: {
    marginLeft: 9,
    color: "#979797",
    fontWeight: "bold",
  },
  name: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#545454",
  },
}));

export default function Cards(props) {
  const classes = useStyles();
  return (
    <div>
      {props.details.map((dataItem, index) => {
        return (
          <Card className={classes.root} key={index}>
            <CardContent className={classes.content}>
        {/*--------------------Avatar--------------------- */}
              <Avatar className={classes.large}>
                {`${dataItem.name.first.charAt(0)}`}
              </Avatar>
        {/*--------------------Name--------------------- */}
              <Typography
                variant="body2"
                component="p"
                className={classes.name}
              >
                {`${dataItem.name.first} ${dataItem.name.last}`}
              </Typography>
        {/*--------------------Company--------------------- */}
              <Typography component="p">{`${dataItem.company}`}</Typography>
              <Typography component="p">
                {dataItem.address.length < 15
                  ? `${dataItem.address}`
                  : `${dataItem.address.substring(0, 10)}...`}
              </Typography>
        {/*--------------------Button--------------------- */}
              <div className={classes.button}>
                <IconButton aria-label="call">
                  <Avatar>
                    <CallIcon />
                  </Avatar>
                </IconButton>
                <IconButton aria-label="email">
                  <Avatar>
                    <EmailIcon />
                  </Avatar>
                </IconButton>
               </div>
            </CardContent>
        {/*--------------------About--------------------- */}
            
            <CardActions className={classes.action}>
              <Typography
                component="p"
                variant="body2"
                className={classes.about}
              >
                About
              </Typography>
              <Typography component="p" variant="body2">
                {`${dataItem.about}`}
              </Typography>
        {/*--------------------Registered--------------------- */}
              <div className={classes.registered}>
                {`Registered on ${dataItem.registered}`}
              </div>
            </CardActions>
          </Card>
        );
      })}
    </div>
  );
}
