import React, { useState, useEffect } from "react";

import { useStyles } from "./Product.styles";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import IProduct from "../../models/ProductModel";
import ISeller from "../../models/SellerModel";
import { apiSellerOnly } from "../../apiService";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

export default function Product(props: {
  product: IProduct;
  addOrRemove: string;
  actionFunction: (prod: IProduct) => void;
}) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles();
  const [seller, setSeller] = useState({} as ISeller);
  useEffect(() => {
    apiSellerOnly(props.product.seller.id)
      .then(res => res.json())
      .then(res => {
        if (res.seller) {
          setSeller(res.seller);
        }
      });
  }, [props.product.seller.id]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Card className={classes.card}>
        <CardActionArea onClick={handleClickOpen}>
          <CardMedia
            className={classes.media}
            image={props.product.thumbnail}
          />
          <CardContent>
            <Typography className={classes.notOverflow}>
              {props.product.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              $ {props.product.price}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {seller.nickname}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="large"
            color="primary"
            onClick={event => {
              props.actionFunction(props.product);
            }}
          >
            {props.addOrRemove}
          </Button>
        </CardActions>
      </Card>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {props.product.title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>{props.product.permalink}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
