import { FC, PropsWithChildren } from 'react'

import { Layout } from '../../layout/Layout'
import { Line } from '../../ui'
import { RightSide } from '../../layout'

import { WeeklyFeatured, Recommended } from './index'

const Home: FC<PropsWithChildren> = () => {
  return (
    <Layout title='Youtube v2.0 - Best video'>
      <div id='wrapper_content'>
        <div className='left_side'>
          <WeeklyFeatured />
          <Line />
          <Recommended />
        </div>
        <RightSide />
      </div>
    </Layout>
  )
}

export default Home
