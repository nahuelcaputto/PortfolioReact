import React from 'react';
import './App.css';
import { Layout, Content } from "react-mdl";
import Main from './Components/main';
import HeaderBar from "./Components/Header/header";
import SideBar from "./Components/SideBar/sidebar";
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './Components/Navbar/Navbar'
import LandingPage from './Components/LandingPage/landingPage'


function App() {
  return (
    // <Layout>
    //   <HeaderBar />
    //   <SideBar />
    //   <Content>
    //     <Main />
    //   </Content>
    // </Layout>
    <>
      <Navbar />
      <LandingPage />
    </>
  );
}

export default App;
