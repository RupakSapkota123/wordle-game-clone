import React from 'react'
import axios from 'axios'

const useFetch = (url) => {
     const [data, setData] = React.useState();
     const [error, setError] = React.useState(null);
     const [loading, setLoading] = React.useState(false);

     React.useEffect(() => {
          setLoading(true);
          axios.get('http://localhost:4000/solutions')
               .then(res => {
                    res.json()
               })
               .then((json) => {
                    console.log('json', json);
                    const randomData = json[Math.floor(Math.random() * json.length)];
                    setData(randomData);
                    console.log('randomData', randomData);
               })
               .catch(err => {
                    setError(err);
                    setLoading(false);
               })              
     }, [url, setData, setLoading, setError]);
  return {
       data,
           error,
               loading
  }
}

export default useFetch