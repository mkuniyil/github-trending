import React from 'react'
import { ListButton } from './ListButton'

type FollowButtonProps = {
  isFollowed: boolean
  onClick: () => void
}

export const FollowButton: React.FC<FollowButtonProps> = ({ isFollowed, onClick }) => (
  <ListButton text={`${isFollowed ? 'UnFollow' : 'Follow'}`} onClick={onClick} />
)
