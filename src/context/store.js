import React, { useContext, useState } from 'react'

export const Store = React.createContext();

export const ContextProvider = ({children}) => {
  const [loading, setLoading] = useState(false);
  const [totalPage, setTotalPage] = useState(1);

  const value = { 
    loading, setLoading,
    totalPage, setTotalPage
  };
  
  return(
    <Store.Provider value={value}>
      {children}
    </Store.Provider>
  )
}

export const useMyContext = () => useContext(Store);