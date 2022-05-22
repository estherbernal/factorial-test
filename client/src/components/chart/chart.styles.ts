import styled from 'styled-components'
import { ComposedChart } from 'recharts'

export const SkeletonContainer = styled.div`
  padding: 30px;
`

export const StyledChart = styled(ComposedChart).attrs((props) => ({
  margin: {
    top: 40,
    right: 80,
    bottom: 40,
    left: 40,
  },
}))``
