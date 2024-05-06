import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import global_amh from "./translations/amh/global.json"
import global_en from "./translations/en/global.json"
import global_oro from "./translations/oro/global.json"
import i18next from "i18next"
import { I18nextProvider } from "react-i18next"; 

i18next.init({
    interpolation: {escapeValue: false},
    lng: localStorage.getItem('language') || 'en',

    resources:{
        en:{
            global:global_en
        },
        amh:{
            global:global_amh
        },
        oro:{
            global:global_oro
        }
    }
})
const container = document.getElementById('root');
const root = createRoot(container);
const persistor= persistStore(store);

root.render(
<Provider store={store}>
<PersistGate persistor={persistor}>
    <I18nextProvider i18n={i18next}>
    <App />
    </I18nextProvider>


</PersistGate>
</Provider>
 
);

