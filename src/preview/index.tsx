import * as React from 'react'

export interface IPreviewProps {
  value: Node;
}

export const Preview: React.FC<IPreviewProps> = ({value}) => {
  return (
    <div>{value}</div>
  )
}