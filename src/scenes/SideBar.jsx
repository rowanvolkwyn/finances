

const SideBar = () => {
    return (
        <div className="fixed top-[96px] left-0 h-screen w-1/12 m-0
                        flex flex-col
                        bg-secondary text-white shadow-md">
                            
            <SideBarIcon icon="dashboard" />
            <SideBarIcon icon="graph" />
            <SideBarIcon icon="target" />
            <SideBarIcon icon="coins" />
            <SideBarIcon icon="list" />
            
        </div>
    )
}

const SideBarIcon = ({ icon, text }) => (
    <div>
        <img alt="icon" src={`../assets/${icon}.svg`} className="sidebar-icon"/>
        <span className="sidebar-tooltip">
            {text}
        </span>
    </div>
)

export default SideBar;