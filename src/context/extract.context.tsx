import { createContext, ReactNode, useState } from 'react';

interface Extract {
  id: number;
  type: 'pix';
  name: string;
  value: number;
  date: string;
}

interface ExtractProps {
  items: Extract[];
}

interface ExtractContextProps {
  extract: ExtractProps;
  setExtract: React.Dispatch<React.SetStateAction<ExtractProps>>;
  addItem: (extract: Extract) => void;
}

export const ExtractContext = createContext<ExtractContextProps | undefined>(
  undefined,
);

interface ExtractProviderProps {
  children: ReactNode;
}

export const ExtractProvider = ({ children }: ExtractProviderProps) => {
  const [extract, setExtract] = useState<ExtractProps>({
    items: [],
  });

  const addItem = (extract: Extract) => {
    setExtract((prevState) => ({
      ...prevState,
      items: [...prevState.items, extract],
    }));
  };

  return (
    <ExtractContext.Provider value={{ extract, setExtract, addItem }}>
      {children}
    </ExtractContext.Provider>
  );
};
