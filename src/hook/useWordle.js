import React from 'react'
import {WorldeContext  } from '../reducers/WordleReducers'

const useWordle = (data) => {
     const { state, dispatch } = React.useContext(WorldeContext)
     
     // array of letter objects of format
     const formatGuess = (guess) => {

     }

     const addNewGuess = (guess) => {

     }

     const handleKeyUp = ({key}) => {
        console.log('key', key);

      if(key === 'Backspace'){
             dispatch({type: 'SET_CURRENT', current: state.current.slice(0, -1)})
             return;
      }
      
         if(/^[A-Za-z]$/.test(key)){
             console.log('key', key);
             if(state.current.length < 5){
                 dispatch({
                     type: 'SET_CURRENT',
                     current: state.current + key,
                 })
             }
         }

         
     }


  return {
   //   turn,
   //   current,
   //   guesses,
   //   history,
   //   isCorrect,
     formatGuess,
       addNewGuess,
         handleKeyUp,
  }
}

export default useWordle