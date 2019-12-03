import React from 'react';

let pageNumber = "1"
const defaultState = {
    pageNumber: pageNumber,
    setPageNumber: () => {}
}

export const pageNumberContext = React.createContext(defaultState)