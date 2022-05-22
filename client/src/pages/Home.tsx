import React, { useEffect, useCallback, useState } from 'react'

// Components
import { Chart } from '../components/chart/Chart'
import { Card } from '../components/card/Card'
import { AddForm } from '../components/addForm/AddForm'

// Style components
import {
  CardsRow,
  Content,
  H1,
  Header,
  Loading,
  PageContainer,
  Sidebar,
} from './home.styles'

// Repository
import { Data, DTO, salesRespository } from '../repositories/salesRepository'
import { Alert, LinearProgress } from '@mui/material'
import { FeaturedData } from '../components/featuredData/FeaturedData'

export const Home = () => {
  const [data, setData] = useState<Data | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchData = useCallback(async () => {
    setIsLoading(true)
    const response = await salesRespository.getAll()
    if (response.error) {
      setError(response.error)
    } else if (response.data) {
      setError(null)
      setData(response.data)
      setIsLoading(false)
    }
  }, [])

  const saveData = async (formValues: DTO) => {
    const response = await salesRespository.addSale(formValues)
    if (response.error) {
      setError(response.error)
    } else if (response.data) {
      setError(null)
      fetchData()
    }
  }

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <>
      {isLoading && (
        <Loading>
          <LinearProgress />
        </Loading>
      )}
      {error && (
        <Alert sx={{ position: 'absolute', width: '100%' }} severity='error'>
          {error}
        </Alert>
      )}
      <PageContainer>
        <Header>
          <H1>Weekly sales</H1>
        </Header>
        <Sidebar>
          <Card>
            <AddForm onSubmit={saveData} />
          </Card>
        </Sidebar>
        <Content>
          <>
            <Chart isLoading={isLoading} data={data?.sales} />

            <CardsRow>
              <FeaturedData
                isLoading={isLoading}
                label={'day'}
                value={data?.averagePerDay}
              />
              <FeaturedData
                isLoading={isLoading}
                label={'hour'}
                value={data?.averagePerHour}
              />
              <FeaturedData
                isLoading={isLoading}
                label={'minute'}
                value={data?.averagePerMinute}
              />
            </CardsRow>
          </>
        </Content>
      </PageContainer>
    </>
  )
}
