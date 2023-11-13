```javascript
// User Account JavaScript

// Dashboard Function
function renderDashboard() {
    // Fetch user data from server
    fetch('/user/data')
    .then(response => response.json())
    .then(data => {
        // Populate dashboard with user data
        document.querySelector('#dashboard').innerHTML = `
            <h2>Order History</h2>
            ${data.orderHistory.map(order => `<p>${order}</p>`).join('')}
            <h2>Wishlist</h2>
            ${data.wishlist.map(item => `<p>${item}</p>`).join('')}
            <h2>Account Settings</h2>
            <p>Username: ${data.username}</p>
            <p>Email: ${data.email}</p>
        `;
    })
    .catch(error => handleError(error));
}

// Gamification Function
function renderGamification() {
    // Fetch user loyalty points and badges from server
    fetch('/user/gamification')
    .then(response => response.json())
    .then(data => {
        // Populate gamification section with user data
        document.querySelector('#gamification').innerHTML = `
            <h2>Loyalty Points</h2>
            <p>${data.loyaltyPoints}</p>
            <h2>Badges</h2>
            ${data.badges.map(badge => `<p>${badge}</p>`).join('')}
        `;
    })
    .catch(error => handleError(error));
}

// Call Functions on Page Load
window.onload = function() {
    renderDashboard();
    renderGamification();
}
```