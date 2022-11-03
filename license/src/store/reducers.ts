import { IQueryData, IState, IUserAnswer, MODELS, SUBJECTS } from '../typings'
import { TAction } from './action'
import initialState from './state'
import * as types from './actionTypes'

function reducer(state: IState = initialState, action: TAction): IState {
  switch (action.type) {
    // reducer 最终是要返回一个state, 如果要改变state中的某个属性，先把state拓展到一个新的对象中，再修改属性
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
      } as IState
    case types.SET_CURRENT_MODEL:
      return {
        ...state,
        currentModel: action.payload as MODELS,
      } as IState
    case types.SET_QUERY_LIST:
      return {
        ...state,
        queryList: action.payload as IQueryData[],
      } as IState
    case types.SET_USER_ANSWER:
      const userAnswers: IUserAnswer[] = [...state.userAnswers, action.payload as IUserAnswer]
      return {
        ...state,
        userAnswers,
      }
    default:
      return state
  }
}

export default reducer
