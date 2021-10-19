import { combineReducers } from '@reduxjs/toolkit'
import { repositoriesReducer } from './repositories/reducer'
import { tabsReducer } from './tabs/reducer'
import { developersReducer } from './developers/reducer'

export const rootReducer = combineReducers({
  tabs: tabsReducer,
  repositories: repositoriesReducer,
  developers: developersReducer,
})

export type RootState = ReturnType<typeof rootReducer>