import React, { FC } from "react"
import { Link } from 'react-router-dom'
import './index.scss'
import { useDispatch } from 'react-redux'
import * as types from '../../store/actionTypes'
import { Dispatch } from 'redux'

interface IProps {
  headerTitle: string
  iconShow: boolean
}

const Header: FC<IProps> = ({
  iconShow,
  headerTitle
}) => {

  const dispatch: Dispatch = useDispatch()

  const setStateDefault = () => {
    dispatch({ type: types.SET_STATE_DEAFAULT  })
  }

  return (
    <header className="header">
      <div className="back-icon">
        {
          iconShow &&
          <Link
            to='/'
            className='iconfont icon-arrow-right'
            onClick={ setStateDefault }
          > 
          </Link>
        }
      </div>
      <span>{ headerTitle }</span>
    </header>
  )
} 

export default Header