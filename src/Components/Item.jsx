import { NavLink } from 'react-router-dom'
import "../Assets/Item.css"

export default function item(props) {


    
    return (

        <div className='card md:mx-5 my-5'>
            <div className="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 ">
                <a href="#">
                    <img className="p-8 rounded-t-lg" src={props.img} alt="product image" />
                </a>
                <div className="px-5 pb-5">
                    <a href="#">
                        <h5 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{props.nombre}</h5>
                    </a>
                    <div className="flex items-center mt-2 mb-5 ">
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">{props.precio}</span>
                        
                            
                            <NavLink to = {`/${props.categoria}/${props.id}`} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Me interesa</NavLink> 
                    </div>
                </div>
            </div>

        </div>

    )

}