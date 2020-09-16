import {getAllFeatureFlags } from './FeatureApi';

const localFlagPrefix = "hwfeature:";

const isActiveFeature = feature => feature.IsActive === true || feature.IsActive === "true" ;

// Returns collection of all feature flags currently enabled
export async function getFeatures() {
    // Get all local storage flags
    let enabledFeatures = [];

    for (let i = 0; i <= localStorage.length - 1; i++) {
        let key = localStorage.key(i);
        if (key.indexOf(localFlagPrefix) >= 0 && localStorage.getItem(key) === "true") {
            enabledFeatures.push(key);
        }
    }  

    let res =  await getAllFeatureFlags();


    for (let i = 0; i <= res.data.value.length - 1; i++) {
        let val = res.data.value[i];
        if (isActiveFeature(val)) {
            enabledFeatures.push(val.Feature);
        }
    }
        
    return enabledFeatures;
}
