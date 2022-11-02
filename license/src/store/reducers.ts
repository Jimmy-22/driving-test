import { IState, MODELS, SUBJECTS } from '../typings'
import { TAction } from './action'
import initialState from './state'
import * as types from './actionTypes'

function reducer(state: IState = initialState, action: TAction): IState {
  switch (action.type) {
    case types.SET_STATE_DEAFAULT:
      return {
        ...state,
        queryList: [],
        userAnswers: [],
        currentSubject: SUBJECTS.s1,
        currentModel: MODELS.c1,
        modelShow: true,
        total: 5,
      } as IState
    case types.SET_CURRENT_SUBJECT:
      return {
        ...state,
        modelShow: action.payload === SUBJECTS.s4 ? false : true,
        currentSubject: action.payload as SUBJECTS,
      }
    case types.SET_CURRENT_MODEL:
      return {
        ...state,
        currentModel: action.payload as MODELS,
      }
    default:
      return state
  }
}

export default reducer
