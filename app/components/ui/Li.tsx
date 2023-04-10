import { FC } from 'react'
import * as Icon from 'react-icons/md'
import { IconType } from 'react-icons'

interface Li {
  src: string
  title: string
  href?: string
  key: number
  icon?: keyof typeof Icon
  notification: string | null
}

export const Li: FC<Li> = ({ title, icon, key, notification, href = '#' }) => {
  const SelectedIcon: IconType | undefined = icon && Icon[icon]
  return (
    <li key={key}>
      <a href={href}>
        {SelectedIcon && <SelectedIcon />}
        <b>{title}</b>
        {notification && <span className='number'>{notification}</span>}
      </a>
    </li>
  )
}
