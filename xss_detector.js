document.getElementById('commentForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const input = document.getElementById('comment').value;

  const xssPatterns = ["<script>", "onerror=", "alert(", "javascript:"];
  let detected = false;

  xssPatterns.forEach(pattern => {
    if (input.toLowerCase().includes(pattern)) {
      detected = true;
    }
  });

  const output = document.getElementById('output');
  if (detected) {
    output.innerHTML = `<span style="color:red;">⚠️ XSS attempt detected!</span>`;
  } else {
    output.innerHTML = `You commented: ${input}`;
  }
});

