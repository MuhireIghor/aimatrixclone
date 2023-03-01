import React,{useState,Children, createContext,useMemo} from 'react';

export const SearchContext = createContext({});

const SearchProvider = ({children}) => {
const [showSearch,setShowSearch] = useState(false);
  const openModal = ()=>{
setShowSearch(true);
  }
  const closeModal = ()=>{
    setShowSearch(false);
  }
  const value = useMemo(()=>({
    showSearch,openModal,closeModal
  }
  ),[showSearch])
  return (
<SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  )
}

export default SearchProvider;