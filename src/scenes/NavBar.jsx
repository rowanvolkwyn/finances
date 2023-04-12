const NavBar = () => {
    return (
        <nav className="z-40 w-full h-20 fixed top-0 bg-white ">
            <div
                className="flex items-center justify-between
                mx-auto w-11/12"
            >
                <img src="../assets/RVLight.png"
                     className="w-16 py-2 hover:scale-110 transition-all duration-100" />
                <div className="flex justify-between gap-4">
                    <button className="w-12 p-2 hover:p-1 transition-all duration-100">
                        <img alt="user-profile-icon" src="../assets/settings.svg"/>
                    </button>
                    <button className="w-12 p-2 hover:p-1 transition-all duration-100">
                        <img alt="user-profile-icon" src="../assets/user.svg"/>
                    </button>
                </div>
            </div>

        </nav>
    )
}

export default NavBar;