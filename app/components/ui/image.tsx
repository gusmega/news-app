import imageFallback from '~/assets/images/image-fallback.png'

import type { ImageProps } from './image.type'

function Image({ src, alt, fallbackSrc = imageFallback, className }: ImageProps) {
  return (
    <img
      src={src || fallbackSrc}
      alt={alt}
      className={className}
      onError={(e) => (e.currentTarget.src = fallbackSrc)}
    />
  )
}

export default Image
