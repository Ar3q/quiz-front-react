import React from 'react'
import PropTypes from 'prop-types'
import './QuizzesListElement.css'
import { Button } from '@material-ui/core'
import { Link } from '@reach/router'

const QuizzesListElement = ({ quiz, onMakeAnAttemptClick }) => {
  return (
    <div id="QuizzesListElement">
      <div>
        <div id="quiz-title">{quiz.title}</div>
        <div id="quiz-description">{quiz.description}</div>
      </div>
      <Link to="/quiz">
        <Button
          onClick={() => {
            onMakeAnAttemptClick(quiz.id)
          }}
        >
          Make an attempt
        </Button>
      </Link>
    </div>
  )
}

QuizzesListElement.propTypes = {
  quiz: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string
  }).isRequired,
  onMakeAnAttemptClick: PropTypes.func.isRequired
}

export default QuizzesListElement
