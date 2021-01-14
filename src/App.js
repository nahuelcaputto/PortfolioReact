import './App.css';
import { Layout, Content } from "react-mdl";
import Main from './Components/main';
import HeaderBar from "./Components/Header/header";
import SideBar from "./Components/SideBar/sidebar";
function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <HeaderBar />
        <SideBar />
        <Content>
          <Main />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
