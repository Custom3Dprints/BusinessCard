const mainImage = document.getElementById('image');
const Instagram = document.getElementById('instagram');
const Website = document.getElementById('website');



function adjustPosition(elementid) {
    const containerWidth = mainImage.parentNode.clientWidth;
    const containerHeight = mainImage.parentNode.clientHeight;

    // Calculate the top position based on image and container height
    const topPosition = ((containerHeight - elementid.offsetHeight) / 2)+20;
    
    // Apply the top position to both links
    elementid.style.top = `${topPosition}px`;
    
    // Adjust font size based on container width
    const fontSize = containerWidth/18;
    elementid.style.fontSize = `${fontSize}px`;
}


// Call the function initially
adjustPosition(Website);
// Add event listener for window resize
window.addEventListener('resize', adjustPosition(Website));

// Call the function initially
adjustPosition(Instagram);
// Add event listener for window resize
window.addEventListener('resize', adjustPosition(Instagram));
