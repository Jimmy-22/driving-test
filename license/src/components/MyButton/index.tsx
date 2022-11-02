import _ from 'lodash'
import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import './index.scss'

interface IProps {
  title: string
  path?: string
  handleClick?: () => void
}

const MyButton: FC<IProps> = ({ title, path, handleClick }) => {
  const navigate = useNavigate()
  const goTest = (path: string) => {
    navigate(path)
  }
  return (
    <div className="confirm-btn">
      {handleClick ? (
        <div className="btn" onClick={_.debounce(handleClick, 300)}>
          {title}
        </div>
      ) : (
        <div className="btn" onClick={() => goTest(path!)}>
          {title}
        </div>
      )}
    </div>
  )
}

export default MyButton
