import React from 'react';
const enabledFeaturePetText = (props) => <h3 {...props}>This Pet Response Is Set From A Flag</h3>;

const defaultPetText = (props) => <h1 {...props}>No Pets Found</h1>;

export function petTextBuilder(features, props) {
    if ( isPetTextEnabled(features)) {
        return createPetTextComponent(enabledFeaturePetText, props);
    }

    return createPetTextComponent(defaultPetText, props);
}

function createPetTextComponent(petProps) {
    return petProps();
}

export function petTextKey() {
    return "hwfeature:pettext";
}

export function isPetTextEnabled(features) {
    return features.indexOf(petTextKey()) >= 0;
}
