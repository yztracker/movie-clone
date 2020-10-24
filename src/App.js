import React from 'react';
import './App.css';
import Row from './Row'
import request from './request';
import Banner from './Banner';
import Nav from './Nav';
function App() {
  return (
    <div className="App">
      <Nav/>

      <Banner/>

      <Row title='trend' fetchUrl={request.fetchTrending} isLarge={true}/>
      <Row title='Top Rate' fetchUrl={request.fetchTopRate}/>
      <Row title='Popular' fetchUrl={request.fetchPopular}/>
      <Row title='Upcoming' fetchUrl={request.fetchUpcoming}/>

    </div>
  );
}

export default App;
