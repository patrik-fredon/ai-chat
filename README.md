# AI Chat

Welcome to AI Chat—a neon-drenched, cyberpunk-inspired messaging experience that takes chatting to a whole new stratosphere! If you've ever wanted your conversations to glow brighter than a supernova while feeling like you're in a sci-fi thriller, you're in the right place.

*(Warning: May induce sudden desires to hack mainframes or don futuristic attire.)*

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Customization](#customization)
- [Troubleshooting](#troubleshooting)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Features

🌟 **Message Memory**: The AI remembers the last 5 messages for richer, more contextual conversations. No more goldfish-level memory lapses!

🎨 **Epic GUI Overhaul**:

- **Animated Cyberpunk Backgrounds**: Pulsating particles and animated backdrops that transport you to a futuristic metropolis.
- **Neon Glow Effects**: Text and buttons that shine brighter than your future.
- **Custom Cursors and Hover Animations**: Because every click should feel like magic.

💬 **Interactive Chat Bubbles**:
- Smooth animations using Framer Motion.
- Distinct styles for user and assistant messages with neon gradients.

🚀 **Responsive Design**: Looks impeccable on any device—from widescreen monitors to that old smartphone you keep in your drawer.

🎭 **Typing Indicators**: Know when the AI is crafting its next brilliant response.

🌗 **Dark and Light Modes**: Switch themes to match your mood (or the alignment of the stars).

## Getting Started

### Prerequisites

Make sure you have the following installed:
- Node.js (v14 or higher)
- npm (v6 or higher)
- A tolerance for neon colors (not medically required but highly recommended)

### Installation

1. **Clone the Repository**

   ```
   git clone https://github.com/yourusername/ai-chat.git
   ```

2. **Navigate to the Project Directory**

   ```
   cd ai-chat
   ```

3. **Install Dependencies**

   ```
   npm install
   ```
   This will install all necessary packages, including React, axios, Framer Motion, tsParticles, and more.

4. **Start the Development Server**

   ```
   npm start
   ```

5. **Open the App**

   Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to see the magic happen.

## Usage

### Select an AI Model

Choose from the dropdown menu of available models. If you're feeling nostalgic, stick with tinyllama-1.1b. We won't judge.

### Send a Message

Type your message into the input field at the bottom. Feeling adventurous? Press Enter or click the glowing SEND button.

### Experience the Glow

Watch as your messages and the AI's responses illuminate the screen with animated flair. Try not to get too mesmerized.

### Enjoy Interactivity

Hover over buttons and elements to see interactive animations. It's like the app knows you like attention.

## Customization

### Particle Background

Want to tweak the animated background? Modify the particle settings in the Particles component within `App.tsx`:

```
<Particles
  id="tsparticles"
  init={particlesInit}
  options={{
    // Customize particle options here
  }}
  className="absolute inset-0 z-0"
/>
```

### Themes and Styling

Customize colors, fonts, and more by modifying the Tailwind CSS configuration in `tailwind.config.js`:

```
module.exports = {
  theme: {
    extend: {
      colors: {
        neonPink: '#fe019a',
        neonBlue: '#00ffff',
        // Add your custom colors here
      },
      // ...other configurations
    },
  },
};
```

## Troubleshooting


### tsParticles Version Mismatch

If you encounter an error like:

```
The tsParticles version is different from the loaded plugins version. Engine version: X.X.X. Plugins version: Y.Y.Y.
```

**Solution**:

1. **Ensure All tsParticles Packages Are the Same Version**

   Install matching versions:

   ```

   npm install tsparticles@latest
   npm install react-tsparticles@latest
   ```

2. **Clean Install**

   Delete `node_modules` and lock files:

   ```
   rm -rf node_modules
   rm package-lock.json
   ```

   Then reinstall:

   ```
   npm install
   ```

### Other Issues

- **Blank Screen**: Check the console for errors and ensure all dependencies are installed.
- **Animations Not Working**: Make sure you have the latest versions of framer-motion and react-tsparticles.

## Future Enhancements

Just when you thought this app couldn't get any cooler, here's what's on the horizon:
- **Emojis and Reactions**: Because sometimes a 👍 says more than words.
- **Sound Effects**: Subtle audio cues for sending and receiving messages.
- **Multilingual Support**: Chat in Klingon? We're on it.
- **Message Encryption**: For those top-secret conversations about buying more neon lights.

## Contributing

We welcome contributions with open glowing arms! Here's how you can contribute:

1. **Fork the Repository**

   Click on the Fork button at the top right corner of the repository page.

2. **Clone Your Fork**

   ```
   git clone https://github.com/yourusername/ai-chat.git
   ```

3. **Create a New Branch**

   ```
   git checkout -b feature/your-feature-name
   ```

4. **Make Your Changes**

   Add those awesome features or fix pesky bugs.

5. **Commit Your Changes**

   ```
   git commit -m "Add your informative commit message here"
   ```

6. **Push to Your Fork**

   ```
   git push origin feature/your-feature-name
   ```

7. **Submit a Pull Request**

   Go to the original repository and open a Pull Request. We'll review it faster than you can say "neon nirvana."

## License

This project is licensed under the MIT License—because sharing is caring.

## Acknowledgments

- **React**: For providing the framework to build this futuristic app.
- **Framer Motion**: For making our animations smoother than a synthwave track.
- **tsParticles**: For the mesmerizing particle backgrounds.
- **Tailwind CSS**: For allowing us to style without breaking a sweat.
- **ClipLoader**: For giving users something cool to look at while they wait.
- **You**: Yes, you! For downloading, using, and hopefully contributing to this project.

No actual neon was harmed in the making of this app. Side effects may include uncontrollable appreciation for cyberpunk aesthetics and an urge to code late into the night.

Enjoy your journey through the neon-lit corridors of AI Chat!

For any questions or issues, feel free to open an issue or reach out directly. We're always here to help—unless we're busy basking in the glow of our own app, of course.
