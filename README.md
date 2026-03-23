# Wind Tunnel Logbook 🪂

This project is the frontend for the **Wind Tunnel Logbook**, an application designed to track wind tunnel flight time, manage individual and shared sessions, and visualize progress.

## Features

- **Home Page:** A clean and modern design with light and dark mode support.
- **Google Authentication:** Integration of a secure login button.
- **Protected Dashboard (Work in Progress):** A control panel accessible only to authenticated users.
- **Protected Routes:** Navigation system that restricts access to certain areas based on authentication status.
- **Responsive Design:** Uses Chakra UI v3 and CSS Modules for a consistent experience.
- **Session Management (Work in Progress):** Track individual and shared wind tunnel sessions.

## Technologies Used

- **React 19** with **TypeScript**
- **Vite** as build tool
- **Chakra UI v3** for UI components
- **React Router DOM** for navigation
- **CSS Modules** for component-specific styles
- **SWR** for remote data state management
- **Biome** for linting and code formatting

## Environment Configuration

For local development, it is necessary to configure environment variables. Create a `.env.development` file in the project root with the following content:

```env
VITE_API_URL=https://substantial-rosalynd-blue-code-1a304522.koyeb.app
```

## Quick Start Guide

### Prerequisites

- [Node.js](https://nodejs.org/) (recommended version in `package.json`)
- [pnpm](https://pnpm.io/) (recommended package manager)

### Installation

```bash
pnpm install
```

### Development

To start the development server:

```bash
pnpm run dev
```

### Build

To generate the production version:

```bash
pnpm run build
```

### Other Scripts

- `pnpm run lint`: Runs the linter (Biome).
- `pnpm run test`: Runs unit tests (Vitest).
- `pnpm run format`: Automatically formats the code.
