import React from 'react'
import { Avatar } from './Avatar'
import { userDetailType } from './types/types'

export type UserListProps = {
  userList: userDetailType[]
}

export const AvatarList: React.FC<UserListProps> = ({ userList }) => {
  return (
    <div className="inline ml-1 text-black">
      {userList.map(({ avatar, url, username }: userDetailType) => (
        <Avatar url={url} src={avatar} alt={username} width="20" height="24" />
      ))}
    </div>
  )
}
