// Function to display the current time
function updateTime() {
    const timeElement = document.getElementById("time");
    const now = new Date();
    let formattedTime = now.toLocaleTimeString();
  
    // Separate AM/PM and reduce its font size
    formattedTime = formattedTime.replace(/(AM|PM)/, "<span>$1</span>");
    timeElement.innerHTML = formattedTime;
  }
  
  // Function to display the current date
  function updateDate() {
    const dateElement = document.getElementById("date");
    const now = new Date();
    const options = { year: "numeric", month: "long", day: "numeric" };
    dateElement.textContent = now.toLocaleDateString(undefined, options);
  }
  
  // Array of motivational quotes
  const quotes = [
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Success is not the key to happiness. Happiness is the key to success. – Albert Schweitzer",
    "Don't watch the clock; do what it does. Keep going. – Sam Levenson",
    "The best time to plant a tree was 20 years ago. The second best time is now. – Chinese Proverb",
    "Your time is limited, don't waste it living someone else’s life. – Steve Jobs",
    "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
    "It does not matter how slowly you go as long as you do not stop. – Confucius",
    "You are never too old to set another goal or to dream a new dream. – C.S. Lewis",
    "Believe you can and you're halfway there. – Theodore Roosevelt",
    "Act as if what you do makes a difference. It does. – William James",
    "Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau",
    "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart. – Roy T. Bennett",
    "Opportunities don't happen. You create them. – Chris Grosser",
    "The only limit to our realization of tomorrow will be our doubts of today. – Franklin D. Roosevelt",
    "Hardships often prepare ordinary people for an extraordinary destiny. – C.S. Lewis",
    "The secret of getting ahead is getting started. – Mark Twain",
    "What you get by achieving your goals is not as important as what you become by achieving your goals. – Zig Ziglar",
    "You miss 100% of the shots you don't take. – Wayne Gretzky",
    "Whether you think you can or you think you can't, you're right. – Henry Ford",
    "The best way to predict the future is to invent it. – Alan Kay",
    "Don't wait. The time will never be just right. – Napoleon Hill",
    "If you want to achieve greatness stop asking for permission. – Anonymous",
    "The way to get started is to quit talking and begin doing. – Walt Disney",
    "The only place where success comes before work is in the dictionary. – Vidal Sassoon",
    "Success is not in what you have, but who you are. – Bo Bennett",
    "The only person you are destined to become is the person you decide to be. – Ralph Waldo Emerson",
    "Keep your face always toward the sunshine—and shadows will fall behind you. – Walt Whitman",
    "You must be the change you wish to see in the world. – Mahatma Gandhi",
    "The harder you work for something, the greater you’ll feel when you achieve it. – Anonymous",
    "Dream bigger. Do bigger. – Anonymous",
    "Your limitation—it's only your imagination. – Anonymous",
    "Push yourself, because no one else is going to do it for you. – Anonymous",
    "Great things never come from comfort zones. – Anonymous",
    "Dream it. Wish it. Do it. – Anonymous",
    "Success doesn’t just find you. You have to go out and get it. – Anonymous",
    "The harder you work, the luckier you get. – Gary Player",
    "Don’t stop when you’re tired. Stop when you’re done. – Anonymous",
    "Wake up with determination. Go to bed with satisfaction. – Anonymous",
    "Do something today that your future self will thank you for. – Anonymous",
    "Little things make big days. – Anonymous",
    "It’s going to be hard, but hard does not mean impossible. – Anonymous",
    "Don’t wait for opportunity. Create it. – George Bernard Shaw",
    "Sometimes we’re tested not to show our weaknesses, but to discover our strengths. – Anonymous",
    "The key to success is to focus on goals, not obstacles. – Anonymous",
    "Dream it. Believe it. Build it. – Anonymous",
    "Success is what happens after you have survived all your mistakes. – Anora Lee",
    "Believe in yourself so strongly that the world can't help but believe in you too. – Anonymous",
];

