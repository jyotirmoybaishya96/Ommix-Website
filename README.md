<p align="center">
  <img src="https://placehold.co/128x128.png" alt="Omnix Logo" width="128" height="128" data-ai-hint="bot logo">
</p>

<h1 align="center">Omnix</h1>

<p align="center">The ultimate Discord bot designed to elevate your server management experience.</p>

<p align="center">
  <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer"><img alt="Next.js" src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white"></a>
  <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer"><img alt="React" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"></a>
  <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer"><img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"></a>
  <a href="https://firebase.google.com/docs/genkit" target="_blank" rel="noopener noreferrer"><img alt="Genkit" src="https://img.shields.io/badge/Genkit-4285F4?style=for-the-badge&logo=google&logoColor=white"></a>
</p>

<p align="center">
  <img src="https://placehold.co/800x250.png" alt="Omnix Application Banner" data-ai-hint="application banner">
</p>

Welcome to the official web interface for **Omnix**, a powerful, reliable, and easy-to-use platform for server moderation, community engagement, AI assistance, and extensive customization.

<img src="https://placehold.co/1200x600.png" alt="Omnix Hero Section" data-ai-hint="website homepage" />
*<p align="center">A preview of the Omnix homepage.</p>*

## ✨ Key Features

Omnix provides a comprehensive suite of features to cover all your server needs:

-   🛡️ **Advanced Protection:** Keep your server safe with a state-of-the-art Anti-Nuke system and a fully customizable Auto-Mod to filter spam, inappropriate content, and more.
-   🤖 **AI-Powered Assistance:** Leverage the power of GenAI with AI-driven support, FAQs, and intelligent conversation capabilities.
-   🎫 **Seamless Support:** A built-in ticketing system allows users to create private support channels for efficient issue resolution.
-   🎶 **High-Fidelity Music:** Enjoy lag-free music streaming from various sources with a feature-rich music player, complete with playlists, queues, and DJ roles.
-   🎉 **Community Engagement:** Boost server activity with easy-to-host giveaways, self-assignable reaction roles, and fun, interactive commands.
-   🎨 **Deep Customization:** Tailor the website's appearance to your liking with customizable themes, accent colors, font sizes, and dynamic background effects.

## 🚀 Tech Stack

The Omnix web interface is built with a modern, performant, and scalable technology stack:

-   **Framework:** [Next.js](https://nextjs.org/) (App Router)
-   **UI Library:** [React](https://reactjs.org/)
-   **Language:** [TypeScript](https://www.typescriptlang.org/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **Component Library:** [ShadCN UI](https://ui.shadcn.com/)
-   **Generative AI:** [Genkit for Firebase](https://firebase.google.com/docs/genkit)
-   **Animation:** [Framer Motion](https://www.framer.com/motion/)
-   **Internationalization:** [i18next](https://www.i18next.com/)

## ⚙️ Getting Started

Follow these steps to get the project up and running on your local machine for development and testing purposes.

### Prerequisites

You'll need the following software installed on your machine:

-   [Node.js](https://nodejs.org/en/) (v18 or newer recommended)
-   [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
-   [Git](https://git-scm.com/)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/omnix-web.git
    cd omnix-web
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    Create a `.env` file by copying the example file:
    ```bash
    cp .env.example .env
    ```
    Then, open the `.env` file and add your Google AI API key:
    ```env
    # The port for the development server
    PORT=9002

    # Your Google AI API Key for Genkit features
    GOOGLE_API_KEY=your_google_ai_api_key_here
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

The application should now be running at `http://localhost:9002` (or whichever port you specified in `.env`).

## 📜 Available Scripts

In the project directory, you can run:

-   `npm run dev`: Starts the development server with Turbopack.
-   `npm run build`: Builds the application for production.
-   `npm run start`: Starts the production server.
-   `npm run lint`: Runs the linter to check for code quality issues.
-   `npm run typecheck`: Runs the TypeScript compiler to check for type errors.

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

<p align="center">
  &copy; 2024 Omnix. All rights reserved.
</p>
