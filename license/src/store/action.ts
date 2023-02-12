import { IQueryData, IUserAnswer, MODELS, SUBJECTS } from '../typings'
import * as types from './actionTypes'

// 定义action函数返回值的类型
interface ISetStateDefault {
  type: types.SET_STATE_DEAFAULT_TYPE
  payload: null
}

interface ISetCurrentSubject {
  type: types.SET_CURRENT_SUBJECT_TYPE
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

interface ISetUserAnswer {
  type: types.SET_USER_ANSWER_TYPE
  payload: IUserAnswer
}

// 定义reducer action参数的类型；由于类型是多个，用 | 联合类型，可使用时候再断言
export type TAction = ISetStateDefault | ISetCurrentSubject | ISetCurrentModel | ISetQueryList | ISetUserAnswer

// 在Redux中，Action是一个包含type字段的对象，用来描述发生了什么事情
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

function setUserAnswer(userAnswer: IUserAnswer): ISetUserAnswer {
  return {
    type: types.SET_USER_ANSWER,
    payload: userAnswer,
  }
}

export { setStateDefault, setCurrentSubject, setCurrentModel, setQueryList, setUserAnswer }
