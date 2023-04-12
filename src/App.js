import NavBar from "./components/NavBar.jsx";
import SideBar from "./components/SideBar.jsx";
import Dashboard from "./scenes/Dashboard.jsx";
import Portfolio from "./scenes/Portfolio.jsx";
import Strategy from "./scenes/Strategy.jsx";
import Budget from "./scenes/Budget.jsx";
import Transactions from "./scenes/Transactions.jsx";

function App() {
  return (
    <div className="fixed flex w-screen top-20">
        <NavBar />
        <SideBar />
        <Portfolio />
    </div>
    
  );
}

export default App;
