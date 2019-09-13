import React, { FunctionComponent } from 'react'

interface IProps {
  onClick: () => void
}

export const Option: FunctionComponent<IProps> = (props) => {
  return (
    <div>
      <button onClick={props.onClick}>
        {props.children}
      </button>
    </div>
  )
}
