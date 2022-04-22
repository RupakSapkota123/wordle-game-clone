import React, { useEffect } from 'react'
import axios from 'axios';
function App() {
     const [data, setData] = React.useState(null);
     const [error, setError] = React.useState(null);
     const [loading, setLoading] = React.useState(false);

    useEffect(() => {
         const fetchData =  () => {
         fetch('http://localhost:4000/solutions')
         .then(res => res.json())
         .then((json) => {
               const randomData = json[Math.floor(Math.random() * json.length)];
               setData(randomData);
               console.log('randomData', randomData);
         })
         .catch(err => {
               setError(err);
               setLoading(false);
         })
     }
     fetchData();
    }, []);
return <>{data && (
     <div>
          <h1>{data.word}</h1>
          </div>
)}</>;
}

export default App;
