import { MyListActionTypes, myListActions } from '../actions/myListAction';
import produce from 'immer';
import IProduct from '../models/ProductModel';

interface IMyList {
  result: IProduct[];
}

const defaultState: IMyList = {
  result: []
};

export function myProductListReducer(
  state: IMyList = defaultState,
  action: myListActions
): IMyList {
  switch (action.type) {
    case MyListActionTypes.addToMyList: {
      return produce(state, draft => {
        if (!draft.result.find(prod => action.payload.id === prod.id)) {
          draft.result.push({ ...action.payload });
        }
      });
    }

    case MyListActionTypes.removeFromMyList: {
      return produce(state, draft => {
        draft.result = draft.result.filter(
          prod => action.payload.id !== prod.id
        );
      });
    }

    default:
      return state;
  }
}
