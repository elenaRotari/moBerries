import { createContext, ReactElement, useReducer } from "react";
import { reducer } from "./reducer/reducer.js";

type props = {
  children: ReactElement | ReactElement[];
};
export const ExampleContext = createContext<any>({});

function MyContext({ children }: props) {
  const myReducer = useReducer(reducer, []);
  return (
    <ExampleContext.Provider value={myReducer}>
      {children}
    </ExampleContext.Provider>
  );
}

export default MyContext;
