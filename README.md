# React User Directory – API Data Fetching

A responsive User Directory application built with React that fetches user information from the JSONPlaceholder API and displays it in clean, reusable profile cards.

This project demonstrates API integration, React Hooks, reusable components, props, and asynchronous data handling.

## 🚀 Features

- Fetch user data from a public REST API.
- Display user information in individual profile cards.
- Show user name, email, phone number, city, and company.
- Display a loading message while fetching data.
- Reusable `Card` component for rendering user information.
- Responsive layout using CSS Flexbox.
- Error handling using `try...catch...finally`.

## 🛠️ Technologies Used

- React
- JavaScript (ES6+)
- HTML5
- CSS3
- JSONPlaceholder REST API
- Vite

## 🌐 API Used

JSONPlaceholder Users API:

https://jsonplaceholder.typicode.com/users

The API provides sample user information for testing and learning purposes.

## 📂 Project Structure

```text
src/
├── assets/
│   └── components/
│       └── card/
│           └── Card.jsx
├── App.jsx
├── App.css
└── main.jsx
```

## ⚙️ Installation and Setup

1. Clone the repository:

   ```bash
   git clone YOUR_REPOSITORY_URL
   ```

2. Navigate to the project directory:

   ```bash
   cd YOUR_PROJECT_FOLDER
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL displayed in your terminal.

## 🧠 Concepts Learned

- Using `useState` to manage application state.
- Using `useEffect` to fetch data when the component mounts.
- Fetching API data with `async/await`.
- Handling loading states during API requests.
- Passing data between components using props.
- Rendering lists dynamically with the `map()` method.
- Using React's `key` prop for list items.
- Building reusable components.
- Styling responsive layouts with CSS Flexbox.

## 🔮 Future Improvements

- Add a search bar to filter users.
- Add error messages when API requests fail.
- Add a retry button for failed requests.
- Add pagination or sorting functionality.
- Improve the UI with profile avatars and additional styling.

## 👨‍💻 Author

**Aswin**

B.Tech Computer Science and Business Systems student, learning React and frontend development.

## 📄 License

This project is intended for educational and learning purposes.
