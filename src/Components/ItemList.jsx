import { useState, useEffect } from "react";
import Spinner from './Spinner'
import Item from "./Item";
import { useParams } from "react-router-dom";



export default function ItemList(){

  const [cartas, setCartas] = useState(<Spinner/>);
  const [loading, isLoading] = useState(false)
  const {categoria} = useParams();
  

  //SIMULACION API
  const listado = () => {
    let items = require("../Backend/productos.json")
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(items)
            isLoading(true)
        }, 2000);
    })
  }


  useEffect(() => {
    async function fetchedItems(){
      const items = await listado(); 
      setCartas(items)
    }

    fetchedItems()
  }, []);

  



    return ( 
        <div className="flex flex-wrap justify-start">
          {!loading ? cartas 
          : categoria ? cartas
          .filter((libro) => libro.categoria === categoria)
          .map((el)=>(

            <Item 
            key={el.id}
            nombre={el.nombre}
            precio={el.precio}
            img = {el.img}
            categoria = {el.categoria}
            id={el.id}

            />
          ))
        : cartas
        .map((el)=>(

          <Item 
          key={el.id}
          nombre={el.nombre}
          precio={el.precio}
          img = {el.img}
          categoria = {el.categoria}
          id={el.id}

          />
        ))
        }
        </div>

    );
}