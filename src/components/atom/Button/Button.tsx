import * as React from 'react';

interface IProps {
  text: string
  color: string // enum
  type: string // enum
  onClick: any
}
export const Button = (props: IProps) => {
  return (
    <div onClick={props.onClick}>
      {props.text}
    </div>
  )
};
