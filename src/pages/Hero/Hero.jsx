import { useEffect, useState } from 'react'
import ProductCard from '../../components/Card/ProductCard'
import useFetch from '../../Hooks/useFetch';
import "./Hero.css"
const Hero = () => {
    const [pokemons,setPokemon] = useState(null);
    const {data} = useFetch();
    useEffect(() => {
        setPokemon(data?.results);
    })
  return (
    <div className='card'>
        {
            pokemons?.map((pokemon,index) => {
                return(
                    <ProductCard key={index} name={pokemon.name} id={index+1}/>
                )
            })
        }
    </div>
  )
}

export default Hero;