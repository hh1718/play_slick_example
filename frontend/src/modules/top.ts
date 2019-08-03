//sample
import { Dispatch } from "redux";
import { actionCreatorFactory,  Action } from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { Account, AccountReq, AccountRes, FetchError} from '../api/dataModels'
import { fetchAction, fetchGet, FetchAction } from '../api/fetchAction'

//state
export interface TopState { 
  account: Account,
  countTop: number
}
const initialState: TopState = {
    account: {
      id: "no",
      name: "no"
    } as Account,
    countTop: 0
}

//action
const actionCreator = actionCreatorFactory();
export const topActions = {
  updateCount: actionCreator<number>('ACTIONS_UPDATE_COUNT'),
  fetchAccount: actionCreator.async<AccountReq, AccountRes, FetchError>('FETCH_ACCOUNT'),
};
//fetch action
export function topFetchSuccess(req: AccountReq): (dispatch: Dispatch<Action<any>>) => FetchAction<AccountReq, AccountRes, FetchError> {
  return fetchAction(req, topActions.fetchAccount, fetchGet(`http://localhost:9000/api/user?id=${req.param}`))
}
export function topFetchFailed(req: AccountReq): (dispatch: Dispatch<Action<any>>) => FetchAction<AccountReq, AccountRes, FetchError>  {
  return fetchAction(req, topActions.fetchAccount, fetchGet('http://localhost:9000/api/user/faile'))
}

//reducer
export const topReducer = reducerWithInitialState(initialState)
  .case(topActions.updateCount, (state, payload) => {
    return Object.assign({}, state, {countTop: state.countTop + payload});
  })
  .case(topActions.fetchAccount.started, (state, payload) => {
    return Object.assign({}, state);
  })
  .case(topActions.fetchAccount.done, (state, payload) => {
    if(payload.result.res) {
      return Object.assign({}, state, {account: payload.result.res as Account});
    }
    return state
  })
  .case(topActions.fetchAccount.failed, (state, payload) => {
    return Object.assign({}, initialState)
  });

export default topReducer;