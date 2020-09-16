import React, {  useState, useContext, useEffect } from "react";
import { getFeatures } from './Feature';

const FeatureContext = React.createContext([null, null]);

const useFeatureData = () => {
    const contextState = useContext(FeatureContext);
    if (contextState === null) {
        throw new Error('useFeatureData must be used within a FeatureProvider tag');
    }

    return contextState;
}

const FeatureContextProvider = (props) => {
    const [feature, setFeature] = useState([]);

    useEffect(()=>{
        getFeatures().then(setFeature);
    }, []);

    function refreshFeature() {
        getFeatures().then(setFeature);
    }

    return (
        <FeatureContext.Provider value={[feature, refreshFeature]}>
            {props.children}
        </FeatureContext.Provider>
    );
};




export {FeatureContextProvider, useFeatureData};
