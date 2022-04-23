import React, { useEffect } from 'react'
import axios from 'axios';
import { Card, Layout } from 'antd';
import styled from  'styled-components';
import Wordle from './components/Wordle';
import 'antd/dist/antd.css';
import { WordleDataContext } from './context/WordleDataContext';
import { WorldeContext } from './reducers/WordleReducers';
import useWordle from './hook/useWordle';
import Header from './components/Header';

const { Header: Headers, Content } = Layout;

const StyledHeader = styled(Headers)`
    /* display: inline-table; */
    display: flex;
    align-items: center;

color: #212121;
 background-color: #fff;
 font-size: 1.5rem;
 height: 50px;
 font-weight: 600;
 /* text-align: center; */
 border-bottom: 1px solid #e8e8e8;
 .ant-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-flow: row wrap;
}
`

const StyledContent = styled(Content)`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
min-width: 100%;
max-width: 100%;
`
const StyledLayout = styled(Layout)`
background-color: #fff;

`
const StyledCard = styled(Card)`
width: 500px;
min-width: 500px;
max-width: 500px;
padding: 5px;
`

function App() {
     // const [data, setData] = React.useState(null);
     // const [error, setError] = React.useState(null);
     // const [loading, setLoading] = React.useState(false);

     const { state: data } = React.useContext(WordleDataContext);
     const { state } = React.useContext(WorldeContext);
     const {handleKeyPress} = useWordle(data);

     React.useEffect(() => {

     },[])
     
     console.log('data', data);

//     useEffect(() => {
//          const fetchData =  () => {
//          fetch('http://localhost:4000/solutions')
//          .then(res => res.json())
//          .then((json) => {
//                const randomData = json[Math.floor(Math.random() * json.length)];
//                setData(randomData);
//                console.log('randomData', randomData);
//          })
//          .catch(err => {
//                setError(err);
//                setLoading(false);
//          })
//      }
//      fetchData();
//     }, []);
return <>{data && (
     <div>
          <StyledLayout>
      <StyledHeader>
           <Header />
      </StyledHeader>
      <StyledContent>{data.data && (
           <StyledCard >
                <Card style={{width: "fit-content"}}>
                    <h4>{<Wordle />}</h4>
                </Card>
           </StyledCard>
      )}</StyledContent>
    </StyledLayout>
          </div>
)}</>;
}

export default App;
