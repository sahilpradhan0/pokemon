import { Card } from "antd";
import { useNavigate } from "react-router-dom";
const { Meta } = Card;
const ProductCard = ({name,id}) => {
  const nav = useNavigate();
  return (
    <Card
    onClick={() => nav("/pokemon/"+id)}
      hoverable
      style={{
        width: 240,
      }}
      cover={
        <img
          alt="example"
          src={`https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
          style={{width:"120px", margin:"20px auto 0 auto"}}
        />
      }
    >
      <Meta title={name} style={{textAlign:"center"}}/>
    </Card>
  );
};
export default ProductCard;
