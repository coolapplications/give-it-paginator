import IProduct from '../models/ProductModel';

export enum MyListActionTypes {
  addToMyList = 'addToMyList',
  removeFromMyList = 'removeFromMyList'
}
interface AddToMyListAction {
  type: MyListActionTypes.addToMyList;
  payload: IProduct;
}

interface RemoveFromMyListAction {
  type: MyListActionTypes.removeFromMyList;
  payload: IProduct;
}
export function AddToMyList(payload: IProduct): AddToMyListAction {
  return { type: MyListActionTypes.addToMyList, payload };
}

export function RemoveFromMyList(payload: IProduct): RemoveFromMyListAction {
  return { type: MyListActionTypes.removeFromMyList, payload };
}

export type myListActions = AddToMyListAction | RemoveFromMyListAction;
