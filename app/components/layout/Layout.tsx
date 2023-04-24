import Head from 'next/head'
import { FC, PropsWithChildren } from 'react'

import { Sidebar, Header } from './index'

export const Layout: FC<PropsWithChildren<{ title: string }>> = ({
  children,
  title
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <main id='youtube_main'>
          <Sidebar />
          <section className='content'>
            <Header />

            <div className='content-wrapper'>{children}</div>
          </section>
        </main>
      </Head>
    </>
  )
}
