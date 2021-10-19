import React from 'react'
import useFetchData from '../../../hooks/useFetchData'
import { DevelopersList } from './DevelopersList'
import { Loader } from '../../Loader'
import { Error } from '../../Error'
import { DeveloperItemProps } from '../../types/types'
import { API_PATHS } from '../../../constants/apiConstants'

export const Developers = () => {
  const { isLoading, error, data } = useFetchData(API_PATHS.DEVELOPERS)

  if (error) {
    return <Error error={error} />
  }

  return (
    <div className="mx-12 mb-12 border border-gray-800 rounded-b-lg" data-testid="developers-tab">
      <ul className="divide-y divide-gray-800">
        {isLoading && <Loader />}
        {!isLoading &&
          data &&
          data.map((item: DeveloperItemProps) => <DevelopersList key={item.rank} item={item} />)}
      </ul>
    </div>
  )
}
