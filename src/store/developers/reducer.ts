import { createReducer } from '@reduxjs/toolkit'
import { followDeveloper } from './actions'

type DevelopersStoreState = { [key: string]: boolean}

const initialState = {} as DevelopersStoreState

export const developersReducer = createReducer(initialState, (builder) => {
  builder.addCase(followDeveloper, (state, { payload: { username } }) => {
    state[username] = !state?.[username]
  })
})
