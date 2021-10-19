import React from 'react'
import ForkIcon from '../../icons/ForkIcon'
import StarIcon from '../../icons/StarIcon'
import { AvatarList } from '../../AvatarList'
import RepositoryIcon from '../../icons/RepositoryIcon'
import { StarButton } from '../../buttons/StarButton'
import { setRepositoriesStarredAction } from '../../../store/repositories/actions'
import { RepositoryItemProps } from '../../types/types'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'

type RepositoriesListProps = {
  item: RepositoryItemProps
}

export const RepositoriesList: React.FC<RepositoriesListProps> = ({
  item: {
    url,
    username,
    repositoryName,
    description,
    language,
    totalStars,
    forks,
    builtBy,
    starsSince,
  },
}) => {
  const dispatch = useAppDispatch()
  const isStarred = Boolean(
    useAppSelector((state: any) => state.repositories[`${username}/${repositoryName}`])
  )

  const onStarClick = () => dispatch(setRepositoriesStarredAction({ username, repositoryName }))

  return (
    <li className="p-4">
      <div className="float-right">
        <StarButton isStarred={isStarred} onClick={onStarClick} dataTestId="star-btn" />
      </div>
      <div className="mb-1 flex flex-initial">
        <span className="mt-1.5">
          <RepositoryIcon />
        </span>
        <h3 className="font-semibold text-white text-left break-all text-lg ml-1.5">
          <a href={url} className="text-blue-400 text-left">{`${username} / ${repositoryName}`}</a>
        </h3>
      </div>
      <p className="text-base break-words text-left text-gray-400 mb-2 pr-60">{description}</p>
      <div className="text-sm text-left text-gray-400 mb-1 ">
        {language && <span className="ml-0 mr-3">{language}</span>}
        <a href={`${url}/stargazers`} className="ml-0 mr-3 hover:text-blue-400 inline-block">
          <span className="inline-block">
            <StarIcon />
          </span>
          <span className="ml-1">{totalStars}</span>
        </a>
        <a href={url} className="ml-0 mr-3 hover:text-blue-400">
          <span className="inline-block">
            <ForkIcon />
          </span>
          <span className="ml-1">{forks}</span>
        </a>
        <span className="ml-3 mr-3">
          <div className="inline">Built by</div>
          <AvatarList userList={builtBy} />
        </span>
        <span className="text-gray-400 flex float-right">
          <span className="mt-1">
            <StarIcon />
          </span>
          <span className="ml-1">{starsSince} stars today</span>
        </span>
      </div>
    </li>
  )
}
