import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const QuizPage = () => {
    const [quetion, setQuetion] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();

    console.log(quetion);
    
    useEffect(() => {
        setIsLoading(true);
        axios.get(`http://localhost:9000/quetions/${id}`)
          .then(res => {
            setQuetion(res.data);
            setIsLoading(false);
          })
          .catch(err => {
            console.log(err.message);
            setIsLoading(false);
          })
    }, []) 



    return (
        <div>
            {isLoading ? <p>Loading...</p> : (
                <>
                    <h2>{quetion.quetion}</h2>
                </>
            )}
        </div>
    )
}

export default QuizPage