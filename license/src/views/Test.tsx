import React, { FC, useState } from 'react'
import Header from '../components/Header'

enum HEADER_TITLE {
  loading = '试题加载中...',
  testing = '考试中...',
}

const Test: FC = () => {
  // 在试题加载时候，显示试题加载中；加载完毕后，显示考试中
  const [headerTitle, setHeaderTitle] = useState<string>(HEADER_TITLE.loading)

  return (
    <div className="wrapper">
      <Header headerTitle={headerTitle} iconShow={true} />
    </div>
  )
}

export default Test
