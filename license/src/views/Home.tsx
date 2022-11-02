import React, { FC, useMemo } from 'react'
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
  const modelShow: boolean = useSelector((state: IState) => state.modelShow)
  const dispatch: Dispatch = useDispatch()

  const [_setCurrentSubject, _setCurrentModel] = useMemo(() => {
    return [
      (subject: SUBJECTS) => {
        dispatch({ type: types.SET_CURRENT_SUBJECT, payload: subject })
      },
      (model: MODELS) => {
        dispatch({ type: types.SET_CURRENT_MODEL, payload: model })
      },
    ]
  }, [dispatch])

  return (
    <div className="wrapper">
      <Header headerTitle="驾照题库" iconShow={false} />
      <Subject currentSubject={currentSubject} setCurrentSubject={_setCurrentSubject} />
      <Model modelShow={modelShow} currentModel={currentModel} setCurrentModel={_setCurrentModel} />
    </div>
  )
}

export default Home
