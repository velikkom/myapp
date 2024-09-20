import React, { useContext } from "react";
import { Dropdown } from "react-bootstrap";
import StoreContext from "../../store";

export const CurrencyList = () => {
  const { currencies } = useContext(StoreContext);

  const arrCurrencies = Object.entries(currencies);

  return (
    <Dropdown>
      <Dropdown.Toggle variant="danger" id="dropdown-basic">
        Exchange Rates
      </Dropdown.Toggle>

      <Dropdown.Menu style={{height:"40vh",overflow:"auto"}}>
        {arrCurrencies.map((item) => (
          <Dropdown.Item key={item[0]} href="#/action-1">
           1  {item[0]} : {(1/item[1]).toFixed(2)} TL
          </Dropdown.Item>
        ))}

        <Dropdown.Item href="#/action-1"></Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
