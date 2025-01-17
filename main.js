// main.js
import { fetchImages } from './api.js';
import { displayImages } from './ui.js';

document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.getElementById('search-form');

    searchForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const searchQuery = document.getElementById('search-query').value;

        try {
            const images = await fetchImages(searchQuery);
            displayImages(images);
        } catch (error) {
            console.error('Error handling image search:', error);
        }
    });
});
