import * as types from './actionTypes'

interface ISetStateDefault {
  type: types.SET_STATE_DEAFAULT_TYPE
  // payload: null
}

export type TAction = ISetStateDefault

function setStateDefault(): ISetStateDefault {
  return {
    type: types.SET_STATE_DEAFAULT,
    // payload: null
  }
}

export {
  setStateDefault
}