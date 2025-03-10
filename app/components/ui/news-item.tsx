import { Button } from './button'
import { GlowingEffect } from './glowing-effect'
import Image from './image'
import type { NewsItemProps } from './news-item.type'

function NewsItem({ article }: NewsItemProps) {
  const date = new Date(article.publishedAt)
  let meta = date.toDateString()

  if (article.author) meta += ` | ${article.author}`

  return (
    <a
      href={article.url}
      target='_blank'
      className='relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3'
      rel='noreferrer'
    >
      <GlowingEffect
        blur={0}
        borderWidth={2}
        spread={80}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
      />
      <div className='dark:border-0.75 group/content relative flex h-full flex-col gap-4 overflow-hidden rounded-xl border-1 dark:shadow-[0px_0px_27px_0px_#2D2D2D]'>
        <Image
          src={article.urlToImage}
          alt={article.title}
          className='aspect-3/2 w-full object-cover'
        />

        <div className='flex flex-1 flex-col px-3 pb-4'>
          <p className='text-foreground/55 text-sm font-semibold'>{meta}</p>
          <h5 className='line-clamp-2'>{article.title}</h5>
          <p className='text-foreground/70 line-clamp-3'>{article.description}</p>
        </div>

        <div className='bg-background/5 bg-opacity-5 absolute flex aspect-3/2 w-full items-center justify-center opacity-0 backdrop-blur transition duration-300 group-hover/content:opacity-100'>
          <Button size='lg' variant='default' className='pointer-events-none'>
            Continue Reading
          </Button>
        </div>
      </div>
    </a>
  )
}

export default NewsItem
