import React from "react";
import { RootState } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import { useStyles } from "./MyList.styles";
import Product from "../Product/Product";
import { RemoveFromMyList } from "../../actions/myListAction";
import IProduct from "../../models/ProductModel";

export default function MyList() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const products = useSelector(
    (store: RootState) => store.myProductListReducer.result
  );
  function deleteItem(prod: IProduct) {
    dispatch(RemoveFromMyList(prod));
  }

  let productsList: JSX.Element[] | JSX.Element;
  if (products && products.length > 0) {
    productsList = products.map((item, index) => (
      <Product
        key={index}
        product={item}
        addOrRemove="Remove from your gift list"
        actionFunction={deleteItem}
      />
    ));
  } else {
    productsList = <div>You add no products</div>;
  }
  return <div className={classes.container}>{productsList}</div>;
}
