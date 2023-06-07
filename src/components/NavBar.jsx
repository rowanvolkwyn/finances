import { useState } from "react";

const NavBar = () => {

    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        darkMode ? setDarkMode(false) : setDarkMode(true);
    }
    return (
        <div>
            <nav className={darkMode ? "z-40 w-full h-20 fixed top-0 bg-secondary shadow-sm" : "z-40 w-full h-20 fixed top-0 bg-white shadow-sm"}>
                <div
                    className="flex items-center justify-between
                    mx-auto w-11/12"
                >
                    <img src="../assets/RVLight.png" alt="logo"
                    className="w-16 py-2 hover:scale-110 transition-all duration-100 hidden" />
                    <div className="flex justify-between gap-4">
                        <button className="w-12 p-2 hover:p-1 transition-all duration-100">
                            <img alt="user-profile-icon" src="../assets/settings.svg"/>
                        </button>
                        <button className="w-12 p-2 hover:p-1 transition-all duration-100">
                            <img alt="user-profile-icon" src="../assets/user.svg"/>
                        </button>
                        <button className="w-12 p-2 hover:p-1 transition-all duration-100 toggle-dark">
                            <img alt="dark-mode-toggle" src="../assets/sun.svg" onClick={toggleDarkMode} />
                        </button>
                    </div>
                </div>

            </nav>
        </div>
    )
}

export default NavBar;