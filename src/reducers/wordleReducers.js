import React from 'react'

const initialState = {
     turn: 0,
     current: '',
     guesses: [],
     history: [],
     isCorrect: false,
}

const wordle = (state = initialState, action) => {
     switch (action.type) {
     case 'SET_TURN':
          return {
          ...state,
          turn: action.turn,
          }
     case 'SET_CURRENT':
          return {
          ...state,
          current: action.current,
          }
     case 'SET_GUESSES':
          return {
          ...state,
          guesses: action.guesses,
          }
     case 'SET_HISTORY':
          return {
          ...state,
          history: action.history,
          }
     case 'SET_IS_CORRECT':
          return {
          ...state,
          isCorrect: action.isCorrect,
          }
     default:
          return state
     }
}

const wordleReducers = () => {
     const [state, dispatch] = React.useReducer(wordle, initialState)
  return {
     state,
     dispatch,
  }
}

export default wordleReducers