const ContentContainer = () => {
    return (
        <div className="absolute w-11/12 left-[128px] 
                        top-[96px] z-50 grid grid-cols-10
                        gap-8 justify-evenly p-16">
            
            {/*Portfolio Value*/}
            <div className="panel col-span-4 ">
                01
            </div>
            
            {/*Cash Position*/}
            <div className="panel col-span-4 ">
                02
            </div>
            
            {/*Cash Percentage*/}
            <div className="panel col-span-2">
                03
            </div>
            
            {/*Current Weekly DCA*/}
            <div className="panel col-span-5 ">
                01
            </div>
            
            {/*Weekly Investment Cash*/}
            <div className="panel col-span-5 ">
                02
            </div>
            
        </div>
    )
}

export default ContentContainer;