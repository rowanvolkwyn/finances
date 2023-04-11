const NavBar = () => {
    return (
        <nav className="z-40 w-full fixed top-0 py-6 bg-neutraldarkgray">
            <div
                className="flex items-center justify-between
                mx-auto w-5/6"
            >
                <h4 className="text-3xl font-bold text-white">Volkwyn Enterprises</h4>
                <div className="flex justify-between gap-4">
                    <button className="w-12">
                        <img alt="user-profile-icon" src="../assets/settings.svg"/>
                    </button>
                    <button className="w-12">
                        <img alt="user-profile-icon" src="../assets/user.svg"/>
                    </button>
                </div>
            </div>

        </nav>
    )
}

export default NavBar;