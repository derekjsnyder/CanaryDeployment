export function themeKey() {
    return "dark";
}

export function isThemeEnabled(features) {
    return features.indexOf(themeKey()) >= 0;
}

function createTheme(themeProps) {
    return themeProps();
}

function darkThemeClassName() {
    return "dark";
}

function defaultClassName() {
    return "";
}


export function themeBuilder(features){
    if ( features && isThemeEnabled(features)) {
        return createTheme(darkThemeClassName);
    }

    return createTheme(defaultClassName);
}

export function toggleThemeClass(featureToggle, isTrue, isFalse) {
    if (featureToggle == darkThemeClassName()) {
        return isTrue;
    }

    return isFalse;
}

export function toggleThemeClassWithFeatures(features, isTrue, isFalse) {
    return toggleThemeClass(themeBuilder(features), isTrue, isFalse);
}