import logo from "../logo.svg";
import "./Header.css";
import SearchBar from "./SearchBar";
import Menu from "./Menu";
import {useState, useEffect} from "react";

function Header({ searchTerm, setSearchTerm }){

    const [menuOpen, setMenuOpen] = useState(false);
    const [hideNav, setHideNav] = useState(false);
    const [lastScroll, setLastScroll] = useState(0);

    const toggleMenu = () => setMenuOpen((show) => !show);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;

            if (currentScroll > 200 && currentScroll > lastScroll) {
                setHideNav(true);
            } else {
                setHideNav(false);
            }
            setLastScroll(currentScroll);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScroll]);

    return(

        <header className={`header ${menuOpen ? "header-mob" : ""}  ${hideNav ? "nav-hide" : ""} `}>
            <div className='header-top'>
                <div className='container'>
                    <button className='btn-menu' onClick={toggleMenu}></button>
                    <a href='/'
                       className="logo">
                        <img src={logo} className="App-logo" alt="logo" />
                    </a>
                   <SearchBar  searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
                </div>
            </div>



            <nav className='nav'>
                <div className='container'>
                   <Menu/>
                </div>
            </nav>

                <nav className={`nav-mobile ${menuOpen ? "nav-mobile-open" : ""}`}>
                    <div className='nav-content'>
                        <div className='mobile-logo'>
                            <a href="/" className="logo">
                                <img src={logo} className="App-logo" alt="logo" />
                            </a>
                            <button className='btn-menu btn-menu-close' onClick={toggleMenu}></button>

                        </div>
                        <Menu/>
                    </div>
                </nav>
        </header>

    )
}
export default Header;