function countWords() {
    let textInput = document.getElementById("textInput").value;
    let words = textInput.split(/\s+/).filter(word => word !== "");
    let wordCount = words.length;
    document.getElementById("wordCount").textContent = `Word count: ${wordCount}`;
  }
  