import {useState} from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import feedbackData from './data/FeedbackData'
import feedbackStats from './components/feedbackStats'
function App(){
    const [feedback,setFeedback]=useState(feedbackData)
    const deleteFeedback = (id) =>{
       setFeedback(feedback.filter((item) => item.id !== id))
    }
    return (
        <>
        <Header />
        <div className="container">
        <feedbackStats feedback={feedback}/>
        <FeedbackList feedback={feedback}
        handleDelete={deleteFeedback}/>
      
        </div>
        
        </>
      
    )
}

export default App