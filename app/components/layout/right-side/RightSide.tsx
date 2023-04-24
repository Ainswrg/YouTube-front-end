import { FC } from 'react'

import { Line } from '../../ui'

import { MostPopularVideo, TopChannels } from './index'

export const RightSide: FC = () => {
  return (
    <div className='right_side'>
      <MostPopularVideo />

      <Line />

      <TopChannels />
    </div>
  )
}
