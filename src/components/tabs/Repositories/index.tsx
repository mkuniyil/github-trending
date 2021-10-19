import React from 'react'
import useFetchData from '../../../hooks/useFetchData'
import { RepositoriesList } from './RepositoriesList'
import { Loader } from '../../Loader'
import { Error } from '../../Error'
import { RepositoryItemProps } from '../../types/types'
import { API_PATHS } from '../../../constants/apiConstants'

export const Repositories = () => {
  const { isLoading, error, data } = useFetchData(API_PATHS.REPOSITORIES)

  if (error) {
    return <Error error={error} />
  }

  return (
    <div className="mx-12 mb-12 border border-gray-800 rounded-b-lg" data-testid="repositories-tab">
      <ul className="divide-y divide-gray-800">
        {isLoading && <Loader />}
        {!isLoading &&
          data.map((item: RepositoryItemProps) => <RepositoriesList key={item.rank} item={item} />)}
      </ul>
    </div>
  )
}
