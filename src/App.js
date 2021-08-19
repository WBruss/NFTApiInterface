import './App.css';
import 'antd/dist/antd.css';

// Local Imports
import CollectionsPage from "./components/collections/collectionsPage";
import React, { useState } from "react";

export const AppContext = React.createContext();

function App() {

    const [ appState, setAppState ] = useState({
        collectionName: '',
        assets: [],
        selectedAssets: [],
        bids: []
    });

  return (
    <div className="App">
        <AppContext.Provider value={{ appState, setAppState}}>
            <CollectionsPage/>

        </AppContext.Provider>

    </div>
  );
}

export default App;
