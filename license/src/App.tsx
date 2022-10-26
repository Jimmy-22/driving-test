import React from 'react';

import { Routes ,Route } from 'react-router-dom';

import Home from './views/Home'
import Test from './views/Test'
import Result from './views/Result'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/test" element={<Test/>}></Route>
        <Route path="/result" element={<Result/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
