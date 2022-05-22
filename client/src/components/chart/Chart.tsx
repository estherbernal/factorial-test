import React from 'react'

// Types
import { Sale } from '../../repositories/salesRepository'

// Recharts components
import {
  Line,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

// Styled components
import { SkeletonContainer, StyledChart } from './chart.styles'

// Components
import { Card } from '../card/Card'
import { Skeleton } from '@mui/material'

type Props = {
  data: Sale[] | undefined
  isLoading: boolean
}

export const Chart = ({ data, isLoading }: Props) => {
  return (
    <Card>
      {isLoading ? (
        <SkeletonContainer>
          <Skeleton variant='rectangular' height={440} />
        </SkeletonContainer>
      ) : (
        <>
          <ResponsiveContainer width='100%' height={500}>
            <StyledChart data={data}>
              <CartesianGrid stroke='#adb5c4' strokeDasharray='3 3' />
              <XAxis dataKey='date' />
              <YAxis unit='€' />
              <Tooltip />
              <Legend margin={{ top: 10 }} />
              <Area
                type='monotone'
                dataKey='average'
                fill='#c2d2f3'
                stroke='#849dd8'
              />
              <Line type='monotone' dataKey='storeA' stroke='#59ba1c' />
              <Line type='monotone' dataKey='storeB' stroke='#a77603' />
              <Line type='monotone' dataKey='storeC' stroke='#1c8995' />
            </StyledChart>
          </ResponsiveContainer>
        </>
      )}
    </Card>
  )
}
