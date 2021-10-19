import React from 'react'
import { Provider } from 'react-redux'
import { render, fireEvent, waitFor } from '@testing-library/react'
import App from './App'
import { store } from './store/store'
import mockedUseFetchData from './hooks/useFetchData'
import repositoriedsData from './__fixtures__/repositoriesData.json'

jest.mock('./hooks/useFetchData')

const renderApp = () =>
  render(
    <Provider store={store}>
      <App />
    </Provider>
  )

test('When data is being fetched, then show a loading element', () => {
  mockedUseFetchData.mockReturnValue({
    isLoading: true,
    error: null,
    data: null,
  })
  const { getByTestId } = renderApp()

  const loadingElement = getByTestId('loading-element')
  expect(loadingElement).toBeInTheDocument()
})

test('When there is error while fetching data, then shows an error element', () => {
  mockedUseFetchData.mockReturnValue({
    isLoading: false,
    error: new Error('Simulated Error'),
    data: null,
  })
  const { getByTestId } = renderApp()

  const errorElement = getByTestId('error-element')
  expect(errorElement).toBeInTheDocument()
})

test('When data is fetched, repositories tab is shown initially', () => {
  mockedUseFetchData.mockReturnValue({
    isLoading: false,
    error: false,
    data: repositoriedsData,
  })
  const { getByTestId } = renderApp()

  const repositoriesTab = getByTestId('repositories-tab')
  expect(repositoriesTab).toBeInTheDocument()
})

test('Clicking on Star should change to UnStar', () => {
  mockedUseFetchData.mockReturnValue({
    isLoading: false,
    error: false,
    data: repositoriedsData,
  })
  const { getAllByText } = renderApp()

  const starBtn = getAllByText('Star')[0]
  fireEvent.click(starBtn)
  expect(starBtn).toHaveTextContent('UnStar')
})
