```javascript
// AJAX-based Error Handling
$(document).ajaxError(function(event, request, settings) {
    handleError(request.status, request.responseText);
});

function handleError(status, message) {
    switch(status) {
        case 404:
            showCustomErrorPage('404', 'Page Not Found', 'The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.');
            break;
        case 500:
            showCustomErrorPage('500', 'Internal Server Error', 'The server encountered an internal error or misconfiguration and was unable to complete your request.');
            break;
        default:
            showNotification('Error', message);
    }
}

function showCustomErrorPage(code, title, message) {
    // Assuming error pages are static HTML files in the 'errors' directory
    window.location.href = '/errors/' + code + '.html';
}

function showNotification(title, message) {
    // Assuming a notification system is in place
    Notification.show({
        title: title,
        message: message,
        type: 'error'
    });
}
```