import { Outlet } from 'react-router-dom';
import styles from './app.module.css';

import Header from './header';

export default function App() {
  return (
    <>
      <Header></Header>
      <main>
        <section>
          <Outlet />
          {/* <h2>Edit Contact</h2>
          <form>
            <label htmlFor="firstname">First name</label>
            <input type="text" name="firstname" placeholder="First name" aria-label="First name" required />
            <label htmlFor="lastname">Last name</label>
            <input type="text" name="lastname" placeholder="Last name" aria-label="Last name" required />
            <button type="submit">Save</button>
          </form> */}
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
