import Image from 'next/image'
import { FC } from 'react'

export const TopChannels: FC = () => {
  return (
    <div id='top_channels'>
      <div className='title_gray'>
        <h2>Top Channels</h2>
        <div className='showmore'>Show More</div>
      </div>

      <div className='list_channels'>
        <div className='channel'>
          <div className='info_left'>
            <Image src='/img/main/avatar.jpg' alt='' width={100} height={100} />
            <div className='info'>
              <div className='name'>LEGO</div>
              <div className='subs'>6.2M Subscribers</div>
            </div>
          </div>
          <a href='#' className='mnu'>
            <Image
              src='img/common/open-menu.svg'
              alt=''
              width={100}
              height={100}
            />
          </a>
        </div>

        <div className='channel'>
          <div className='info_left'>
            <Image src='/img/main/avatar.jpg' alt='' width={100} height={100} />
            <div className='info'>
              <div className='name'>LEGO</div>
              <div className='subs'>6.2M Subscribers</div>
            </div>
          </div>
          <a href='#' className='mnu'>
            <Image
              src='img/common/open-menu.svg'
              alt=''
              width={100}
              height={100}
            />
          </a>
        </div>

        <div className='channel'>
          <div className='info_left'>
            <Image src='/img/main/avatar.jpg' alt='' width={100} height={100} />
            <div className='info'>
              <div className='name'>LEGO</div>
              <div className='subs'>6.2M Subscribers</div>
            </div>
          </div>
          <a href='#' className='mnu'>
            <Image
              src='img/common/open-menu.svg'
              alt=''
              width={100}
              height={100}
            />
          </a>
        </div>

        <div className='channel'>
          <div className='info_left'>
            <Image src='/img/main/avatar.jpg' alt='' width={100} height={100} />
            <div className='info'>
              <div className='name'>LEGO</div>
              <div className='subs'>6.2M Subscribers</div>
            </div>
          </div>
          <a href='#' className='mnu'>
            <Image
              src='img/common/open-menu.svg'
              alt=''
              width={100}
              height={100}
            />
          </a>
        </div>

        <div className='channel'>
          <div className='info_left'>
            <Image src='/img/main/avatar.jpg' alt='' width={100} height={100} />
            <div className='info'>
              <div className='name'>LEGO</div>
              <div className='subs'>6.2M Subscribers</div>
            </div>
          </div>
          <a href='#' className='mnu'>
            <Image
              src='img/common/open-menu.svg'
              alt=''
              width={100}
              height={100}
            />
          </a>
        </div>

        <div className='channel'>
          <div className='info_left'>
            <Image src='/img/main/avatar.jpg' alt='' width={100} height={100} />
            <div className='info'>
              <div className='name'>LEGO</div>
              <div className='subs'>6.2M Subscribers</div>
            </div>
          </div>
          <a href='#' className='mnu'>
            <Image
              src='img/common/open-menu.svg'
              alt=''
              width={100}
              height={100}
            />
          </a>
        </div>
      </div>
    </div>
  )
}
