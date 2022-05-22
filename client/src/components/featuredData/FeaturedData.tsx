import React from 'react'
import { Skeleton } from '@mui/material'
import { Featured, Note } from '../../pages/home.styles'
import { Container } from './featuredData.styles'

type Props = {
  isLoading: boolean
  label: string
  value: number | undefined
}

export const FeaturedData = ({ isLoading, label, value }: Props) => {
  return (
    <Container>
      {isLoading ? (
        <Skeleton variant='text' />
      ) : (
        <>
          <Featured>{value}</Featured> <Note>€/{label}</Note>
        </>
      )}
    </Container>
  )
}
