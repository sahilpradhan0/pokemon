import { useEffect, useState } from "react";
import "./SearchResults.css";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/Card/ProductCard";
import { Flex, Result, Spin } from "antd";
import useFetchPokemon from "../../Hooks/useFetchPokemon";
import { LoadingOutlined } from "@ant-design/icons";
const SearchResults = () => {
  const { name } = useParams();
  const [searchResult, setSearchResult] = useState({});
  const { data, loading, success } = useFetchPokemon(name);
  useEffect(() => {
    if (data) {
      console.log(data);

      setSearchResult(data);
    }
  }, [name, data]);

  return (
    <div className="mt-5 flex flex-col justify-center items-center">
      <h1 className="text-xl font-bold mb-5">Search Results for {name}</h1>
      {loading ? (
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
      ) : (
        <>
          {success ? (
            <ProductCard name={searchResult.name} id={searchResult.id} />
          ) : (
            <Result
              status="500"
              title={`${name} not found`}
              subTitle="Please check the spelling and try again."
            />
          )}
        </>
      )}
    </div>
  );
};

export default SearchResults;
