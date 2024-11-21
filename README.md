# User Profile App

This is a simple User Profile App built with **React**, **Redux**, and **Material UI**, allowing users to view, edit, delete, and like user profiles. The app fetches user data from an API and displays it in a card layout, offering interactive features such as liking users and editing user information via a modal.

## Features

- **View Users**: Displays a list of user profiles in a responsive grid layout.
- **Like Users**: Click the heart icon to like or unlike a user. The liked state is visually indicated by a filled red heart.
- **Edit Users**: Update user details (name, email, phone, website) using an edit modal.
- **Delete Users**: Remove a user profile from the list by clicking the delete icon.
- **Responsive Design**: Adapts to different screen sizes using Material UI responsive grid system.

## Technologies Used

- **React**: Frontend UI framework.
- **Redux**: State management for handling user data and actions.
- **Material UI**: UI component library for styled components such as Cards, Icons, etc.
- **Axios**: For making API requests.


## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/sujjwal21/user-profiles
    .git
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm start
    ```

4. The app should now be running on [http://localhost:3000](http://localhost:3000).

## Usage

Once the app is running, you can:

- **View Users**: All users are displayed in card format.
- **Like Users**: Click the heart icon on a user card to like/unlike them. The heart will turn red when a user is liked.
- **Edit Users**: Click the pencil icon to open a modal and edit the user's details. After saving, the updated details will reflect on the user card.
- **Delete Users**: Click the trash icon to remove a user.

## API

This app uses **JSONPlaceholder** as a mock API for fetching user data. The user data is loaded upon component mounting using Redux actions.

## State Management

**Redux** is used to manage the app's global state, including:

- Fetching users from the API and storing them in the Redux store.
- Updating user profiles when edited via the modal.
- Deleting user profiles from the store.
- Managing liked users by maintaining an array of liked user IDs in the local state.

