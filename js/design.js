// Listen for form submit to create canvas grid
$('#sizePicker').on('submit', (evt) => {
    // Prevent form submit from reloading the page
    evt.preventDefault();
    
    // Retrieving user input for grid size
    const gridHeight = $('#input_height').val();
    const gridWidth = $('#input_width').val();

    makeGrid(gridWidth, gridHeight);
});

// Listen for clicks in table cell to fill color
$('#pixel_canvas').on('click', 'td', function() {
    // Get selected color from picker
    const color = $('#colorPicker').val();

    // Apply color to clicked cell
    $(this).css('background-color', color);
});

// Function to create canvas grid with HTML table
// width and height need to be passed to the function
function makeGrid(width, height) {
    let html = '';
    
    for(let y = 0; y < height; y++) {
        html += '<tr>';
        for(let x = 0; x < width; x++) {
            html += '<td></td>';
        }
        html += '</tr>';
    }

    $('#pixel_canvas').html(html);
}
