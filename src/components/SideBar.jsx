import { Link } from "react-router-dom";

const SideBar = () => {

    return (
        <div className="fixed left-0 h-screen w-64 m-0 inline bg-white text-secondary">
                            
            <SideBarIcon icon="dashboard" text="dashboard"/>
            <SideBarIcon icon="graph" text="portfolio" />
            <SideBarIcon icon="target" text="strategy"/>
            <SideBarIcon icon="coins" text="budget" />
            <SideBarIcon icon="list" text="transactions" />
            
        </div>
    )
}

const SideBarIcon = ({ icon, text }) => (
    <Link to={text}>
        <div className="flex w-auto items-center group hover:bg-secondary transition-all duration-500">
            <img alt="icon" src={`../assets/${icon}.svg`}
                className="sidebar-icon group-hover:bg-accent
                            group-hover:rounded-xl group-hover:p-2"
            />
            <div className="sidebar-tooltip group-hover:text-white" >
                {text}
            </div>
        </div>
    </Link>

)

export default SideBar;