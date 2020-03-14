import { url } from "./react-app-env.d";
import {
  fetchResultsSuccess,
  fetchResultsError,
  fetchResultsPending
} from "./actions/findResultsAction";
import { Dispatch } from "redux";
import IProduct from "./models/ProductModel";

export function apiRequest(text: string) {
  return (dispatch: Dispatch) => {
    dispatch(fetchResultsPending());
    fetch(`${url}search?q=${text}`)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error;
        }

        dispatch(fetchResultsSuccess(res.results as IProduct[]));
      })
      .catch(error => {
        dispatch(fetchResultsError(error));
      });
  };
}
export function apiSellerOnly(id: number) {
  return fetch(`${url}search?seller_id=${id}`);
}
