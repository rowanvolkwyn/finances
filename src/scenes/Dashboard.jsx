import React from 'react';

const Dashboard = () => {
    return (
        <div className="fixed w-5/6 grow left-64 grid grid-cols-5 z-50 gap-6 justify-evenly p-6 mr-0">

            <DashboardPanel
                title="Portfolio Value"
                change="+12.3%" 
                value="$16,930"
                span="2" 
            />
            <DashboardPanel
                title="Cash Position"
                change="+10%"
                value="$3,000"
                span="2" 
            />                
            <DashboardPanel 
                title="Cash %"
                change="+2%"
                value="15%"
                span="1" 
            />
            <DashboardPanel
                title="Current Weekly DCA"
                change="+10%"
                value="$370"
                span="2"
            />
            <DashboardPanel
            title="Weekly Investment Cash"
            change="+10%"
            value="$550"
            span="2"
            />
            <DashboardPanel
                title="DCA %"
                value="67%"
                span="1" 
            />
                
        </div>

    )
}

const DashboardPanel = ({ span, title, change, value }) => (
    <div className={`panel col-span-${span} group`}>
        <div className="col-span-3">
            <h3 className="data-title group-hover:text-accent">{title}</h3>
        </div>
        <div className="col-span-1">
            <h3 className="data-change group-hover:text-accent">{change}</h3>
        </div>
        <div className="col-span-4 row-span-3">
            <h3 className="data-value group-hover:text-accent">{value}</h3>
        </div>
    </div>
)

export default Dashboard;