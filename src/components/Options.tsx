import React, { FunctionComponent } from 'react'

const style = {
  marginTop: 20,
  padding: 10,
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: "black",
  borderRadius: 5,
  backgroundColor: "#CCC"
}

interface IProps {
}

export const Options: FunctionComponent<IProps> = (props) => {
  return (
    <div style={style}>
      {props.children}
    </div>
  )
}
