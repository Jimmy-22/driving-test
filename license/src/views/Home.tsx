import React, { FC, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Dispatch, bindActionCreators } from 'redux'
import Header from '../components/Header'
import Subject from '../components/Subject'
import Model from '../components/Model'
import MyButton from '../components/MyButton'
import { IState, MODELS, SUBJECTS } from '../typings'
import { setCurrentModel, setCurrentSubject } from '../store/action'

const Home: FC = () => {
  // 获取state用useSelector，改变state用useDispatch
  const currentSubject: SUBJECTS = useSelector((state: IState) => state.currentSubject)
  const currentModel: MODELS = useSelector((state: IState) => state.currentModel)
  const modelShow: boolean = useSelector((state: IState) => state.modelShow)
  const dispatch: Dispatch = useDispatch()

  // 缓存传入子组件的事件处理函数 用useMome可以缓存多个函数或属性
  // bindActionCreators是将函数与action绑定在一起,内部自动使用dispatch派发action
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
      <MyButton title="开始考试" path="/test" />
    </div>
  )
}

export default Home
