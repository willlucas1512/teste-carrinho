import React, { useState, useEffect } from "react";
import Item from "../Item";
import "./Carrinho.css";
import { formataPreco } from "../utils";

const Carrinho = (props) => {
  const [data, setData] = useState([]);
  const [totalizers, setTotalizers] = useState([]);
  const [freteGratis, setFreteGratis] = useState(false);

  const getData = (pUrl) => {
    fetch(pUrl, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (pResponse) {
        return pResponse.json();
      })
      .then(function (pJson) {
        handleData(pJson);
      });
  };

  const handleData = (pJson) => {
    setData(pJson.items);
    setTotalizers(pJson.totalizers);
    setFreteGratis(pJson.totalizers[0]?.value >= 1000);
  };

  useEffect(() => {
    getData(props.url);
  }, []);

  return (
    <div className="carrinho">
      <div className="titulo">Meu carrinho</div>
      <div className="produtos">
        {data.map((pItem, pIndex) => {
          return <Item key={pIndex} {...pItem} />;
        })}
      </div>
      <div className="resumo">
        <div className="border">
          <div className="total">
            <p>Total</p>
            <p>{formataPreco(totalizers[0]?.value)}</p>
          </div>
          {freteGratis && (
            <div className="frete">Parabéns, sua compra tem frete grátis!</div>
          )}
        </div>
        <div className="botao">
          <button className="finalizar">Finalizar compra</button>
        </div>
      </div>
    </div>
  );
};

export default Carrinho;
