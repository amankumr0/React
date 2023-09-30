import { Link, NavLink } from "react-router-dom"

const Header = () => {
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png" alt="LOGO" className=" mr-3 h-12" />
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <Link to="#"
                            className="text-gray-800 hover:bg-gray-500 focus:ring-4 focus:ring-gray-300
                        font-medium rounded-lg text-sm px-4 lg:px-5 lg:py-2.5 mr-2 focus:outline-none">
                            Login
                        </Link>
                        <Link to="#"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300
                        font-medium rounded-lg text-sm px-4 lg:px-5 lg:py-2.5 mr-2 focus:outline-none">
                            Get Started
                        </Link>
                    </div>
                    <div className=" hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id=" mobile-menu-2">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) => (`block py-2 pl-3 pr-4 duration-200 first-letter
                                    ${isActive ? "text-orange-700" : "terxt-gray-700"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 text-base
                                `)}>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) => (`block py-2 pl-3 pr-4 duration-200 first-letter
                                    ${isActive ? "text-orange-700" : "terxt-gray-700"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 text-base
                                `)}>
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/github"
                                    className={({ isActive }) => (`block py-2 pl-3 pr-4 duration-200 first-letter
                                    ${isActive ? "text-orange-700" : "terxt-gray-700"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 text-base
                                `)}>
                                    GitHub
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
