# Sports App Idea Generator & Community Hub

## Project Overview

The Sports App Idea Generator & Community Hub is a dual-purpose platform:

*   **Idea Generation Tool:** For aspiring sports-tech developers, startups, and entrepreneurs to discover, save, and iterate on app ideas.
*   **Community Marketplace:** Focused exclusively on racket sports, allowing users to buy and sell equipment, apparel, and gear.

**Target Audience:** Sports enthusiasts, club owners, solo developers, small sports brands.

This project aims to create a unique platform for sports enthusiasts, combining a dynamic "Sports App Idea Generator" with an engaging "Community Hub." It's designed to inspire users to discover and share innovative sports app ideas while fostering a vibrant community.

## Core Features

### 🧠 Idea Generator

*   **Prompt Input:** Text area to enter a short user prompt or goal.
*   **Idea Cards:** Displays title and description of generated ideas.
*   **Save to Favorites:** Users can store interesting ideas in a personal library.
*   **Tabs Interface:** Switch between 'Generated Ideas' and 'Saved Ideas'.
*   **(Planned) AI-powered generation:** using OpenAI API.

### 🛍️ Community Marketplace

*   **List Products:** Users can post items for sale under categories like rackets, shoes, apparel.
*   **Buy/Sell Interface:** Search, browse, and interact with sellers/buyers.
*   **Category Filter:** Strictly for racket sports (Badminton, Tennis, Pickleball, Squash, Table Tennis).
*   **(Optional Future) Chat support, reviews, and favorite products.**

## UI/UX Design

### Functionalities

*   **Generate ideas:** The user can enter a prompt and click a button to generate new ideas.
*   **Show ideas:** The ideas are shown using cards.
*   **Save ideas:** The user can save ideas and store them in the local storage.
*   **Show saved ideas**: The user can see the saved ideas in a different tab.
* **Loading Spinner:** A loading spinner appears while the ideas are being generated.

### Styling

🎨 Color Theme

*   **Login Page:** Light green background (`#ccffcc`)
*   **Dashboard:** Gradient - Blue → Green → Red (represents trust, action, energy)
*   **Buttons:** Square shaped, prominent with clear icons.

🧭 Navigation

*   Tab-based layout for sections
*   Idea cards use consistent spacing and shadows
*   Marketplace grid for clean product viewing

## Technology Stack

*   **Frontend:** React + Next.js
*   **Styling:** TailwindCSS
*   **State Management:** React Context or Redux (depending on complexity)
*   **Backend (Planned):** Firebase (Auth + Firestore)
*   **AI Integration (Planned):** OpenAI API for dynamic idea generation

### Style details

*   **Hover effect:** The idea cards now have a hover effect. When the mouse is over a card, it elevates a little and shows a shadow.
*   **Tab transition:** When switching between tabs, there is a transition effect that fades in and out the content.

## Save ideas

We have added the save idea functionality. Add a save button to every idea card that allows the user to save the idea. The saved ideas are saved in the local storage and when the page is reloaded the ideas remain saved. The saved ideas are showed in the saved ideas tab.
  
## Progress

We have created a base structure with the `Layout`, `IdeaCard`, `IdeaForm` and `useIdeas` files. The `App` file is also created to integrate all of these components. The user can enter a prompt in the `IdeaForm` component, press the button to generate ideas and they will be displayed in cards using the `IdeaCard` component. All the generated ideas are being managed by the `useIdeas` hook that shares the data between the `IdeaForm` and `IdeaCard` components. The layout component has 3 tabs, Generated Ideas, Saved Ideas and Marketplace. 

## Getting Started

Details on how to get the project set up locally will be provided in the future.

## Goals

*   Make sports tech innovation accessible
*   Enable product discovery within racket sports
*   Foster community through buying/selling

## Future Development

We have plans to integrate more features, such as gamification elements, advanced search and filtering, and more.
