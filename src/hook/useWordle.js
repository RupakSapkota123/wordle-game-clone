import React from 'react'
import { WorldeContext } from '../reducers/wordleReducers'

const useWordle = (data) => {
     const { state, dispatch } = React.useContext(WorldeContext)
     
     // array of letter objects of format
     const formatGuess = (guess) => {

     }

     const addNewGuess = (guess) => {

     }

     const handleKeyPress = (e) => {

     }


  return {
     turn,
     current,
     guesses,
     history,
     isCorrect,
  }
}

export default useWordle