    // Function to display the current time
    function updateTime() {
        const timeElement = document.getElementById("time");
        const now = new Date();
        let formattedTime = now.toLocaleTimeString();
        
        // Separate AM/PM and reduce its font size
        formattedTime = formattedTime.replace(/(AM|PM)/, '<span>$1</span>');
        timeElement.innerHTML = formattedTime;
    }
    function updateDate() {
        const dateElement = document.getElementById("date");
        const now = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        dateElement.textContent = now.toLocaleDateString(undefined, options);
    }

    // Array of motivational quotes
    const quotes = [
        "The only way to do great work is to love what you do. – Steve Jobs",
        "Success is not the key to happiness. Happiness is the key to success. – Albert Schweitzer",
        "Don't watch the clock; do what it does. Keep going. – Sam Levenson",
        "The best time to plant a tree was 20 years ago. The second best time is now. – Chinese Proverb",
        "Your time is limited, don't waste it living someone else’s life. – Steve Jobs"
    ];

    // Function to display a random quote
    function displayRandomQuote() {
        const quoteElement = document.getElementById("quote");
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteElement.textContent = quotes[randomIndex];
    }

    // Update time every second
    setInterval(() => {
        updateDate();
        updateTime();
    }, 1000);

    // Display initial time and random quote
    updateTime();
    updateDate();
    displayRandomQuote();

    // Water Intake Counter with LocalStorage and Daily Reset at 5:30 AM
    let waterCount = parseInt(localStorage.getItem('waterCount')) || 0;
    const lastReset = localStorage.getItem('lastReset');

    // Check if it's past 5:30 AM and reset water count if date has changed
    const now = new Date();
    const resetTime = new Date();
    resetTime.setHours(5, 30, 0, 0);  // Set time to 5:30 AM

    if (lastReset !== now.toDateString() && now >= resetTime) {
        waterCount = 0;
        localStorage.setItem('waterCount', waterCount);
        localStorage.setItem('lastReset', now.toDateString());
    }

    document.getElementById("water-count").textContent = waterCount;

    document.getElementById("add-water").addEventListener("click", function() {
        waterCount++;
        document.getElementById("water-count").textContent = waterCount;
        localStorage.setItem('waterCount', waterCount); 
    });

    // Stopwatch with Microseconds, Pause Option, and LocalStorage
    let stopwatchTime = parseFloat(localStorage.getItem('stopwatchTime')) || 0;  // Load stored stopwatch time or start at 0
    let stopwatchRunning = localStorage.getItem('stopwatchRunning') === 'true';
    let stopwatchInterval;
    let paused = localStorage.getItem('paused') === 'true';

    document.getElementById("stopwatch-time").textContent = formatTime(stopwatchTime);

    if (stopwatchRunning && !paused) {
        startStopwatch();
    }

    document.getElementById("start-stopwatch").addEventListener("click", function() {
        if (!stopwatchRunning) {
            startStopwatch();
        }
    });

    document.getElementById("pause-stopwatch").addEventListener("click", function() {
        if (stopwatchRunning) {
            clearInterval(stopwatchInterval);
            paused = true;
            stopwatchRunning = false;
            localStorage.setItem('paused', true);
            localStorage.setItem('stopwatchRunning', false);
        }
    });

    document.getElementById("reset-stopwatch").addEventListener("click", function() {
        clearInterval(stopwatchInterval);
        stopwatchRunning = false;
        paused = false;
        stopwatchTime = 0;
        localStorage.setItem('paused', false);
        localStorage.setItem('stopwatchRunning', false);
        localStorage.setItem('stopwatchTime', 0);
        document.getElementById("stopwatch-time").textContent = formatTime(0);
    });

    function startStopwatch() {
        stopwatchRunning = true;
        paused = false;
        localStorage.setItem('paused', false);
        localStorage.setItem('stopwatchRunning', true);
        const startTime = Date.now() - stopwatchTime * 1000;
        stopwatchInterval = setInterval(function() {
            stopwatchTime = (Date.now() - startTime) / 1000;
            document.getElementById("stopwatch-time").textContent = formatTime(stopwatchTime);
            localStorage.setItem('stopwatchTime', stopwatchTime);  // Save stopwatch time to localStorage
        }, 10);
    }

    function formatTime(seconds) {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = Math.floor(seconds % 60);
        const millis = Math.floor((seconds % 1) * 100);  // Microseconds (hundredths of a second)
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}.${millis.toString().padStart(2, '0')}`;
    }


    // ===================================================================


    // ===========================
    // async function checkInternetSpeed() {
    //     const speedElement = document.getElementById("internet-speed");
    //     speedElement.innerHTML = '<p>Checking speed...</p>';

    //     // Get download speed
    //     const downloadSpeed = await fetch('https://api.fast.com/netflix/speedtest')
    //         .then(response => response.json())
    //         .then(data => (data.speeds.download / 1000000).toFixed(2) + ' Mbps') // Convert to Mbps

    //     // // Get upload speed (using a different method or API as Fast.com focuses on download speed)
    //     // const uploadSpeed = await fetch('https://api.youruploadservice.com/upload') // Replace with actual upload service
    //     //     .then(response => response.json())
    //     //     .then(data => (data.speed / 1000000).toFixed(2) + ' Mbps'); // Convert to Mbps

    //     // Update the DOM with results
    //     document.getElementById("download-speed").textContent = 'Download: ' + downloadSpeed;
    //     document.getElementById("upload-speed").textContent = 'Upload: ' + uploadSpeed;
    // }

    // // Button to trigger speed test
    // document.getElementById("check-speed").addEventListener("click", checkInternetSpeed);


    // 