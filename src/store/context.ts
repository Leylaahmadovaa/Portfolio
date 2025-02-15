import { createContext } from "react";
 
interface ColorContextType {
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
}

export const Color = createContext<ColorContextType | undefined>(undefined);