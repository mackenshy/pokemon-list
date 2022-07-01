import { Button } from '@nextui-org/react'
import type { NextPage } from 'next'
import { Layout } from '../components/layouts'

const HomePage: NextPage = () => {
  return (
    <Layout>
      <Button color="gradient">
        Hello World
      </Button>
    </Layout>
  )
}

export default HomePage
