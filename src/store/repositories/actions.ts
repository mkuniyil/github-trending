import { createAction } from '@reduxjs/toolkit'

const SET_REPOSITORIES_STARRED = 'SET_REPOSITORIES_STARRED'

export const setRepositoriesStarredAction = createAction<{ username:string, repositoryName:string }, typeof SET_REPOSITORIES_STARRED>(SET_REPOSITORIES_STARRED)

export type RepositoriesStoreAction = ReturnType<typeof setRepositoriesStarredAction>
