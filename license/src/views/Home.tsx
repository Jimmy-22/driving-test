import React, { FC, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Dispatch, bindActionCreators } from 'redux'
import Header from '../components/Header'
import Subject from '../components/Subject'
import Model from '../components/Model'
import { IState, MODELS, SUBJECTS } from '../typings'
import { setCurrentModel, setCurrentSubject } from '../store/action'

const Home: FC = () => {
  const currentSubject: SUBJECTS = useSelector((state: IState) => state.currentSubject)
  const currentModel: MODELS = useSelector((state: IState) => state.currentModel)
  const modelShow: boolean = useSelector((state: IState) => state.modelShow)
  const dispatch: Dispatch = useDispatch()

  const actions = useMemo(() => {
    return bindActionCreators(
      {
        _setCurrentSubject: setCurrentSubject,
        _setCurrentModel: setCurrentModel,
      },
      dispatch
    )
  }, [dispatch])

  return (
    <div className="wrapper">
      <Header headerTitle="驾照题库" iconShow={false} />
      <Subject currentSubject={currentSubject} setCurrentSubject={actions._setCurrentSubject} />
      <Model modelShow={modelShow} currentModel={currentModel} setCurrentModel={actions._setCurrentModel} />
    </div>
  )
}

export default Home
