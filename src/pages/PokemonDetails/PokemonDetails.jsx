import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetchPokemon from "../../Hooks/useFetchPokemon";
import { Flex, Image, Spin } from "antd";
import "./PokemonDetails.css";
import { LoadingOutlined } from "@ant-design/icons";

const PokemonDetails = () => {
  const { id } = useParams();
  const { data, loading } = useFetchPokemon(id);
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonImages, setPokemonImages] = useState([]);
  function filterObjectByValue(obj) {
    return Object.keys(obj)
      .filter((key) => obj[key] !== null && obj[key] !== undefined)
      .reduce((acc, key) => ({ ...acc, [key]: obj[key] }), {});
  }
  useEffect(() => {
    if (data) {
      setPokemonData(data);
      const da = data?.sprites.other["official-artwork"];
      const filteredObject = filterObjectByValue(da);
      const imageArray = Object.values(filteredObject || {});
      setPokemonImages([...imageArray]);
      console.log(data);
    }
  }, [data]);

  return (
    <div>
      {loading && (
        <Flex align="center" gap="middle">
          <Spin
            style={{
              width: "200px",
              margin: "50px auto",
            }}
            indicator={
              <LoadingOutlined
                style={{
                  fontSize: 108,
                }}
              />
            }
          />
        </Flex>
      )}
      {!loading && (
        <div className="mt-5">
          <h1 className="text-center font-bold uppercase text-xl">
            {pokemonData?.name}
          </h1>
          <div className="mt-3 pl-5 mb-5">
            <p className="font-semibold ">Weight : <span className="font-bold">{pokemonData?.weight}gm</span>  </p>
            <p className="font-semibold ">Height : <span className="font-bold">{pokemonData?.height}0 cm</span></p>
          </div>
          <div className="grid gap-6 imgContainer">
            {pokemonImages?.map((image, index) => {
              return (
                <Image
                  className="pokemonImg"
                  width={200}
                  key={index}
                  alt="Image Not Found"
                  src={
                    image !== null
                      ? image
                      : "https://tse1.mm.bing.net/th?id=OIP.UYefmuqvYGCqQqZN9xaW8QHaGp&pid=Api&P=0&h=220"
                  }
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default PokemonDetails;
