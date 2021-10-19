import { Reducer, createReducer } from '@reduxjs/toolkit'
import { RepositoriesStoreAction, setRepositoriesStarredAction } from './actions'

type RepositoriesStoreState = { [key: string]: boolean}

const initialState = {} as RepositoriesStoreState

export const repositoriesReducer: Reducer<RepositoriesStoreState, RepositoriesStoreAction> = createReducer(initialState, (builder) =>
  builder.addCase(
    setRepositoriesStarredAction,
    (state, action) => {
      const { username, repositoryName } = action.payload
      const key = `${username}/${repositoryName}`
      state[key] = !state?.[key]
    }
  )
)
