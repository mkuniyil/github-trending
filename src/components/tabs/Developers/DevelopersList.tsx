import React from 'react'
import { Avatar } from '../../Avatar'
import RepositoryIcon from '../../icons/RepositoryIcon'
import PopularIcon from '../../icons/PopularIcon'
import { FollowButton } from '../../buttons/FollowButton'
import { SponsorButton } from '../../buttons/SponsorButton'
import { followDeveloper } from '../../../store/developers/actions'
import { DeveloperItemProps, repositoryType } from '../../types/types'
import { RootState } from '../../../store/reducer'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'

type DevelopersListProps = {
  item: DeveloperItemProps
}

export const DevelopersList: React.FC<DevelopersListProps> = ({
  item: { name, avatar, username, url, popularRepository, rank },
}) => {
  const dispatch = useAppDispatch()
  const isFollowed = Boolean(useAppSelector((state: RootState) => state.developers[username]))

  const onFollowClick = () => dispatch(followDeveloper({ username }))

  const repositoryExists = ({ url, repositoryName, description }: repositoryType) => Boolean(url || repositoryName || description)

  return (
    <li className="grid grid-cols-10 p-5">
      <div className="col-span-10 col-start-1 col-end-4 inline-block">
        <div className="flex">
          <span className="w-4 text-gray-400 text-sm">{rank}</span>
          <span className="mx-3">
            <Avatar url={url} src={avatar} alt={username} width="50" height="50" />
          </span>
          <div className="col-span-3 grid grid-rows-2 text-left ml-1.5">
            <h3 className="font-semibold text-white text-left break-all text-lg">
              <a href={url} className="text-blue-400">
                {name}
              </a>
            </h3>
            <div className="text-gray-400">{username}</div>
          </div>
        </div>
      </div>

      {
        repositoryExists(popularRepository) && <div className="col-start-4 col-end-8 inline-block">
          <div className="mb-1 flex flex-initial">
          <span className="mt-1.5">
            <PopularIcon />
          </span>
            <h3 className="font-semibold text-white text-left break-all text-sm ml-1.5">
              POPULAR REPO
            </h3>
          </div>
          <div className="mb-1 flex flex-initial">
          <span className="mt-1.5">
            <RepositoryIcon />
          </span>
            <h3 className="font-semibold text-white text-left break-all text-sm ml-1.5">
              <a href={popularRepository.url} className="text-blue-400 text-left">
                {popularRepository.repositoryName}
              </a>
            </h3>
          </div>
          <div className="text-base break-words text-left text-gray-400 mb-2">
            {popularRepository.description}
          </div>
        </div>
      }

      <div className="col-start-10">
        <div className="flex float-right">
          <SponsorButton />
          <div className="self-end px-1">
            <FollowButton isFollowed={isFollowed} onClick={onFollowClick} />
          </div>
        </div>
      </div>
    </li>
  )
}
