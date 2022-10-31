import { Link } from "react-router-dom";
import logo from "../Assets/logo.png"
import CartIcon from "../Components/CartWidget"
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <div className="bg-sky-500 shadow text-white">
            <nav className='md:flex md:items-center md:justify-between'>
                <div className="flex justify-between items-center">
                    <span className="text-xl mx-4 p-2 font-['arial'] hover:text-cyan-800 duration-500 cursor-pointer">
                        <Link to={`/`} >
                            <img className="h-12 inline mx-5" src={logo} alt="book"></img>
                           Seguridad para el hogar y empresarial </Link>
                    </span>


                </div>

                <ul className='md:flex md:items-center z-[-1] bg-sky-500 md:bg-sky-500 md:z-auto w-full left-0 md:w-auto py-1 md:pl-0 pl-10'>     
                        <li className="text-xl hover:text-cyan-800 duration-500 my-4 md:my-0">
                            <NavLink to = {`/categoria/hogar`} className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Seguridad Hogar</NavLink>      
                        </li>
                        <li className="text-xl hover:text-cyan-800 duration-500 my-4 md:my-0">
                            <NavLink to = {`/categoria/empresa`} className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Seguridad Empresas</NavLink>
                        </li>    
                    <li className="text-xl hover:text-cyan-800 duration-500 my-4 mx-4 md:my-0">
                        <a href="#">Contacto</a>
                    </li>
                    <li className="text-xl hover:text-cyan-800 duration-500 my-6 mx-3 md:my-2 mx-3">
                        <CartIcon />
                    </li>
                </ul>
            </nav>

        </div>
    );
}

export default NavBar;
