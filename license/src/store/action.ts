import { IQueryData, MODELS, SUBJECTS } from '../typings'
import * as types from './actionTypes'

// 定义action函数返回值的类型
interface ISetStateDefault {
  type: types.SET_STATE_DEAFAULT_TYPE
  payload: null
}

interface ISetCurrentSubject {
  type: types.SET_STATE_DEAFAULT_TYPE
  payload: SUBJECTS
}

interface ISetCurrentModel {
  type: types.SET_CURRENT_MODEL_TYPE
  payload: MODELS
}

interface ISetQueryList {
  type: types.SET_QUERY_LIST_TYPE
  payload: IQueryData[]
}

// 定义reducer action参数的类型；由于类型是多个，用 | 联合类型，可使用时候再断言
export type TAction = ISetStateDefault | ISetCurrentSubject | ISetCurrentModel | ISetQueryList

function setStateDefault(): ISetStateDefault {
  return {
    type: types.SET_STATE_DEAFAULT,
    payload: null,
  }
}

function setCurrentSubject(subject: SUBJECTS): ISetCurrentSubject {
  return {
    type: types.SET_CURRENT_SUBJECT,
    payload: subject,
  }
}

function setCurrentModel(model: MODELS): ISetCurrentModel {
  return {
    type: types.SET_CURRENT_MODEL,
    payload: model,
  }
}

function setQueryList(queryList: IQueryData[]): ISetQueryList {
  return {
    type: types.SET_QUERY_LIST,
    payload: queryList,
  }
}

export { setStateDefault, setCurrentSubject, setCurrentModel, setQueryList }
