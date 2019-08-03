//sample
import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { User, UserListReq, UserListRes, FetchError } from '../api/dataModels'

//state
export interface UserListState {
  userList: User[]
}
const initialState: UserListState = {
  userList: []
}

//action
const actionCreator = actionCreatorFactory();
export const userListFetchActions = {
  fetch: actionCreator.async<UserListReq, UserListRes, FetchError>('FETCH_USER_LIST'),
};

//reducer
export const userListReducer = reducerWithInitialState(initialState)
  .case(userListFetchActions.fetch.started, (state, payload) => {
    return state
  })
  .case(userListFetchActions.fetch.done, (state, payload) => {
    return Object.assign({}, state, {userList: payload.result.userList})

  })
  .case(userListFetchActions.fetch.started, (state, payload) => {
    throw new Error("failed to fetch")
  })
export default userListReducer;