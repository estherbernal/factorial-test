import { Typography } from '@mui/material'
import styled from 'styled-components'
import { Card } from '../components/card/Card'

export const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 40px;
  box-sizing: border-box;
  background-color: #f1f6f9;
  display: grid;
  grid-template-columns: minmax(250px, 20%) 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    'header header'
    'sidebar main';
`

export const Header = styled.div`
  grid-area: header;
`

export const Sidebar = styled.div`
  grid-area: sidebar;
  padding: 10px;
  ${Card} {
    padding: 10px;
  }
`
export const Content = styled.div`
  grid-area: main;
  padding: 10px;
`

export const CardsRow = styled.div`
  display: flex;
`

export const Featured = styled.span`
  font-size: 32pt;
  font-weight: bold;
  color: #0071b2;
`
export const Note = styled.span`
  font-weight: bold;
`
export const Loading = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
`

export const H1 = styled(Typography).attrs((props) => ({
  component: 'h1',
  variant: 'h3',
  align: 'center',
  color: '#0071b2',
}))``
