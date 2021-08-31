

import React, { useState } from 'react';
import Link from './Link';

export default function App() {
    const [counter, setCounter] = useState(0);
    const [pathname, setPathname] = useState(window.location.pathname);

    const updatePathname = (newLocation) => {
        setPathname(newLocation);
        window.history.pushState(null, '', newLocation);
    };
    window.addEventListener('popstate', () => {
        setPathname(window.location.pathname);
    });


    let innerComponent;
    switch (pathname) {
        case '/':
            innerComponent = React.createElement(Home, null);
            break;
        case '/about':
            innerComponent = React.createElement(About, null);
            break;
        case '/users':
            innerComponent = React.createElement(Users, null);
            break;
        default:
            innerComponent = React.createElement(Home, null);
            break;
    }
    return (
      <div>
      <button
        onClick={() => setCounter(counter + 1)}
      >
        inc: {counter}
      </button>
      <nav>
        <ul>
          <li>
            <Link
              to="/"
              updatePathname={updatePathname}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              updatePathname={updatePathname}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/users"
              updatePathname={updatePathname}
            >
              Users
            </Link>
          </li>
        </ul>
      </nav>
      {innerComponent}
    </div>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
    

