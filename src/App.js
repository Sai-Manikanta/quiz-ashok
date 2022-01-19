import { Switch, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import QuizPage from './pages/QuizPage'
import ResultPage from './pages/ResultPage'

const App = () => {
    return (
        <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/quiz/:id" component={QuizPage} />
            <Route path="/result" component={ResultPage} />
        </Switch>
    )
}

export default App