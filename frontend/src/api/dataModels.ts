export interface Account {
  id: string,
  name: string
}

export interface AccountReq{
  param:string
}

export interface AccountRes {
  res: Account
}

export interface User {
  id: string,
  name: string
}

export interface UserListReq {
  size: number
}

export interface UserListRes {
  userList: User[]
}


export interface FetchError {
  message: string
}