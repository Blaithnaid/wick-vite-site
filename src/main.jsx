import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

const App = () => {
  return (
    <div>
      <Navbar />
      <main style={{ padding: '20px' }}>
        <h2>Welcome to the React App</h2>
        <p>This is a simple example of using a Navbar component.</p>
      </main>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
