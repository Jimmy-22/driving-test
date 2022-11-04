import React, { FC, useCallback, useEffect, useState } from 'react'
import MyButton from '../MyButton'
import './styles/selector.scss'
import { formatUserAnswer } from '../../lib/utils'
import { IState, IUserAnswer } from '../../typings'
import { useSelector } from 'react-redux'
import * as types from '../../store/actionTypes'
import { useDispatch } from 'react-redux'
import { Dispatch } from 'redux'

interface IProps {
  id: string
  item1: string
  item2: string
  item3: string
  item4: string
  onNextQuestion: () => void
}

enum SELECTEORS {
  item1 = '1',
  item2 = '2',
  item3 = '3',
  item4 = '4',
}

const Selector: FC<IProps> = ({ id, item1, item2, item3, item4, onNextQuestion }) => {
  const [currentAnswer, setCurrentAnswer] = useState<SELECTEORS>(SELECTEORS.item1)
  const [userAnswer, setUserAnswer] = useState<IUserAnswer | null>(null)
  const queryList = useSelector((state: IState) => state.queryList)
  const dispatch: Dispatch = useDispatch()

  // 使用事件代理的方式点击选项
  const handleSelectorClick = (e: React.MouseEvent): void => {
    // target 在react中有独立的target类型
    const target: HTMLElement = e.target as HTMLElement
    const className = target.className

    if (className === 'item-btn') {
      const answer: SELECTEORS = target.dataset.answer as SELECTEORS
      // 设置当前答案 1234
      setCurrentAnswer(answer)
      // 设置用户当前问题的答案
      setUserAnswer(formatUserAnswer(queryList, id, currentAnswer))
    }
  }

  // 当页面绘制完毕之后，先执行设置用户当前问题的答案，每一道题默认选项是1
  useEffect(() => {
    if (queryList && id && currentAnswer) {
      setUserAnswer(formatUserAnswer(queryList, id, currentAnswer))
    }
  }, [queryList, id, currentAnswer])

  // 下一题按钮
  const goNext: () => void = useCallback(() => {
    // 派发action， 忘userAnswer内部放入当前用户答案
    dispatch({ type: types.SET_USER_ANSWER, payload: userAnswer })
    // 已经要走下一题了，把默认选项设置成第一个
    setCurrentAnswer(SELECTEORS.item1)
    onNextQuestion()
  }, [dispatch, onNextQuestion, userAnswer])

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
