import React, { FC, useState } from 'react'
import { useSelector } from 'react-redux'
import Header from '../components/Header'
import { IQueryData, IState } from '../typings'

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

  return (
    <div className="wrapper">
      <Header headerTitle={headerTitle} iconShow={true} />
    </div>
  )
}

export default Test
