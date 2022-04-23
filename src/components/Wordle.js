import React from 'react'
import { WordleDataContext } from '../context/WordleDataContext';
import { WorldeContext } from '../reducers/WordleReducers';
import useWordle from '../hook/useWordle';

const Wordle = () => {
     const { state: data } = React.useContext(WordleDataContext);
     const { state } = React.useContext(WorldeContext);
     const {handleKeyUp} = useWordle(data);

     React.useEffect(() => {
          window.addEventListener('keyup', handleKeyUp);

          return () => {
               window.removeEventListener('keyup', handleKeyUp);
          }
     },[handleKeyUp])
  return (
    <div>current guess - {state.current}</div>
  )
}
