import { SearchOutlined } from "@ant-design/icons";
import "./Navbar.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const [searchInput, setSearchInput] = useState("");
  const nav = useNavigate();
  return (
    <div className="bg-red-500 flex items-center justify-between pl-5 pr-5">
      <div>
        <img
          src="https://clipground.com/images/pokemon-logo-png-5.png"
          alt="Pokemon"
          className="cursor-pointer logo-img"
          onClick={() => nav("/")}
        />
      </div>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          nav("/pokemon/search/" + searchInput);
          setSearchInput("");
        }}
      >
        <input
          type="text"
          placeholder="Search..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="bg-transparent  text-white searchInput"
        />
        <SearchOutlined
          style={{ color: "white", fontSize: "20px", cursor: "pointer" }}
          onClick={() => nav("/pokemon/search/" + searchInput)}
        />
      </form>
    </div>
  );
};

export default Navbar;
