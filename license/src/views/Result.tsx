import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import Header from '../components/Header'
import { IState, IUserAnswer } from '../typings'
import ResultPanel from '../components/ResultPanel'

const Result: FC = () => {
  const userAnswers: IUserAnswer[] = useSelector((state: IState) => state.userAnswers)
  let flagId: number = 0

  return (
    <div className="wrapper">
      <Header headerTitle="考试结果" iconShow={true} />
      <div className="result-panel">
        {userAnswers.map((item: IUserAnswer) => {
          flagId++
          return <ResultPanel userAnswerItem={item} key={flagId} />
        })}
      </div>
    </div>
  )
}

export default Result
