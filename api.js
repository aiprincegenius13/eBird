// api.js
const NASA_IMAGES_API_URL = 'https://images-api.nasa.gov';

export async function fetchImages(searchQuery) {
    try {
        const response = await fetch(`${NASA_IMAGES_API_URL}/search?q=${searchQuery}&media_type=image`);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        return data.collection.items;
    } catch (error) {
        console.error('Error fetching images:', error);
        throw error;
    }
}

