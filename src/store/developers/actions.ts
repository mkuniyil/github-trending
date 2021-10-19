import { createAction } from '@reduxjs/toolkit'

const FOLLOW_DEVELOPER = 'FOLLOW_DEVELOPER'

export const followDeveloper = createAction<{ username:string}, typeof FOLLOW_DEVELOPER>(FOLLOW_DEVELOPER)

export type DevelopersStoreAction = ReturnType<typeof followDeveloper>
