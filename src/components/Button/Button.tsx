import React from 'react'
import Button from '@mui/material/Button';

interface IButton {
  children: React.ReactChild | React.ReactChild[]
}
export default function AppButton(props: IButton) {
  const { children } = props
  return (
    <Button variant="outlined">{children}</Button>
  )
}
