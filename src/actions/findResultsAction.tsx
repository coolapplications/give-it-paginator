import IProduct from "../models/ProductModel";

export enum myFindResultsActionTypes {
  fetchResultsPending = "fetchResultsPending",
  fetchResultsSuccess = "fetchResultsSuccess",
  fetchResultsError = "fetchResultsError"
}

interface fetchResultsPendingAction {
  type: myFindResultsActionTypes.fetchResultsPending;
}

interface fetchResultsSuccessAction {
  type: myFindResultsActionTypes.fetchResultsSuccess;
  payload: IProduct[];
}

interface fetchResultsErrorAction {
  type: myFindResultsActionTypes.fetchResultsError;
  payload: any;
}
export function fetchResultsPending(): fetchResultsPendingAction {
  return {
    type: myFindResultsActionTypes.fetchResultsPending
  };
}

export function fetchResultsSuccess(
  payload: IProduct[]
): fetchResultsSuccessAction {
  return {
    type: myFindResultsActionTypes.fetchResultsSuccess,
    payload
  };
}

export function fetchResultsError(payload: any): fetchResultsErrorAction {
  return {
    type: myFindResultsActionTypes.fetchResultsError,
    payload
  };
}
export type fetchResultsActionTypes =
  | fetchResultsPendingAction
  | fetchResultsSuccessAction
  | fetchResultsErrorAction;
