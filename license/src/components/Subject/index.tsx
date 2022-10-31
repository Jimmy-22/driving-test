import React, { FC } from 'react'
import { subjects } from '../../data'
import { ISubjectData, SUBJECTS } from '../../typings'
import './index.scss'

interface IProps {
  currentSubject: SUBJECTS
  setCurrentSubject: (subject: SUBJECTS) => void
}
// 子组件避免直接使用redux数据，一般都是父组件传进来
const Subject: FC<IProps> = ({ currentSubject, setCurrentSubject }) => {
  return (
    <div className="subject-panel">
      {subjects.map((subject: ISubjectData) => {
        return (
          <div className="item" key={subject.id} onClick={() => setCurrentSubject(subject.id)}>
            <div className={['item-btn', subject.id === currentSubject ? ' active' : ''].join('')}>{subject.title}</div>
          </div>
        )
      })}
    </div>
  )
}

export default Subject
