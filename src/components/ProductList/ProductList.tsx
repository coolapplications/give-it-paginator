import React, { useState } from "react";
import Product from "../Product/Product";
import { RootState } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import { useStyles } from "./ProductList.styles";
import { AddToMyList } from "../../actions/myListAction";
import IProduct from "../../models/ProductModel";
import Paginator from "../Paginator/Paginator";

export default function ProductList() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const products = useSelector(
    (store: RootState) => store.reducerResults.result
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const paginate = (pageNumbers: number) => setCurrentPage(pageNumbers);
  const currentPost = products
    ? products.slice(indexOfFirstPost, indexOfLastPost)
    : null;

  function addItem(prod: IProduct) {
    dispatch(AddToMyList(prod));
  }

  let productsFromAPI;
  if (products && products.length > 0) {
    productsFromAPI = currentPost?.map((item, index) => (
      <Product
        key={index}
        product={item}
        addOrRemove="Add to your gift list"
        actionFunction={addItem}
      />
    ));
  } else {
    productsFromAPI = <div>Search products you wish</div>;
  }

  return (
    <div>
      <div>
        <Paginator
          postsPerPage={postsPerPage}
          totalPosts={products ? products.length : 0}
          paginate={paginate}
        />
      </div>
      <div className={classes.container}>{productsFromAPI} </div>
    </div>
  );
}
