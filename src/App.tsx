import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Developers } from './components/tabs/Developers'
import { Repositories } from './components/tabs/Repositories'
import { AppHome } from './AppHome'

const queryClient = new QueryClient()

function App() {
  return (
    <div className="App text-white bg-black">
      <QueryClientProvider client={queryClient}>
        <Router>
          <AppHome />
          <Switch>
            <Route path="/" exact component={Repositories} />
            <Route path="/developers" component={Developers} />
          </Switch>
        </Router>
      </QueryClientProvider>
    </div>
  )
}

export default App
