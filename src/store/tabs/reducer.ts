import { createReducer, Reducer } from '@reduxjs/toolkit'
import { setSelectedTabAction } from './actions'
import { RepositoriesStoreAction } from '../repositories/actions'
import { TABS } from '../../constants/tabsConstants'

type SectionStoreState = {
  selectedTab: string
}

const initialState = { selectedTab: TABS.REPOSITORIES }

export const tabsReducer: Reducer<SectionStoreState, RepositoriesStoreAction> = createReducer(initialState, (builder) => {
  builder.addCase(setSelectedTabAction, (state, action) => {
    state.selectedTab = action.payload
  })
})
