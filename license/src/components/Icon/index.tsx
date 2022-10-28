import React, { FC } from 'react'
import './index.scss'

interface IProps {
  icon: string
  className?: string
}

const IconComponent: FC<IProps> = ({icon,  className = ''}) => {
  return (
    <svg className={`icon ${className}`} aria-hidden="true">
      <use xlinkHref={icon}></use>
    </svg>
  )
}

export default IconComponent
