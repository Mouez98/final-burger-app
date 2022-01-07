import React from 'react';

import './App.css';
import Layout from './Layout/Layout'
import BurgerBuilder from './BurgerBuilder/BurgerBuiler';


class App extends React.Component{
  render(){
    return (
      <>
       <Layout>
         <BurgerBuilder />
       </Layout>
      </>
    );
  }
}

export default App;
