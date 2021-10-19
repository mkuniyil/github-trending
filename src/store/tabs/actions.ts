import { createAction } from '@reduxjs/toolkit'

const SET_SELECTED_TAB = 'SET_SELECTED_TAB'

export const setSelectedTabAction = createAction<string, typeof SET_SELECTED_TAB>(SET_SELECTED_TAB)
