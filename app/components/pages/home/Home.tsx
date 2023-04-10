import Image from 'next/image'
import { FC, PropsWithChildren } from 'react'

import Sidebar from '../../layout/sidebar/Sidebar'

const Home: FC<PropsWithChildren> = () => {
  return (
    <main id='youtube_main'>
      <Sidebar />
      <section className='content'>
        <header id='header'>
          <div className='search_top'>
            <label>
              <input
                type='text'
                placeholder='Search videos, stars or authors...'
              />
              <Image
                src='img/common/search.svg'
                alt=''
                width={100}
                height={100}
              />
            </label>
          </div>
          <div className='icons_right'>
            <a href='#'>
              <Image
                src='img/common/plus.svg'
                alt=''
                width={100}
                height={100}
              />
            </a>
            <a href='#'>
              <Image
                src='img/common/review.svg'
                alt=''
                width={100}
                height={100}
              />
            </a>
            <a href='#'>
              <Image
                src='img/common/basket.svg'
                alt=''
                width={100}
                height={100}
              />
            </a>
          </div>
        </header>

        <div id='wrapper_content'>
          <div className='left_side'>
            <div className='weekly_featured'>
              <div className='info_wf'>
                <div className='sub_name'>Weekly Featured</div>
                <h1>Hello, Summer Vacation!</h1>
                <div className='descr'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquam harum placeat ullam vel non, quisquam totam,
                  doloremque expedita odit consectetur minima vitae. Facilis
                  nostrum cumque illum fugit rem, nam consectetur!
                </div>
                <div className='slider_wf'>
                  <div className='video_item'>
                    <div className='thumbnail'>
                      <Image
                        src='/img/main/1.jpg'
                        alt=''
                        width={100}
                        height={100}
                      />
                      <time>16:55</time>
                    </div>
                    <div className='author'>Micheal Adams</div>
                    <div className='name'>Day in my life: Summer ...</div>
                    <div className='number_info'>
                      <div className='views'>VIEWS 28.6K</div>
                      <div className='date'>6DS AGO</div>
                    </div>
                  </div>

                  <div className='video_item'>
                    <div className='thumbnail'>
                      <Image
                        src='/img/main/2.jpg'
                        alt=''
                        width={100}
                        height={100}
                      />
                      <time>07:23</time>
                    </div>
                    <div className='author'>Dollie Cross</div>
                    <div className='name'>Day in my life: Summer ...</div>
                    <div className='number_info'>
                      <div className='views'>VIEWS 26.7K</div>
                      <div className='date'>10DS AGO</div>
                    </div>
                  </div>

                  <div className='video_item'>
                    <div className='thumbnail'>
                      <Image
                        src='/img/main/3.jpg'
                        alt=''
                        width={100}
                        height={100}
                      />
                      <time>16:55</time>
                    </div>
                    <div className='author'>Micheal Adams</div>
                    <div className='name'>Day in my life: Summer ...</div>
                    <div className='number_info'>
                      <div className='views'>VIEWS 28.6K</div>
                      <div className='date'>6DS AGO</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='top_video'>
                <div className='video_item'>
                  <div className='thumbnail'>
                    <img src='img/main/3.jpg' alt='' />
                    <time>28:32</time>
                    <div className='avatar'>
                      <img src='img/main/avatar.jpg' alt='' />
                    </div>
                  </div>
                  <div className='author'>Warren Munoz</div>
                  <div className='name'>
                    Lake House Vacation! Boating, Tubing & More!
                  </div>
                  <div className='descr'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Minus animi aut vel alias voluptate, odio. Tempora sequi et
                    itaque enim a, aut excepturi adipisci quam, aspernatur,
                    eaque obcaecati dolor tenetur :
                  </div>
                  <div className='number_info'>
                    <div className='views'>VIEWS 29.2K</div>
                    <div className='likes'>LIKES 1.6K</div>
                    <div className='date'>3DS AGO</div>
                  </div>
                </div>
              </div>
            </div>

            <div className='line' />

            <div id='recommended'>
              <div className='top_block'>
                <div className='left_title title_gray'>
                  <h2>Recommended</h2>
                  <div className='showmore'>Show More</div>
                </div>
                <div className='sort'>By View Trending</div>
              </div>

              <div className='catalog'>
                <div className='video_item'>
                  <div className='thumbnail'>
                    <Image
                      src='/img/main/4.jpg'
                      alt=''
                      width={100}
                      height={100}
                    />
                    <time>28:35</time>
                    <div className='avatar'>
                      <Image
                        src='/img/main/avatar.jpgs'
                        alt=''
                        width={100}
                        height={100}
                      />
                    </div>
                  </div>
                  <div className='author'>Warren Munoz</div>
                  <div className='name'>
                    Lake House Vacation! Boating, Tubing & More!
                  </div>
                  <div className='number_info'>
                    <div className='views'>VIEWS 29.2K</div>
                    <div className='date'>3DS AGO</div>
                  </div>
                </div>

                <div className='video_item'>
                  <div className='thumbnail'>
                    <Image
                      src='/img/main/2.jpg'
                      alt=''
                      width={100}
                      height={100}
                    />
                    <time>28:32</time>
                    <div className='avatar'>
                      <Image
                        src='/img/main/avatar.jpg'
                        alt=''
                        width={100}
                        height={100}
                      />
                    </div>
                  </div>
                  <div className='author'>Warren Munoz</div>
                  <div className='name'>
                    Lake House Vacation! Boating, Tubing & More!
                  </div>
                  <div className='number_info'>
                    <div className='views'>VIEWS 29.2K</div>
                    <div className='date'>3DS AGO</div>
                  </div>
                </div>

                <div className='video_item'>
                  <div className='thumbnail'>
                    <Image
                      src='/img/main/6.jpg'
                      alt=''
                      width={100}
                      height={100}
                    />
                    <time>28:32</time>
                    <div className='avatar'>
                      <Image
                        src='/img/main/avatar.jpg'
                        alt=''
                        width={100}
                        height={100}
                      />
                    </div>
                  </div>
                  <div className='author'>Warren Munoz</div>
                  <div className='name'>
                    Lake House Vacation! Boating, Tubing & More!
                  </div>
                  <div className='number_info'>
                    <div className='views'>VIEWS 29.2K</div>
                    <div className='date'>3DS AGO</div>
                  </div>
                </div>

                <div className='video_item'>
                  <div className='thumbnail'>
                    <Image
                      src='/img/main/13.jpg'
                      alt=''
                      width={100}
                      height={100}
                    />
                    <time>28:32</time>
                    <div className='avatar'>
                      <Image
                        src='/img/main/avatar.jpg'
                        alt=''
                        width={100}
                        height={100}
                      />
                    </div>
                  </div>
                  <div className='author'>Warren Munoz</div>
                  <div className='name'>
                    Lake House Vacation! Boating, Tubing & More!
                  </div>
                  <div className='number_info'>
                    <div className='views'>VIEWS 29.2K</div>
                    <div className='date'>3DS AGO</div>
                  </div>
                </div>

                <div className='video_item'>
                  <div className='thumbnail'>
                    <Image
                      src='/img/main/8.jpg'
                      alt=''
                      width={100}
                      height={100}
                    />
                    <time>28:32</time>
                    <div className='avatar'>
                      <Image
                        src='/img/main/avatar.jpg'
                        alt=''
                        width={100}
                        height={100}
                      />
                    </div>
                  </div>
                  <div className='author'>Warren Munoz</div>
                  <div className='name'>
                    Lake House Vacation! Boating, Tubing & More!
                  </div>
                  <div className='number_info'>
                    <div className='views'>VIEWS 29.2K</div>
                    <div className='date'>3DS AGO</div>
                  </div>
                </div>

                <div className='video_item'>
                  <div className='thumbnail'>
                    <Image
                      src='/img/main/9.jpg'
                      alt=''
                      width={100}
                      height={100}
                    />
                    <time>28:32</time>
                    <div className='avatar'>
                      <Image
                        src='/img/main/avatar.jpg'
                        alt=''
                        width={100}
                        height={100}
                      />
                    </div>
                  </div>
                  <div className='author'>Warren Munoz</div>
                  <div className='name'>
                    Lake House Vacation! Boating, Tubing & More!
                  </div>
                  <div className='number_info'>
                    <div className='views'>VIEWS 29.2K</div>
                    <div className='date'>3DS AGO</div>
                  </div>
                </div>

                <div className='video_item'>
                  <div className='thumbnail'>
                    <Image
                      src='/img/main/2.jpg'
                      alt=''
                      width={100}
                      height={100}
                    />
                    <time>28:32</time>
                    <div className='avatar'>
                      <Image
                        src='/img/main/avatar.jpg'
                        alt=''
                        width={100}
                        height={100}
                      />
                    </div>
                  </div>
                  <div className='author'>Warren Munoz</div>
                  <div className='name'>
                    Lake House Vacation! Boating, Tubing & More!
                  </div>
                  <div className='number_info'>
                    <div className='views'>VIEWS 29.2K</div>
                    <div className='date'>3DS AGO</div>
                  </div>
                </div>

                <div className='video_item'>
                  <div className='thumbnail'>
                    <Image
                      src='/img/main/11.jpg'
                      alt=''
                      width={100}
                      height={100}
                    />
                    <time>28:32</time>
                    <div className='avatar'>
                      <Image
                        src='/img/main/avatar.jpg'
                        alt=''
                        width={100}
                        height={100}
                      />
                    </div>
                  </div>
                  <div className='author'>Warren Munoz</div>
                  <div className='name'>
                    Lake House Vacation! Boating, Tubing & More!
                  </div>
                  <div className='number_info'>
                    <div className='views'>VIEWS 29.2K</div>
                    <div className='date'>3DS AGO</div>
                  </div>
                </div>

                <div className='video_item video_big_item'>
                  <Image
                    src='/img/main/12.jpg'
                    alt=''
                    width={100}
                    height={100}
                  />
                </div>

                <div className='video_item'>
                  <div className='thumbnail'>
                    <Image
                      src='/img/main/13.jpg'
                      alt=''
                      width={100}
                      height={100}
                    />
                    <time>28:32</time>
                    <div className='avatar'>
                      <Image
                        src='/img/main/avatar.jpg'
                        alt=''
                        width={100}
                        height={100}
                      />
                    </div>
                  </div>
                  <div className='author'>Warren Munoz</div>
                  <div className='name'>
                    Lake House Vacation! Boating, Tubing & More!
                  </div>
                  <div className='number_info'>
                    <div className='views'>VIEWS 29.2K</div>
                    <div className='date'>3DS AGO</div>
                  </div>
                </div>

                <div className='video_item'>
                  <div className='thumbnail'>
                    <Image
                      src='/img/main/14.jpg'
                      alt=''
                      width={100}
                      height={100}
                    />
                    <time>28:32</time>
                    <div className='avatar'>
                      <Image
                        src='/img/main/avatar.jpg'
                        alt=''
                        width={100}
                        height={100}
                      />
                    </div>
                  </div>
                  <div className='author'>Warren Munoz</div>
                  <div className='name'>
                    Lake House Vacation! Boating, Tubing & More!
                  </div>
                  <div className='number_info'>
                    <div className='views'>VIEWS 29.2K</div>
                    <div className='date'>3DS AGO</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='right_side'>
            <div id='live'>
              <div className='title_gray'>
                <h2>Live</h2>
                <div className='showmore'>Show More</div>
              </div>

              <div className='video_item video_live_item'>
                <div className='thumbnail'>
                  <Image
                    src='/img/main/live.jpg'
                    alt=''
                    width={100}
                    height={100}
                  />
                  <div className='live'>Live</div>
                  <div className='avatar'>
                    <Image
                      src='/img/main/avatar.jpg'
                      alt=''
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
                <div className='author'>Warren Munoz</div>
                <div className='name'>
                  Lake House Vacation! Boating, Tubing & More!
                </div>
                <div className='descr'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolores ipsa voluptate, natus. Iure vitae dolores suscipit,
                  commodi debitis aut culpa sapiente architecto exercitationem.
                  Ullam laudantium ea hic inventore. Rem, alias.
                </div>
                <div className='number_info'>
                  <div className='views'>VIEWS 29.2K</div>
                  <div className='comments'>COMMENTS 5.8K</div>
                </div>
              </div>
            </div>

            <div className='line' />

            <div id='top_channels'>
              <div className='title_gray'>
                <h2>Top Channels</h2>
                <div className='showmore'>Show More</div>
              </div>

              <div className='list_channels'>
                <div className='channel'>
                  <div className='info_left'>
                    <Image
                      src='/img/main/avatar.jpg'
                      alt=''
                      width={100}
                      height={100}
                    />
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
                    <Image
                      src='/img/main/avatar.jpg'
                      alt=''
                      width={100}
                      height={100}
                    />
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
                    <Image
                      src='/img/main/avatar.jpg'
                      alt=''
                      width={100}
                      height={100}
                    />
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
                    <Image
                      src='/img/main/avatar.jpg'
                      alt=''
                      width={100}
                      height={100}
                    />
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
                    <Image
                      src='/img/main/avatar.jpg'
                      alt=''
                      width={100}
                      height={100}
                    />
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
                    <Image
                      src='/img/main/avatar.jpg'
                      alt=''
                      width={100}
                      height={100}
                    />
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

            <div id='youtube_music'>
              <Image
                src='/img/main/youtube_music.png'
                alt=''
                width={100}
                height={100}
              />
              <a href='#' className='title'>
                Youtube Music
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
