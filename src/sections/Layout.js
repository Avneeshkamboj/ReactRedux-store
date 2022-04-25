import { Outlet } from "react-router-dom";
import Footer from "./Footer.js";
import Header from "./Header";
import { Container } from "react-bootstrap"
//import Sidebar from "./Sidebar"


const Layout = () => {

  

  return (
    <>
    <Header />
   {/* <Sidebar /> */}
    <Container  style={{minHeight:'500px', padding:'30px 0'}}> <Outlet /></Container> 
      <Container fluid  style={{padding:'0px'}}><Footer /></Container>
    </>
  )
};

export default Layout;