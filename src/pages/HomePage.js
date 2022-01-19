import { useHistory } from 'react-router-dom'

const Home = () => {

    const history = useHistory();

    const redirectToQuiz = () => {
        history.push('/quiz/1')
    }

    return (
        <div>
            <h1>Quiz</h1>
            <button onClick={redirectToQuiz}>
                Start
            </button>
        </div>
    )
}

export default Home