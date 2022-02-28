import React from 'react'
import Button from '@mui/material/Button';

interface ButtonProps {
  children: React.ReactChild | React.ReactChild[]
}
export default function AppButton(props: ButtonProps) {
  const { children } = props
  return (
    <Button variant="outlined">{children}</Button>
  )
}