// document.getElementById("todo-button").addEventListener("click", function () {
//     window.open("todo.html", "To-Do List", "width=400,height=600");
// });

  
  // Function to display a random quote
  function displayRandomQuote() {
    const quoteElement = document.getElementById("quote");
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
  }
  
  // Update time and date every second
  setInterval(() => {
    updateDate();
    updateTime();
  }, 1000);
  
  // Display initial time, date, and random quote
  updateTime();
  updateDate();
  displayRandomQuote();
  
  // Water Intake Counter with LocalStorage and Daily Reset at 5:30 AM
  let waterCount = parseInt(localStorage.getItem("waterCount")) || 0;
  const lastReset = localStorage.getItem("lastReset");
  
  // Check if it's past 5:30 AM and reset water count if date has changed
  const now = new Date();
  const resetTime = new Date();
  resetTime.setHours(5, 30, 0, 0); // Set time to 5:30 AM
  const today = now.toDateString();
  
  if (lastReset !== today && now >= resetTime) {
    waterCount = 0; // Reset water count
    localStorage.setItem("waterCount", waterCount);
    localStorage.setItem("lastReset", today); // Update last reset date
  }
  
  document.getElementById("water-count").textContent = waterCount;
  
  document.getElementById("add-water").addEventListener("click", function () {
    waterCount++;
    document.getElementById("water-count").textContent = waterCount;
    localStorage.setItem("waterCount", waterCount);
  });
  
  // Tab Open Counter with Daily Reset at 5:30 AM
  let tabCount = parseInt(localStorage.getItem("tabCount")) || 0; // Retrieve the count or initialize to 0
  const lastTabReset = localStorage.getItem("lastTabReset"); // Get the last reset date
  
  // Check if it's past 5:30 AM and reset tab count if date has changed
  if (lastTabReset !== today && now >= resetTime) {
    tabCount = 0; // Reset count for a new day
    localStorage.setItem("tabCount", tabCount); // Update count in localStorage
    localStorage.setItem("lastTabReset", today); // Update last reset date
  }
  
  // Increment tab count
  tabCount++;
  localStorage.setItem("tabCount", tabCount);
  document.getElementById("tab-count").textContent = `Tabs opened today: ${tabCount}`;
  
  // Stopwatch with Microseconds, Pause Option, and LocalStorage
  let stopwatchTime = parseFloat(localStorage.getItem("stopwatchTime")) || 0; // Load stored stopwatch time or start at 0
  let stopwatchRunning = localStorage.getItem("stopwatchRunning") === "true";
  let stopwatchInterval;
  let paused = localStorage.getItem("paused") === "true";
  
  document.getElementById("stopwatch-time").textContent = formatTime(stopwatchTime);
  
  if (stopwatchRunning && !paused) {
    startStopwatch();
  }
  
  document.getElementById("start-stopwatch").addEventListener("click", function () {
    if (!stopwatchRunning) {
      startStopwatch();
    }
  });
  
  document.getElementById("pause-stopwatch").addEventListener("click", function () {
    if (stopwatchRunning) {
      clearInterval(stopwatchInterval);
      paused = true;
      stopwatchRunning = false;
      localStorage.setItem("paused", true);
      localStorage.setItem("stopwatchRunning", false);
    }
  });
  
  document.getElementById("reset-stopwatch").addEventListener("click", function () {
    clearInterval(stopwatchInterval);
    stopwatchRunning = false;
    paused = false;
    stopwatchTime = 0;
    localStorage.setItem("paused", false);
    localStorage.setItem("stopwatchRunning", false);
    localStorage.setItem("stopwatchTime", 0);
    document.getElementById("stopwatch-time").textContent = formatTime(0);
  });
  
  function startStopwatch() {
    stopwatchRunning = true;
    paused = false;
    localStorage.setItem("paused", false);
    localStorage.setItem("stopwatchRunning", true);
    const startTime = Date.now() - stopwatchTime * 1000;
    stopwatchInterval = setInterval(function () {
      stopwatchTime = (Date.now() - startTime) / 1000;
      document.getElementById("stopwatch-time").textContent = formatTime(stopwatchTime);
      localStorage.setItem("stopwatchTime", stopwatchTime); // Save stopwatch time to localStorage
    }, 10);
  }
  
  function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
    const millis = Math.floor((seconds % 1) * 100); // Microseconds (hundredths of a second)
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}.${millis
      .toString()
      .padStart(2, "0")}`;
  }
  
  // Uncomment to enable internet speed check functionality
  // async function checkInternetSpeed() {
  //     const speedElement = document.getElementById("internet-speed");
  //     speedElement.innerHTML = '<p>Checking speed...</p>';
  // 
  //     // Get download speed
  //     const downloadSpeed = await fetch('https://api.fast.com/netflix/speedtest')
  //         .then(response => response.json())
  //         .then(data => (data.speeds.download / 1000000).toFixed(2) + ' Mbps'); // Convert to Mbps
  // 
  //     // Update the DOM with results
  //     document.getElementById("download-speed").textContent = 'Download: ' + downloadSpeed;
  // }
  // 
  // // Button to trigger speed test
  // document.getElementById("check-speed").addEventListener("click", checkInternetSpeed);
  
  let todoWindow = null;

  // Function to open the To-Do window
  document.getElementById("todo-button").addEventListener("click", function () {
      const screenWidth = window.screen.width;
      const screenHeight = window.screen.height;
      const width = 600;
      const height = 600;
  
      const left = (screenWidth - width) / 2;
      const top = ((screenHeight - height) / 2) - 50;
  
      todoWindow = window.open("todo.html", "To-Do List", `width=${width},height=${height},left=${left},top=${top}`);
  });
  
  // Close To-Do window on Escape key press
//   document.addEventListener("keydown", function (e) {
//       if (e.key === "Escape" && todoWindow) {
//           todoWindow.close(); // Close the new window
//           todoWindow = null;  // Reset the reference after closing
//       }
//   });
  
  // Close To-Do window when the main window loses focus (tab switch)
//   window.addEventListener("blur", function () {
//       if (todoWindow) {
//           todoWindow.close(); // Close the new window
//           todoWindow = null;  // Reset the reference after closing
//       }
//   });
  