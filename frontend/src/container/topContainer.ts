import { Action } from 'typescript-fsa';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState } from '../store';
import { topActions, topFetchSuccess, topFetchFailed } from '../modules/top';
import { AccountReq, AccountRes, FetchError } from '../api/dataModels'
import { TopComponent } from '../components/top/TopComponent';
import { FetchAction, fetchDispatch } from '../api/fetchAction'

export interface topActions {
  updateCount: (i: number) => Action<number>; 
  fetchAccount: (req: AccountReq) => FetchAction<AccountReq, AccountRes, FetchError>,
  fetchAccountFailed: (req: AccountReq) => FetchAction<AccountReq, AccountRes, FetchError>,
}

function mapDispatchToProps(dispatch: Dispatch<Action<any>>) {
  return {
    updateCount: (i: number) => dispatch(topActions.updateCount(i)),
    fetchAccount: (req: AccountReq) => fetchDispatch(dispatch,topFetchSuccess(req)),
    fetchAccountFailed: (req: AccountReq) => fetchDispatch(dispatch,topFetchFailed(req)),
  };
}

function mapStateToProps(appState: AppState) {
  return Object.assign({}, appState.top);
}

export default connect(mapStateToProps, mapDispatchToProps)(TopComponent);