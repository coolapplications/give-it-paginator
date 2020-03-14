import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  card: {
    maxWidth: 224,
    height: 300
  },
  media: {
    height: "120px",
    width: "90px",
    margin: "auto"
  },
  notOverflow: {
    width: "100%",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    overflow: "hidden"
  }
});
