import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
    
    let store;
    if (window.currentPlayer) {
        const { currentPlayer } = window;
        const { id } = currentPlayer;
        const preloadedState = {
            entities: {
                player: currentPlayer
            },
            session: { currentPlayer: currentPlayer }
        };

        store = configureStore(preloadedState);
        delete window.currentPlayer;
    } else {
        store = configureStore();
    }

    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store}/>, root)
});