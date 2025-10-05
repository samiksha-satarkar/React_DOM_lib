import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>🚀 React DOM Installed Successfully!</h1>
        <p>Rendering this app using <code>ReactDOM.createRoot()</code></p>
      </header>

      <main className="app-content">
        <button className="styled-button">Click Me</button>
      </main>

      <footer className="app-footer">
        <p>Made with ❤️ using React and ReactDOM</p>
      </footer>
    </div>
  );
}

export default App;
