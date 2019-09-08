import React from 'react'

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
  children: JSX.Element[] | JSX.Element
}

export const Options = (props: IProps) => {
  return (
    <div style={style}>
      {props.children}
    </div>
  )
}
