import styled from 'styled-components'
import { Card } from '../card/Card'

export const Container = styled(Card)`
  margin: 20px 10px;
  padding: 30px 10px;
  text-align: center;
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
`
