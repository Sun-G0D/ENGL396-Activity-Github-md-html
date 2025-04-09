function copy_to_clipboard() {
    // Get the text field
    var copyText = 'evan.sun.ca@gmail.com';
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText);
  
    // Alert the copied text
    alert("email copied");
  }

