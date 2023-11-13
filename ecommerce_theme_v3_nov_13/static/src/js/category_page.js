```javascript
// Importing required dependencies
import $ from 'jquery';
import 'jquery-ui/ui/widgets/accordion';
import 'jquery-ui/ui/widgets/slider';

// Function to render advanced filters
function renderAdvancedFilters() {
    // AJAX call to get filter data
    $.ajax({
        url: '/api/filters',
        type: 'GET',
        success: function(data) {
            // Code to render filters using the data received
        },
        error: function(error) {
            console.error('Error:', error);
        }
    });
}

// Function to render sorting options
function renderSortingOptions() {
    // Code to render sorting options
}

// Function to handle filter changes
function handleFilterChange() {
    // AJAX call to get products based on new filters
    $.ajax({
        url: '/api/products',
        type: 'GET',
        data: {
            // Data from filters
        },
        success: function(data) {
            // Code to update product list using the data received
        },
        error: function(error) {
            console.error('Error:', error);
        }
    });
}

// Function to handle sort option changes
function handleSortChange() {
    // Code to sort product list based on selected option
}

// Event listeners for filter and sort option changes
$('#advanced-filters').on('change', handleFilterChange);
$('#sorting-options').on('change', handleSortChange);

// Initial render of filters and sorting options
renderAdvancedFilters();
renderSortingOptions();
```