import { SUBJECTS } from '../typings'
import * as types from './actionTypes'

interface ISetStateDefault {
  type: types.SET_STATE_DEAFAULT_TYPE
  payload: null
}

interface ISetCurrentSubject {
  type: types.SET_STATE_DEAFAULT_TYPE
  payload: SUBJECTS
}

export type TAction = ISetStateDefault | ISetCurrentSubject

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

export { setStateDefault, setCurrentSubject }
