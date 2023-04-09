
import React from 'react';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import FeaturedJobs from './components/FeaturedJobs';


const App = () => {
  return (
    <div>
     <Header></Header>
  
     <Outlet></Outlet>
    </div>
  );
};

export default App;