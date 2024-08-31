import axios from "axios"
import { useEffect, useState } from "react";

const useFetch = () => {
    const [data,setData] = useState(null);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);
    useEffect(() => {
        const fetchData = async() => {
            setLoading(true);
            try {
                const response = await axios.get("https://pokeapi.co/api/v2/pokemon/");
                setData(response.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
            setLoading(false);
        }
        fetchData();
    },[])
  return {data,loading,error}
}

export default useFetch