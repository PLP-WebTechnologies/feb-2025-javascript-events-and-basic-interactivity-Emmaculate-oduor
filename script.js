// --- Event Handling --- //

const button = document.getElementById('magicButton');
button.addEventListener('click', () => {
  button.textContent = "You clicked me!";
  button.style.backgroundColor = "#4CAF50";
});

button.addEventListener('dblclick', () => {
  alert("Secret double-click action unlocked! 🕵️‍♂️");
});

document.addEventListener('keypress', (e) => {
  console.log(`Key pressed: ${e.key}`);
});


const galleryImages = document.querySelectorAll('#gallery img');
galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    img.style.border = "3px solid blue";
  });
});

// Tabs
const tabLinks = document.querySelectorAll('.tablink');
tabLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    const tabId = e.target.dataset.tab;
    document.querySelectorAll('.tabcontent').forEach(tab => tab.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
  });
});


const form = document.getElementById('myForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  if (username === "") {
    alert("Username is required");
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address");
    return;
  }

  if (password.length < 8) {
    alert("Password must be at least 8 characters long");
    return;
  }

  alert("Form submitted successfully! 🎉");
});


document.getElementById('password').addEventListener('input', (e) => {
  if (e.target.value.length < 8) {
    e.target.style.borderColor = "red";
  } else {
    e.target.style.borderColor = "green";
  }
});



  const secretArea = document.getElementById('secretArea');


  function triggerSecretAction() {
    alert('🎉 Secret Action Activated!');
   
  }

  secretArea.addEventListener('dblclick', triggerSecretAction);

 
  let pressTimer;
  
  secretArea.addEventListener('mousedown', (e) => {
    pressTimer = setTimeout(triggerSecretAction, 800);
  });

  secretArea.addEventListener('mouseup', (e) => {
    clearTimeout(pressTimer);
  });

  secretArea.addEventListener('mouseleave', (e) => {
    clearTimeout(pressTimer);
  });

  // For touch screens
  secretArea.addEventListener('touchstart', (e) => {
    pressTimer = setTimeout(triggerSecretAction, 800);
  });

  secretArea.addEventListener('touchend', (e) => {
    clearTimeout(pressTimer);
  });

