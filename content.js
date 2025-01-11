// Function to modify the DOM
function modifyDOM() {
  // Remove all divs with class starting with "access-expert-"
  const accessExpertDivs = document.querySelectorAll('div[class^="access-expert-"]');
  
  accessExpertDivs.forEach(div => {
    div.remove(); // Remove each matching div
  });

  // Remove all divs with class "access-expert-div-1"
  const specificDivs = document.querySelectorAll('div.access-expert-div-1');
  
  specificDivs.forEach(div => {
    div.remove(); // Remove each specific div
  });

  // Make all divs with itemprop="text" scrollable
  const textDivs = document.querySelectorAll('div[itemprop="text"]');
  
  textDivs.forEach(div => {
    // Set styles for scrollable content
    div.style.overflowY = 'auto'; // Enable vertical scrolling
    div.style.maxHeight = '100%'; // Set max height to fit parent container
    div.style.border = '1px solid rgb(204, 204, 204)'; // Optional: Add a border for visibility
    div.style.padding = '10px'; // Optional: Add padding for better appearance
  });

  // Adjust the parent container's height if necessary
  const answerContentContainers = document.querySelectorAll('.answer-content-container');
  
  answerContentContainers.forEach(container => {
    container.style.height = '290px'; // Ensure consistent height for parent containers
    container.style.overflow = 'hidden'; // Hide overflow for parent containers
  });
}

// Function to observe changes in the DOM
function observeDOMChanges() {
  const targetNode = document.body; // Observe changes in the body

  const config = {
    childList: true,
    subtree: true,
  };

  const callback = function(mutationsList) {
    for (const mutation of mutationsList) {
      if (mutation.type === 'childList') {
        // Check for new divs with class starting with "access-expert-"
        const newAccessExpertDivs = document.querySelectorAll('div[class^="access-expert-"]');
        newAccessExpertDivs.forEach(div => {
          div.remove(); // Remove them if they appear
        });

        // Check for new specific divs with class "access-expert-div-1"
        const newSpecificDivs = document.querySelectorAll('div.access-expert-div-1');
        newSpecificDivs.forEach(div => {
          div.remove(); // Remove them if they appear
        });

        // Reapply scroll logic to newly added text divs
        const newTextDivs = document.querySelectorAll('div[itemprop="text"]');
        newTextDivs.forEach(div => {
          div.style.overflowY = 'auto';
          div.style.maxHeight = '100%'; // Ensure it fits within parent container
          div.style.border = '1px solid rgb(204, 204, 204)';
          div.style.padding = '10px';
        });
      }
    }
  };

  const observer = new MutationObserver(callback);
  observer.observe(targetNode, config);
}

// Run the modifyDOM function when the content script is loaded
modifyDOM();
observeDOMChanges(); // Start observing DOM changes
