import React from 'react'

const style = {
  maxWidth: 800,
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: 50,
  padding: 20,
  backgroundColor: "#AAA",
  borderRadius: 10
}

interface IProps {
  children: JSX.Element[] | JSX.Element
}

export const Page = (props: IProps) => {
  return (
    <div style={style}>
      {props.children}
    </div>
  )
}
