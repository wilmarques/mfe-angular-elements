export default function Profile() {
  return (
    <>
      <h2>Profile</h2>
      <form>
        <label htmlFor="firstname">First name</label>
        <input
          type="text"
          name="firstname"
          placeholder="First name"
          aria-label="First name"
          required
        />
        <label htmlFor="lastname">Last name</label>
        <input
          type="text"
          name="lastname"
          placeholder="Last name"
          aria-label="Last name"
          required
        />
        <label htmlFor="dateofbirth">Date of birth</label>
        <input type="date" name="dateofbirth" />
        <button type="submit">Save</button>
      </form>
    </>
  );
}
