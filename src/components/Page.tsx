import React, { FunctionComponent } from 'react'

const style = {
  maxWidth: 800,
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: 50,
  padding: 20,
  backgroundColor: "#AAA",
  borderRadius: 10
}

interface IProps {}

export const Page: FunctionComponent<IProps> = (props) => {
  return (
    <div style={style}>
      {props.children}
    </div>
  )
}
