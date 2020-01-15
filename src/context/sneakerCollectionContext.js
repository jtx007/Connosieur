import React from 'react';

let ownedCollection = []
let wantedCollection = []


const defaultState = {
    ownedCollection,
    wantedCollection,
    setOwned: () => {},
    setWanted: () => {}
}

export const sneakerCollectionContext = React.createContext(defaultState)