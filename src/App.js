import NavBar from "./scenes/NavBar.jsx";
import SideBar from "./scenes/SideBar.jsx";
import ContentContainer from "./scenes/ContentContainer.jsx";

function App() {
  return (
    <div>
      <div className="flex h-1/6">
        <NavBar />
      </div>
      <div className="flex h-5/6">
          <SideBar />
          <ContentContainer />
      </div> 
    </div>
    
  );
}

export default App;
