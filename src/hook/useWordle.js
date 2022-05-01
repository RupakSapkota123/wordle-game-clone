import React from 'react'
import {WorldeContext  } from '../reducers/WordleReducers'

const useWordle = (data) => {
     const { state, dispatch } = React.useContext(WorldeContext)
     
     // array of letter objects of format
     const formatGuess = (guess) => {
      console.log('formattingGuess - ', state.current);
     }

     const addNewGuess = (guess) => {

     }

     const handleKeyUp = ({key}) => {

      /* */

        if(key === 'Enter'){
          /* 
          @TODO:
          1. only add guess if it turns out less than 5 letters
          */
            if(state.turn < 5){
                // addNewGuess(state.current)
                // dispatch({type: 'SET_TURN', turn: state.turn + 1})
                // dispatch({type: 'SET_CURRENT', current: ''})
                console.log('you used your all guesses');
                return
            }

            /* 
             @TODO:
             1. Do not allow the duplicate words
            */
            if (state.history.includes(state.current)){
                // dispatch({type: 'SET_IS_CORRECT', isCorrect: true})
                console.log('you already used this word');
                return

            }

            /*
             @TODO:
              1. Check if chars is 5 or less
             */

            if(state.current.length !== 5){
                // dispatch({type: 'SET_IS_CORRECT', isCorrect: false})
                console.log('chars less than 5');
                return

            }
            formatGuess()
            }
      if(key === 'Backspace'){
             dispatch({type: 'SET_CURRENT', current: state.current.slice(0, -1)})
             return;
      }
      
         if(/^[A-Za-z]$/.test(key)){
             if(state.current.length < 5){
                 dispatch({
                     type: 'SET_CURRENT',
                     current: state.current + key,
                 })
             }
         }


        
         }


  return {
     formatGuess,
       addNewGuess,
         handleKeyUp,
  }
}

export default useWordle