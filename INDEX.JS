function performSearch() {
    var searchTerm = document.getElementById("searchInput").value;
  
    // Check if the search term is not empty
    if (searchTerm.trim() !== "") {
      // Perform your search logic here
      alert("Search initiated for: " + searchTerm);
    } else {
      alert("Please enter a search term.");
    }
  }
  