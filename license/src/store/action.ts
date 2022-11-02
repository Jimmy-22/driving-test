import { MODELS, SUBJECTS } from '../typings'
import * as types from './actionTypes'

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

export type TAction = ISetStateDefault | ISetCurrentSubject | ISetCurrentModel

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

export { setStateDefault, setCurrentSubject, setCurrentModel }
