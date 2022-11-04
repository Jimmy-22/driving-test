import React, { FC } from 'react'
import { IUserAnswer } from '../../typings'
import './index.scss'

interface IProps {
  userAnswerItem: IUserAnswer
}

const ResultPanel: FC<IProps> = ({ userAnswerItem }) => {
  const { qid, question, url, explains, userAnswer, rightAnswer, isRight }: IUserAnswer = userAnswerItem
  return (
    <div className="answer-show">
      <h3>题目ID：{qid}</h3>
      {url && (
        <div className="img-wrap">
          <img src={url} alt="" />
        </div>
      )}
      <p>该题目：{question}</p>
      <p className={isRight ? 'green' : 'red'}>选择正误：{isRight ? '正确' : '错误'}</p>
      <p className={isRight ? 'green' : 'red'}>您的答案：{userAnswer}</p>
      {!isRight && <p className="green">正确答案：{rightAnswer}</p>}
      <p dangerouslySetInnerHTML={{ __html: '问题解析：' + explains }}></p>
    </div>
  )
}

export default ResultPanel

// dangerouslySetInnerHTML属性的参数是__html：富文本
