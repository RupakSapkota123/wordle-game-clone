import React from 'react'

const useWordle = (data) => {
     const [turn , setTurn] = React.useState(0);
    const [current , setCurrent] = React.useState('');
    const [guesses, setGuesses] = React.useState([]); // each guess is an array of letters
    const [history , setHistory] = React.useState([]); // each guess is an array of letters
    const [isCorrect , setIsCorrect] = React.useState(false);

     
     
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