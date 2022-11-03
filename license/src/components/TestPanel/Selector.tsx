import React, { FC, useCallback, useState } from 'react'
import MyButton from '../MyButton'
import './styles/selector.scss'
import { formatUserAnswer } from '../../lib/utils'
import { IState, IUserAnswer } from '../../typings'
import { useSelector } from 'react-redux'

interface IProps {
  id: string
  item1: string
  item2: string
  item3: string
  item4: string
}

enum SELECTEORS {
  item1 = '1',
  item2 = '2',
  item3 = '3',
  item4 = '4',
}

const Selector: FC<IProps> = ({ id, item1, item2, item3, item4 }) => {
  const [currentAnswer, setCurrentAnswer] = useState<SELECTEORS>(SELECTEORS.item1)
  const [userAnswer, setUserAnswer] = useState<IUserAnswer | null>(null)
  const queryList = useSelector((state: IState) => state.queryList)

  const handleSelectorClick = (e: React.MouseEvent): void => {
    const target: HTMLElement = e.target as HTMLElement
    const className = target.className

    if (className === 'item-btn') {
      const answer: SELECTEORS = target.dataset.answer as SELECTEORS
      setCurrentAnswer(answer)
      setUserAnswer(formatUserAnswer(queryList, id, currentAnswer))
    }
  }

  const goNext: () => void = useCallback(() => {}, [])

  return (
    <div className="selector-panel" onClick={handleSelectorClick}>
      <div className="item">
        <div
          className={['item-btn', currentAnswer === SELECTEORS.item1 ? ' active' : ''].join('')}
          data-answer={SELECTEORS.item1}
        >
          {item1 || '加载中...'}
        </div>
      </div>
      <div className="item">
        <div
          className={['item-btn', currentAnswer === SELECTEORS.item2 ? ' active' : ''].join('')}
          data-answer={SELECTEORS.item2}
        >
          {item2 || '加载中...'}
        </div>
      </div>
      {item3 && item4 && item3.length && item4.length && (
        <>
          <div className="item">
            <div
              className={['item-btn', currentAnswer === SELECTEORS.item3 ? ' active' : ''].join('')}
              data-answer={SELECTEORS.item3}
            >
              {item3 || '加载中...'}
            </div>
          </div>
          <div className="item">
            <div
              className={['item-btn', currentAnswer === SELECTEORS.item4 ? ' active' : ''].join('')}
              data-answer={SELECTEORS.item4}
            >
              {item4 || '加载中...'}
            </div>
          </div>
        </>
      )}
      <MyButton title="下一题" handleClick={goNext} />
    </div>
  )
}

export default Selector
