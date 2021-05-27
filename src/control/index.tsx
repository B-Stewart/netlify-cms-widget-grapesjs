import * as React from 'react'

export interface IControlProps {
  onChange: any;
  forID?: string;
  value?: string;
  classNameWrapper: string;
}

export const Control: React.FC<IControlProps> = ({onChange, forID, value, classNameWrapper}) => {
  return (
    <input
         type="text"
         id={forID}
         className={classNameWrapper}
         value={value || ''}
         onChange={e => onChange(e.target.value)}
       />
  )
}