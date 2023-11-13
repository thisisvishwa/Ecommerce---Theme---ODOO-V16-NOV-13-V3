```javascript
// Importing necessary modules
import { handleError } from './error_handling.js';

// Function to render Image Gallery
function renderImageGallery(product) {
    let gallery = document.getElementById('image-gallery');
    product.images.forEach(image => {
        let img = document.createElement('img');
        img.src = image;
        img.onclick = function() {
            // Implement lightbox feature here
        };
        gallery.appendChild(img);
    });
}

// Function to render Specifications Tab
function renderSpecificationsTab(product) {
    let specsTab = document.getElementById('specifications-tab');
    product.specifications.forEach(spec => {
        let specItem = document.createElement('div');
        specItem.className = 'spec-item';
        specItem.innerHTML = `<h4>${spec.name}</h4><p>${spec.value}</p>`;
        specsTab.appendChild(specItem);
    });
}

// Function to render Reviews and Ratings
function renderReviewsRatings(product) {
    let reviewsSection = document.getElementById('reviews-ratings');
    product.reviews.forEach(review => {
        let reviewItem = document.createElement('div');
        reviewItem.className = 'review-item';
        reviewItem.innerHTML = `<h4>${review.user}</h4><p>${review.comment}</p><p>Rating: ${review.rating}</p>`;
        reviewsSection.appendChild(reviewItem);
    });
}

// Fetch product details from API
fetch('/api/product')
    .then(response => response.json())
    .then(product => {
        renderImageGallery(product);
        renderSpecificationsTab(product);
        renderReviewsRatings(product);
    })
    .catch(error => handleError(error));
```