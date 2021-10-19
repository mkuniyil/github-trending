import React from 'react'

type ListButtonProps = {
  Icon?: React.FC
  text: string
  onClick?: () => void
  dataTestId?: string
}

export const ListButton: React.FC<ListButtonProps> = ({
  Icon,
  text,
  onClick = () => {},
  dataTestId,
}) => {
  return (
    <button
      onClick={onClick}
      className="flex rounded p-1.5 text-xs right-0 top-1 bg-gray-800 hover:bg-gray-600 border-gray-100 text-center border border-gray-700"
      data-testid={dataTestId}
    >
      {Icon && (
        <span className="mr-2">
          <Icon />
        </span>
      )}
      <span>{text}</span>
    </button>
  )
}
