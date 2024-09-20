import { useEffect, useState } from "react";
import { AppRouter } from "./router";
import StoreContext from "./store";
import { useCurrencies } from "./components/hooks/usecurrencies";

export const App = () => {
 const {currencies,error,loading} = useCurrencies();
 

  return (
    <StoreContext.Provider value={{ currencies }}>
      <AppRouter />
    </StoreContext.Provider>
  );
}
