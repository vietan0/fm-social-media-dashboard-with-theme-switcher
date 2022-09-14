import { useState, useEffect } from 'react';
import BigCard from './components/BigCard';
import SmallCard from './components/SmallCard';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      // sync system's theme with React state when page first loads
      setDarkMode(true);
    }
  }, []);

  return (
    <main className={darkMode ? 'App dark' : 'App'}>
      <div className="header">
        <div className="left">
          <h1>Social Media Dashboard</h1>
          <p className="subtext">Total Followers: 23,004</p>
        </div>
        <div className="right">
          <input
            type="checkbox"
            id="switch"
            onChange={() => setDarkMode((bool) => !bool)}
            checked={darkMode}
          />
          <label htmlFor="switch">
            Toggle
          </label>
          <p>Dark Mode</p>
        </div>
      </div>
      <div className="card-container">
        <BigCard
          socialMedia="facebook"
          username="@nathanf"
          number="1987"
          unit="followers"
          diff="12"
          diffType="up"
        />
        <BigCard
          socialMedia="twitter"
          username="@nathanf"
          number="1044"
          unit="followers"
          diff="99"
          diffType="up"
        />
        <BigCard
          socialMedia="instagram"
          username="@realnathanf"
          number="11k"
          unit="followers"
          diff="1099"
          diffType="up"
        />
        <BigCard
          socialMedia="youtube"
          username="Nathan F."
          number="8239"
          unit="subscribers"
          diff="144"
          diffType="down"
        />
      </div>
      <div className="overview">
        <h2>Overview - Today</h2>
        <div className="card-container">
          <SmallCard
            statName="Page Views"
            socialMedia="facebook"
            number="87"
            diff="3%"
            diffType="up"
          />
          <SmallCard
            statName="Likes"
            socialMedia="facebook"
            number="52"
            diff="2%"
            diffType="down"
          />
          <SmallCard
            statName="Likes"
            socialMedia="instagram"
            number="5462"
            diff="2257%"
            diffType="up"
          />
          <SmallCard
            statName="Profile Views"
            socialMedia="instagram"
            number="52k"
            diff="1375%"
            diffType="up"
          />
          <SmallCard
            statName="Retweets"
            socialMedia="twitter"
            number="117"
            diff="303%"
            diffType="up"
          />
          <SmallCard
            statName="Likes"
            socialMedia="twitter"
            number="507"
            diff="553%"
            diffType="up"
          />
          <SmallCard
            statName="Likes"
            socialMedia="youtube"
            number="107"
            diff="18%"
            diffType="down"
          />
          <SmallCard
            statName="Page Views"
            socialMedia="facebook"
            number="87"
            diff="3%"
            diffType="up"
          />
        </div>
      </div>
      <div className="attribution">
        Challenge by
        {' '}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by
        {' '}
        <a href="https://github.com/vietan0"> Việt An</a>
        .
      </div>
    </main>
  );
}

export default App;
