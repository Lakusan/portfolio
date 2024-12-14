import { Children, createContext, useState} from 'react';

const AppContext = createContext();

const AppProvider = ({children}) => {
    const [ state, setState ] = useState(undefined);
    const value = { state, setState };

    return(
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

export { AppContext };
export default AppProvider;