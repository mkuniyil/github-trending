import React from 'react'
import { ListButton } from './ListButton'
import StarIcon from '../icons/StarIcon'

type StarButtonProps = {
  isStarred: boolean
  onClick?: () => void
  dataTestId: string
}

export const StarButton: React.FC<StarButtonProps> = ({ isStarred, onClick, dataTestId }) => (
  <ListButton
    Icon={StarIcon}
    text={`${isStarred ? 'UnStar' : 'Star'}`}
    onClick={onClick}
    dataTestId={dataTestId}
  />
)
