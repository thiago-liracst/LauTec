import React, { createContext, useState, useContext, useEffect } from 'react';

// Crie um contexto para armazenar os dados em cache
const DataCacheContext = createContext();

export const DataCacheProvider = ({ children }) => {
  const [cache, setCache] = useState({});

  const setDataInCache = (key, data) => {
    setCache((prevCache) => ({ ...prevCache, [key]: data }));
  };

  const getDataFromCache = (key) => {
    return cache[key];
  };

  return (
    <DataCacheContext.Provider value={{ setDataInCache, getDataFromCache }}>
      {children}
    </DataCacheContext.Provider>
  );
};

// Hook para usar o contexto
export const useDataCache = (x, y) => {
  return useContext(DataCacheContext);
};
