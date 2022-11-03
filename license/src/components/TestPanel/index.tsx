import React, { FC } from 'react'
import Question from './Question'
import './styles/index.scss'

interface IProps {
  question: string
  url: string
}

const TestPanel: FC<IProps> = ({ question, url }) => {
  return (
    <div className="test-panel">
      <Question question={question || '加载中...'} url={url} />
    </div>
  )
}

export default TestPanel
