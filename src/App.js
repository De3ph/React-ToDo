import React from 'react';
import { RecoilRoot } from 'recoil'
import './App.css';
import ToDo from './components/ToDo';


function App() {

  return (
    <RecoilRoot>
      <ToDo></ToDo>
    </RecoilRoot>
  );
}

export default App;
