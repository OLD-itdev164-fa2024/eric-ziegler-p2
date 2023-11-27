import React, { useState } from 'react';

export const theContext = React.createContext();

const Provider = props => {
    var [testField, setField] = useState(3);

    return (
        <theContext.Provider value={{
            testField,
            changeValue: (_data) => setField(testField + _data)
        }}>
            {props.children}
        </theContext.Provider>
    )
}

const ContextProvider = ({ element }) => (
    <Provider>
        {element}
    </Provider>
)

export default ContextProvider