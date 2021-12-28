import styles from './app.module.css';

export function App() {
  return (
    <>
      <nav>
        <ul>
          <li>Home</li>
          <li>Profile</li>
          <li><mark>Contacts</mark></li>
        </ul>
      </nav>
      <main>
        <section>
          {/* <h2>Home</h2>
          <p>Welcome to <strong>Micro Front-Ends using Angular Elements</strong> course!</p>
          <p>See more at <a href='https://educative.io'>https://educative.io</a></p> */}
          {/* <h2>Profile</h2>
          <form>
            <label htmlFor="firstname">First name</label>
            <input type="text" name="firstname" placeholder="First name" aria-label="First name" required />
            <label htmlFor="lastname">Last name</label>
            <input type="text" name="lastname" placeholder="Last name" aria-label="Last name" required />
            <label htmlFor="dateofbirth">Date of birth</label>
            <input type="date" name="dateofbirth" />
            <button type="submit">Save</button>
          </form> */}
          {/* <hgroup>
            <nav>
              <ul>
                <li><h2>Contacts</h2></li>
              </ul>
              <ul>
                <li><a href="#" role="button">New contact</a></li>
              </ul>
            </nav>
          </hgroup>
          <nav>
            <ul>
              <li>First Contact</li>
            </ul>
            <ul>
              <li><a href="#">Edit</a></li>
              <li><a href="#">Delete</a></li>
            </ul>
          </nav>
          <nav>
            <ul>
              <li>Second Contact</li>
            </ul>
            <ul>
              <li><a href="#">Edit</a></li>
              <li><a href="#">Delete</a></li>
            </ul>
          </nav>
          <nav>
            <ul>
              <li>Third Contact</li>
            </ul>
            <ul>
              <li><a href="#">Edit</a></li>
              <li><a href="#">Delete</a></li>
            </ul>
          </nav> */}
          <h2>Edit Contact</h2>
          <form>
            <label htmlFor="firstname">First name</label>
            <input type="text" name="firstname" placeholder="First name" aria-label="First name" required />
            <label htmlFor="lastname">Last name</label>
            <input type="text" name="lastname" placeholder="Last name" aria-label="Last name" required />
            <button type="submit">Save</button>
          </form>
          {/* <script>
            // Get the root element
                        var r = document.querySelector(':root');

                        // Create a function for getting a variable value
                        function myFunction_get() {
              // Get the styles (properties and values) for the root
              var rs = getComputedStyle(r);
                        // Alert the value of the --blue variable
                        alert("The value of --blue is: " + rs.getPropertyValue('--blue'));
            }

                        // Create a function for setting a variable value
                        function myFunction_set() {
                          // Set the value of variable --blue to another value (in this case "lightblue")
                          r.style.setProperty('--blue', 'lightblue');
            }
          </script> */}
        </section>
      </main>
    </>
  );
}

export default App;
