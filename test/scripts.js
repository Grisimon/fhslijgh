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
