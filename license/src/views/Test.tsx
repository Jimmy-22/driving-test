import React, { FC, useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Header from '../components/Header'
import { useCurrentQuestion } from '../hooks'
import { IQueryData, IState } from '../typings'
import TestPanel from '../components/TestPanel'
import { useNavigate } from 'react-router-dom'

enum HEADER_TITLE {
  loading = '试题加载中...',
  testing = '考试中...',
}

const Test: FC = () => {
  // 在试题加载时候，显示试题加载中；加载完毕后，显示考试中
  const [headerTitle, setHeaderTitle] = useState<string>(HEADER_TITLE.loading)
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const total: number = useSelector((state: IState) => state.total)
  const queryList: IQueryData[] = useSelector((state: IState) => state.queryList)
  const [currentQuestion, setCurrentQuestion] = useCurrentQuestion()
  const nav = useNavigate()

  useEffect(() => {
    currentQuestion && setHeaderTitle(HEADER_TITLE.testing)
  }, [currentQuestion])

  useEffect(() => {
    setHeaderTitle(HEADER_TITLE.loading)
    setCurrentQuestion(queryList[currentIndex])
  }, [queryList, currentIndex, setCurrentQuestion])

  const onNextQuestion: () => void = useCallback(() => {
    if (currentIndex <= total - 1) {
      setCurrentIndex((currentIndex: number) => currentIndex + 1)
    } else {
      nav('/result')
    }
  }, [currentIndex, total])

  return (
    <div className="wrapper">
      <Header headerTitle={headerTitle} iconShow={true} />
      <TestPanel onNextQuestion={onNextQuestion} {...currentQuestion!} />
    </div>
  )
}

export default Test
