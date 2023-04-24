import Image from 'next/image'
import { FC } from 'react'

export const Header: FC = () => {
  return (
    <header id='header'>
      <div className='search_top'>
        <label>
          <input type='text' placeholder='Search videos, stars or authors...' />
          <Image src='img/common/search.svg' alt='' width={100} height={100} />
        </label>
      </div>
      <div className='icons_right'>
        <a href='#'>
          <Image src='img/common/plus.svg' alt='' width={100} height={100} />
        </a>
        <a href='#'>
          <Image src='img/common/review.svg' alt='' width={100} height={100} />
        </a>
        <a href='#'>
          <Image src='img/common/basket.svg' alt='' width={100} height={100} />
        </a>
      </div>
    </header>
  )
}
