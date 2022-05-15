import React, {useContext, createContext, useReducer} from 'react'

export const CreatedContext = createContext()

export const DataLayer = ({children, initialState, reducer})=>(
    <CreatedContext.Provider value = {useReducer(reducer, initialState)}>
        {children}
    </CreatedContext.Provider>
)

export const DataBucket = () => useContext(CreatedContext)