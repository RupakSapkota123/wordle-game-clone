import React from "react";

// use useReducer to fetch data from the server
const initialState = {
     data: null
}

const fetchServer = (state = initialState, action) => {
     switch (action.type) {
     case "FETCH_SERVER":
          return {
               data:action.data
          }
     default:
          return state
     }
}

export const WordleDataContext = React.createContext({});

export const WordleDataProvider = ({ children }) => {
     const [state, dispatch] = React.useReducer(fetchServer, initialState);

     const fetchData = () => {
          fetch("http://localhost:4000/solutions")
               .then(res => res.json())
               .then((data) => {
                    const randomData = data[Math.floor(Math.random() * data.length)];
                    dispatch({
                         type: "FETCH_SERVER",
                         data: randomData
                    })
               })
     }

     React.useEffect(() => {
          fetchData();
     }, []);

     return(
          <WordleDataContext.Provider value={{state}}>
               {children}
          </WordleDataContext.Provider>
     )
}