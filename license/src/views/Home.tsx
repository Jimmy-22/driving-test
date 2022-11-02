import React, { FC } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Dispatch } from 'redux'
import Header from '../components/Header'
import Subject from '../components/Subject'
import Model from '../components/Model'
import { IState, MODELS, SUBJECTS } from '../typings'
import * as types from '../store/actionTypes'

const Home: FC = () => {
  const currentSubject: SUBJECTS = useSelector((state: IState) => state.currentSubject)
  const currentModel: MODELS = useSelector((state: IState) => state.currentModel)
  const dispatch: Dispatch = useDispatch()
  const setCurrentSubject: (subject: SUBJECTS) => void = (subject) => {
    dispatch({ type: types.SET_CURRENT_SUBJECT, payload: subject })
  }
  const setCurrentModel: (model: MODELS) => void = (model) => {
    dispatch({ type: types.SET_CURRENT_MODEL, payload: model })
  }

  return (
    <div className="wrapper">
      <Header headerTitle="驾照题库" iconShow={false} />
      <Subject currentSubject={currentSubject} setCurrentSubject={setCurrentSubject} />
      <Model currentModel={currentModel} setCurrentModel={setCurrentModel} />
    </div>
  )
}

export default Home
