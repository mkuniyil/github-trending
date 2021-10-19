import React from 'react'
import { Header } from './components/Header'
import { Navbar } from './components/navigation/Navbar'
import { RootState } from './store/reducer'
import { useAppSelector } from './store/hooks'
import { TABS } from './constants/tabsConstants'

export const AppHome = () => {
  const selectedTab = useAppSelector((state: RootState) => state.tabs.selectedTab)

  return (
    <div className="">
      <Header
        title="Trending"
        caption={
          selectedTab === TABS.REPOSITORIES
            ? 'See what github community is most excited about'
            : 'These are the developers building the hot tools today'
        }
      />
      <Navbar />
    </div>
  )
}
