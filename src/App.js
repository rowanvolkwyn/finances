import NavBar from "./components/NavBar.jsx";
import SideBar from "./components/SideBar.jsx";
import Dashboard from "./scenes/Dashboard.jsx";

function App() {
  return (
    <div className="fixed flex w-screen top-20">
        <NavBar />
        <SideBar />
        <Dashboard />
    </div>
    
  );
}

export default App;
