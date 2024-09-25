# Time Quote Extension

**Time Quote Extension** is a productivity-focused browser extension that displays the current time and a random motivational quote each time a new tab is opened. It also includes useful features like a water intake tracker, tab counter, and a stopwatch with microsecond precision, all designed to help users stay motivated and organized throughout their day.

## Features

### 1. **Current Time Display**
- Displays the current time in the center of the new tab with a stylish format.


### 2. **Motivational Quotes**
- A collection of 50+ motivational quotes that change randomly every time a new tab is opened, keeping you inspired throughout the day.

### 3. **Water Intake Tracker**
- Tracks how many glasses of water you've had in a day.
- Automatically resets at 5:30 AM daily to encourage healthy hydration habits.

### 4. **Tab Open Counter**
- Keeps track of how many tabs you've opened during the day.
- Also resets daily at 5:30 AM to help monitor your browsing habits.

### 5. **Stopwatch**
- A simple but effective stopwatch with microsecond precision.
- You can start, pause, and reset the stopwatch with easy controls.
- Stopwatch state (running/paused) and time are saved using `localStorage`, so you don't lose your progress even after closing the browser.

### 6. **To-Do List**
- A simple task manager to keep track of your to-do items.
- Add, edit, mark as complete, or delete tasks with intuitive buttons.
- Tasks are saved to `localStorage` so your list is preserved between sessions.
- The To-Do List can be opened by clicking a button on the main screen. It automatically closes when you switch tabs or press the `Escape` key.

## Installation

1. Clone the repository or download the ZIP file.
   ```
   git clone https://github.com/RaghavOG/time-quote-extension.git
   ```
2. Open your browser (Brave, Chrome, or any Chromium-based browser).
3. Navigate to `chrome://extensions/` in the browser address bar.
4. Enable **Developer mode** by toggling the switch in the top right.
5. Click on **Load unpacked** and select the folder where the extension is located.
6. The extension is now installed and will be active every time you open a new tab.

## How to Use

- **Current Time & Quotes**: Every time a new tab is opened, the time and a random motivational quote will be displayed.
- **Water Tracker**: Click the water icon to add a glass of water to your daily intake count.
- **Stopwatch**: Use the stopwatch to time your activities, with the option to pause or reset.
- **To-Do List**: Add your daily tasks by clicking the To-Do button. The list will automatically save your tasks until you complete or delete them.

## Technologies Used

- **HTML5**
- **CSS3**
- **JavaScript** (including `localStorage` for data persistence)

## Future Features

- **Custom Themes**: Add more theme options for user customization.
- **Reminders**: Allow users to set reminders for tasks and water intake.

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request with improvements or bug fixes.

