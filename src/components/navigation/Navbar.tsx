import React, { useEffect } from 'react'
import { setSelectedTabAction } from '../../store/tabs/actions'
import { Link, useLocation } from 'react-router-dom'
import { RootState } from '../../store/reducer'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { TABS } from '../../constants/tabsConstants'

export const Navbar = () => {
  const dispatch = useAppDispatch()
  let location = useLocation()
  const selectedTab = useAppSelector((state: RootState) => state.tabs.selectedTab)

  useEffect(() => {
    let path = location.pathname.substring(1)
    path = path === TABS.DEVELOPERS ? TABS.DEVELOPERS : TABS.REPOSITORIES
    dispatch(setSelectedTabAction(path))
  }, [location, dispatch])

  return (
    <div className="rounded-t-lg mx-12 mt-10 border border-gray-800 bg-gray-900">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center">
          <ul className="ml-8 flex items-baseline border border-gray-800 rounded-md">
            <li
              className={`${
                selectedTab === TABS.REPOSITORIES && 'bg-blue-600'
              } text-white px-3 py-2 rounded-l-md text-sm font-medium`}
              data-testid="nav-repositories"
            >
              <Link to="/">Repositories</Link>
            </li>
            <li
              className={`${
                selectedTab === TABS.DEVELOPERS && 'bg-blue-600'
              } text-white px-3 py-2 rounded-r-md text-sm font-medium`}
              data-testid="nav-developers"
            >
              <Link to="/developers">Developers</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
