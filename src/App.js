import React, { useEffect } from 'react'
import axios from 'axios';
import { Card, Layout } from 'antd';
import styled from  'styled-components';
import 'antd/dist/antd.css';

const { Header, Content } = Layout;

const StyledHeader = styled(Header)`
color: #212121;
 background-color: #FDF6EC;
 font-size: 1.2rem;
 font-weight: 600;
 text-align: center;
 // add box-shadow bottom
     box-shadow: 0px -1px 0px 0px #E0E0E0;
 .ant-layout-header{}
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
`

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
          <StyledLayout>
      <StyledHeader>Wordle-Clone</StyledHeader>
      <StyledContent>{data && (
           <StyledCard >
                <Card style={{width: "fit-content"}}>
                    <h4>{data.word}</h4>
                </Card>
           </StyledCard>
      )}</StyledContent>
    </StyledLayout>
          </div>
)}</>;
}

export default App;
