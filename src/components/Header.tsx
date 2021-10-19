import React from 'react'

type HeaderProps = {
  title: string
  caption: string
}

export const Header: React.FC<HeaderProps> = ({ title, caption }) => {
  return (
    <div className="divide-y divide-gray-400 bg-gray-900 text-center">
      <header>
        <h1 className="text-4xl pt-8 pb-1">{title}</h1>
        <h3 className="pb-10 text-gray-400">{caption}</h3>
      </header>
    </div>
  )
}
