if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
      (position) => {
          console.log("Location accessed:", position);
      },
      (error) => {
          console.error("Error accessing location:", error);
      }
  );
} else {
  console.log("Geolocation is not supported by this browser.");
}
if ("Notification" in window) {
  Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
          new Notification("Permission granted!", { body: "You will now receive notifications." });
      }
  });
}
navigator.mediaDevices.getUserMedia({ video: true, audio: true })
    .then((stream) => {
        console.log("Access granted to camera and microphone.");
        // Attach the stream to a video element if you want to show the camera feed
        const video = document.querySelector('video');
        if (video) {
            video.srcObject = stream;
        }
    })
    .catch((error) => {
        console.error("Error accessing media devices:", error);
    });
    navigator.permissions.query({ name: "clipboard-read" }).then((result) => {
      if (result.state === "granted" || result.state === "prompt") {
          console.log("Permission to read from the clipboard granted.");
          navigator.clipboard.readText().then((text) => {
              console.log("Clipboard text:", text);
          });
      }
  });
  
  navigator.permissions.query({ name: "clipboard-write" }).then((result) => {
      if (result.state === "granted" || result.state === "prompt") {
          console.log("Permission to write to the clipboard granted.");
          navigator.clipboard.writeText("Hello, Clipboard!").then(() => {
              console.log("Text written to clipboard.");
          });
      }
  });
// Request permission for notifications
function requestNotificationPermission() {
  if ("Notification" in window) {
      Notification.requestPermission().then((permission) => {
          if (permission === "granted") {
              console.log("Notification permission granted.");
          } else {
              console.log("Notification permission denied.");
          }
      });
  } else {
      console.log("This browser does not support notifications.");
  }
}
function showNotification() {
  if (Notification.permission === "granted") {
      new Notification("Hello!", {
          body: "This is a notification from your website.",
          icon: "path/to/icon.png" // Optional: Set an icon for the notification
      });
  }
}
const gridElem = document.querySelector('#grid');
const gridElemBg = document.querySelector('#grid-bg');
const gridElemContent = document.querySelector('#grid-content');
const gridFontSize = parseInt(getComputedStyle(gridElem).fontSize, 10);

var colCount = 0;
var rowCount = 0;
var pixelCount = 0;
var pixels = [];

const charRangeStart = 33;
const charRangeEnd = 126;
const charRangeMax = charRangeEnd - charRangeStart;

function updateSize() {
    gridElemContent.innerHTML = "";
    gridElemBg.style.backgroundSize = "";
    gridElemBg.style.backgroundImage = "";
    
    colCount = Math.floor(gridElem.clientWidth / gridFontSize);
    rowCount = Math.floor(gridElem.clientHeight / gridFontSize);
    pixelCount = colCount * rowCount;
    
    pixels = Array(pixelCount).fill(String.fromCharCode(charRangeStart));
    
    let bgSize = [];
    for(let row = 0; row < rowCount; row++) {
        bgSize.push(`${colCount * gridFontSize}px ${row * gridFontSize}px`);
    }
    gridElemBg.style.backgroundSize = bgSize.join(',');
    
    render();
}

function generate(ticks) {
    let cx = Math.floor(colCount / 2);
    let cy = Math.floor(rowCount / 2);

    for(let i = 0; i < pixelCount; i++) {
        let x = i % colCount;
        let y = Math.floor(i / colCount);
        
        let t = 100 + (ticks * 0.001);
        let v = ((Math.cos((x - cx) / 8.0) + Math.sin((y - cy) / 8.0) + t) * 16);
        
        let charVal = v % charRangeMax;
        
        pixels[i] = String.fromCharCode(charRangeStart + (charVal % charRangeMax));
    }
}

function generateColors() {
    let bgImage = [];
    let bgImageParts = [];
    let percent = 0;
    
    const percentInterval = 100 / colCount;

    for(let i = 0; i < pixelCount; i++) {
        let pixel = pixels[i];

        let hslAngle = ((pixel.charCodeAt(0) - charRangeStart) / charRangeMax) * 360;
        let pixelColor = `hsl(${hslAngle}, 70%, 50%)`;

        let bgImagePart = `${pixelColor} ${percent}%`;
        percent += percentInterval;
        bgImagePart += `, ${pixelColor} ${percent}%`;
        
        bgImageParts.push(bgImagePart);
        
        if((i + 1) % colCount === 0) {
            bgImage.push(`linear-gradient(to right, ${bgImageParts.join(', ')})`);
            
            percent = 0;
            bgImageParts = [];
        }
    }
    
    gridElemBg.style.backgroundImage = bgImage.join(',');
}

function render(ticks = 0) {
    generate(ticks);
    generateColors();
    
    let content = '';

    //content += colCount + " x " + rowCount + " = " + pixelCount + "\n";
    
    content = pixels.reduce( (prev, curr, idx) => {        
        return prev + curr + ((idx + 1) % colCount === 0 ? '\n' : '');
    });
    
    gridElemContent.innerHTML = content;
    
    requestAnimationFrame(render);
}

window.addEventListener('resize', updateSize);

updateSize();