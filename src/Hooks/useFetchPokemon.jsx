import axios from "axios";
import  { useEffect, useState } from "react";

const useFetchPokemon = (id) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const fetchPokemonData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${id}`
        );
        setData(response.data);
        setSuccess(true);
      } catch (error) {
        setError(error);
        setSuccess(false);
      }
      setTimeout(() => {
        setLoading(false);
      },[1000])
    };
    fetchPokemonData();
  },[id]);

  return {data,loading,error,success}
};

export default useFetchPokemon;
