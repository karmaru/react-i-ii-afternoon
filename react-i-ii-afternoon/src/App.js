import React from 'react';
// import logo from './logo.svg';
import './App.css';
import data from './data'

import Head from './Head'
import Info from './Info'
// import BottomNav from './BottomNav';

function App() {
  return (
    <div className="App">
      <Head />
      <Info data={data}/>
      {/* <BottomNav/> */}
    </div>
  );
}

export default App;
