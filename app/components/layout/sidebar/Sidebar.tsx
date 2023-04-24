import Link from 'next/link'
import React, { FC, PropsWithChildren } from 'react'
import Image from 'next/image'
import * as Icon from 'react-icons/md'

import data from '@/bd.json'
import { Li } from '@/app/components/ui'

import logoImg from '../../../assets/img/common/logo.png'
import avatarImg from '../../../assets/img/main/avatar.jpg'

export const Sidebar: FC<PropsWithChildren> = () => {
  return (
    <section className='sidebar'>
      <Link href='/' className='logo' rel='noreferrer'>
        <Image src={logoImg.src} alt='Youtube' width={130} height={42} />
      </Link>
      <div className='profile_info'>
        <Image src={avatarImg} alt='' width={70} height={70} />
        <div className='name'>Nannie Nelson</div>
        <div className='location'>Montreal, QC</div>
      </div>
      <div className='information'>
        <div className='item'>
          <div className='top'>278</div>
          <div className='bottom'>videos</div>
        </div>
        <div className='item'>
          <div className='top'>36.5k</div>
          <div className='bottom'>subscribers</div>
        </div>
      </div>
      <div className='line' />
      <ul className='mnu_sidebar'>
        {data.map(({ title, src, id, icon, notification }) => {
          const iconString = String(icon)
          return (
            <Li
              title={title}
              src={src}
              key={id}
              notification={notification}
              icon={iconString as keyof typeof Icon}
            />
          )
        })}
      </ul>

      <div className='switch_wrapper'>
        <label className='switch'>
          <input type='checkbox' checked />
          <span className='slider round'></span>
        </label>
        <p>Light On</p>
      </div>

      <a href='#' id='logout_btn'>
        Logout
      </a>
      <div className='copy'>© 2023 Youtube, LLC</div>
    </section>
  )
}
