import { createContext } from "react";
import { Calculator } from "@/store/calculator";

export const stores = {
  calculator: new Calculator(),
};

export const useStore = createContext(stores);
