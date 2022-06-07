import React from "react";
import "./Item.css";
import { formataPreco, formataNome } from "../utils";

const Item = (props) => {
  return (
    <div className="item">
      <div className="imagem">
        <img width="96px" height="96px" src={props.imageUrl} />
      </div>
      <div className="info">
        <div className="nome">{formataNome(props.name)}</div>
        <div className="preco">{formataPreco(props.price)}</div>
        <div className="precoVenda">{formataPreco(props.sellingPrice)}</div>
      </div>
    </div>
  );
};

export default Item;
