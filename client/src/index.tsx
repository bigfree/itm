import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App.tsx';
import { apolloClient } from '@configs/apollo-client.config.ts';
import { ApolloProvider } from '@apollo/client';

const rootEl = document.getElementById('root');
if (rootEl) {
    const root = ReactDOM.createRoot(rootEl);
    root.render(
        <React.StrictMode>
            <ApolloProvider client={apolloClient}>
                <App />
            </ApolloProvider>
        </React.StrictMode>,
    );
}
