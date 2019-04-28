import * as React from 'react';

interface IProps {
  text: string
  type: string // enum
  onClick: any
}
export const Button = (props: IProps) => {
  return (
    <div>
      <button onClick={props.onClick}>
        {props.text}
      </button>
    </div>
  )
};
