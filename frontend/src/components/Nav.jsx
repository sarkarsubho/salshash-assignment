import React from "react";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  return (
    <div style={{display:"flex" ,justifyContent:"space-between"}}>
      <h2 onClick={()=>navigate("/")}>Movie app</h2>
      <button onClick={()=>navigate("/favorites")}>show favorites</button>
    </div>
  );
};

export default Nav;
