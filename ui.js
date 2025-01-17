// ui.js
export function displayImages(images) {
    const galleryContainer = document.getElementById('gallery-container');
    galleryContainer.innerHTML = ''; // Clear existing content

    images.forEach(image => {
        const imageData = image.data[0];
        const imageLink = image.links[0].href;

        const imageItem = document.createElement('div');
        imageItem.className = 'gallery-item';
        imageItem.innerHTML = `
            <img src="${imageLink}" alt="${imageData.title}">
            <p>${imageData.title}</p>
        `;

        imageItem.addEventListener('click', () => displayImageInfo(imageData, imageLink));
        galleryContainer.appendChild(imageItem);
    });
}

export function displayImageInfo(imageData, imageLink) {
    const infoSection = document.getElementById('image-info');
    infoSection.style.display = 'block';
    infoSection.innerHTML = `
        <h2>${imageData.title}</h2>
        <p><strong>Date Created:</strong> ${imageData.date_created}</p>
        <p><strong>Description:</strong> ${imageData.description}</p>
        <img src="${imageLink}" alt="${imageData.title}">
    `;
}
