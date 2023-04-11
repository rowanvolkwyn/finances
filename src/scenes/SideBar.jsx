

const SideBar = () => {
    return (
        <div className="fixed top-[96px] left-0 h-screen w-28 m-0
                        flex flex-col
                        bg-neutraldarkgray text-white shadow-md">
                            
            <SideBarIcon icon="dashboard" text="dashboard" />
            <SideBarIcon icon="graph" text="graph" />
            <SideBarIcon icon="target" text="target" />
            <SideBarIcon icon="coins" text="coins" />
            <SideBarIcon icon="list" text="list" />
            
        </div>
    )
}

const SideBarIcon = ({ icon, text }) => (
    <div>
        <img src={`../assets/${icon}.svg`} className="sidebar-icon"/>
        <span className="sidebar-tooltip">
            {text}
        </span>
    </div>
)

export default SideBar;