import { useState } from "react"


function Counter(){

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };
    const decrement = () => {
        setCount(count - 1);
    };

    const reset = () => {
         setCount(0);
    };

    const getMessage = () => {
        if(count === 0) return "Minimum limit reached";
        if(count < 5) return "Great start! Keep going!";
        if(count < 10) return "You're doing well! Keep it up!";
        if(count < 15) return "You're on fire! Keep pushing!";
        return "Maximum Limit Reached!";
    };

    const progress = Math.min((count / 20) * 100, 100); 

    return(
        <div className="counter-card">
      <header className="card-header">
        <div className="logo">🎵</div>
        <div className="brand">
          <h1>Zerithm</h1>
          <p>Every Click Has a Rhythm</p>
        </div>
        
      </header>

      <section className="counter-section">
        <div
          className="counter-ring"
          style={{
            "--progress": `${progress}%`
          }}
        >
          <div className="counter-inner">
            <span>COUNT</span>
            <h2 key={count} className="counter-number">
              {count}
            </h2>
          </div>
        </div>

        <p className="status" aria-live="polite">
          {getMessage()}
        </p>
      </section>

      <div className="actions">
        <button
          className="btn decrease"
          onClick={decrement}
          disabled={count === 0}
        >
          ⬇️ Decrement
        </button>

        <button className="btn reset" onClick={reset}>
          🔄 Reset
        </button>

        <button className="btn increase" onClick={increment}>
          ⬆️ Increment
        </button>
      </div>

      <section className="progress-card">
        <div className="progress-heading">
          <span>◎ Progress to 10</span>
          <strong>{progress}%</strong>
        </div>

        <div
          className="progress-track"
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Progress to ten"
        >
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          />
        </div>
      </section>

      <footer className="feature-grid">
        <div className="feature">
          <span>⚡</span>
          <strong>Increment</strong>
          <small>Increase by 1</small>
        </div>
        <div className="feature">
          <span>➖</span>
          <strong>Decrement</strong>
          <small>Decrease by 1</small>
        </div>
        <div className="feature">
          <span>🔄</span>
          <strong>Reset</strong>
          <small>Back to zero</small>
        </div>
        <div className="feature">
          <span>🔒</span>
          <strong>Limit</strong>
          <small>Never below 0</small>
        </div>
      </footer>
    </div>
  );
    
}

export default Counter

