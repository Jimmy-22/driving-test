import React, { FC } from "react"
import './index.scss'
import { useDispatch } from 'react-redux'
import * as types from '../../store/actionTypes'
import { Dispatch } from 'redux'
import IconComponent from '../Icon'
import { useNavigate } from 'react-router-dom';

interface IProps {
  headerTitle: string
  iconShow: boolean
}

const Header: FC<IProps> = ({
  iconShow,
  headerTitle
}) => {

  const dispatch: Dispatch = useDispatch()
  const navigate = useNavigate();

  const setStateDefault = () => {
    dispatch({ type: types.SET_STATE_DEAFAULT  })
    navigate('/')
  }

  return (
    <header className="header">
      {
        iconShow && 
        <div onClick={ setStateDefault } className="back-icon">
          <IconComponent icon='#icon-back1'/> 
        </div>
      }
      <span>{ headerTitle }</span>
    </header>
  )
} 

export default Header