import React from 'react'

type AvatarProps = {
  url: string
  src: string
  alt: string
  width: string
  height: string
}

export const Avatar: React.FC<AvatarProps> = ({ url, src, alt, width, height }) => {
  return (
    <a href={url} key={alt}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="inline rounded-full bg-gray-100 border-1 border-gray"
      ></img>
    </a>
  )
}
