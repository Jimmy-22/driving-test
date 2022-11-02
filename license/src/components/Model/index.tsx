import React, { FC } from 'react'
import { models } from '../../data'
import { IModelData, MODELS } from '../../typings'
import './index.scss'

interface IProps {
  currentModel: MODELS
  setCurrentModel: (model: MODELS) => void
}

const Model: FC<IProps> = ({ currentModel, setCurrentModel }) => {
  return (
    <div className="model-panel">
      {models.map((model: IModelData) => {
        return (
          <div className="item" key={model.id}>
            <div
              className={['item-btn', model.id === currentModel ? ' active' : ''].join('')}
              onClick={() => setCurrentModel(model.id)}
            >
              {model.title}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Model
