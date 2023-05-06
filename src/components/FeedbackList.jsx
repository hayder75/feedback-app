import PropTypes  from "prop-types";
import FeedbackItem from "./FeedbackItem";

function FeedbackList({feedback , handleDelete}) {
    if(!feedback || feedback.leng == 0) {
            return <p>No Feedback Yet</p>
    }

    return (
    <div className="feedback-list">
        {feedback.map((item) => (
      <FeedbackItem 
      key={item.id}
       item={item}
       handleDelete={handleDelete} />
        ))}
    </div>
  )
}

FeedbackList.propTypes = {
    feedback : PropTypes.array,
}
export default FeedbackList;
