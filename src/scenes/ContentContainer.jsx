import SideBar from "./SideBar";

const ContentContainer = () => {
    return (
        <div className="fixed flex w-screen top-20">
            <SideBar />
            <div className="fixed w-5/6 grow left-64 grid grid-cols-10 z-50
                            gap-6 justify-evenly p-6 mr-0"
            >
                
                <ContentPanel 
                    title="Portfolio Value" change="+12.3%" value="$16,930" span="4" 
                />

                <ContentPanel 
                    title="Cash Position" change="+10%" value="$3,000" span="4" 
                />

                <ContentPanel 
                    title="Cash %" change="+2%" value="30%" span="2" 
                />

                <ContentPanel 
                    title="Current Weekly DCA" change="+10%" value="$3,000" span="5" 
                />

                <ContentPanel 
                    title="Weekly Investment Cash" change="+10%" value="$3,000" span="5" 
                />
                
            </div>
        </div>

    )
}

const ContentPanel = ({ span, title, change, value }) => (
    <div className={`panel col-span-${span} group`}>
        <div className="col-span-3">
            <h3 className="data-title group-hover:text-white">{title}</h3>
        </div>
        <div className="col-span-1">
            <h3 className="data-change group-hover:text-white">{change}</h3>
        </div>
        <div className="col-span-4 row-span-3">
            <h3 className="data-value group-hover:text-white">{value}</h3>
        </div>
    </div>
)

export default ContentContainer;