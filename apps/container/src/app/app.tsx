import styles from './app.module.css';

export function App() {
  return (
    <>
      <nav>
        <ul>
          <li><mark>Home</mark></li>
          <li>Profile</li>
          <li>Contacts</li>
        </ul>
      </nav>
      <main>
        <section>
          <h2>Home</h2>
          <p>Welcome to <strong>Micro Front-Ends using Angular Elements</strong> course!</p>
          <p>See more at <a href='https://educative.io'>https://educative.io</a></p>
          <form>
            <input type="text" name="firstname" placeholder="First name" aria-label="First name" required />
            <input type="email" name="email" placeholder="Email address" aria-label="Email address" required />
            <fieldset>
              <label htmlFor="terms">
                <input type="checkbox" role="switch" id="terms" name="terms" />
                I agree to the <a href="#">Privacy Policy</a>
              </label>
            </fieldset>
            <button type="submit">Subscribe</button>
          </form>
        </section>
      </main>
    </>
  );
}

export default App;
