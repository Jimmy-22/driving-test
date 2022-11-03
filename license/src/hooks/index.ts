// 数据请求 -> queryList -> currentIndex -> state -> currentQuestion -> setCurrentQuestion
// 定义一个函数  自定义hooks
// 1.请求数据，页面加载的时候 1次
// 2.返回currentQuestion
// 3.setCurrentQuestion

import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getQueries } from '../services'
import { IQueryData, IState, MODELS, SUBJECTS } from '../typings'
import * as types from '../store/actionTypes'
import { Dispatch } from 'redux'
import { useDispatch } from 'react-redux'

function useCurrentQuestion(): [IQueryData | null, any] {
  const dispatch: Dispatch = useDispatch()
  const subject: SUBJECTS = useSelector((state: IState) => state.currentSubject)
  const model: MODELS = useSelector((state: IState) => state.currentModel)
  const [currentQuestion, setCurrentQuestion] = useState<IQueryData | null>(null)

  useEffect(() => {
    getQueries<IQueryData[]>({ subject, model }).then((data) => {
      dispatch({ type: types.SET_QUERY_LIST, payload: data })
      setCurrentQuestion(data[0])
    })
  }, [subject, model, dispatch])

  return [currentQuestion, setCurrentQuestion]
}

export { useCurrentQuestion }
