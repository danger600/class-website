export default function Contact({ schoolName, onNavigate }) {
  return (
    <section>
      <h2>Contact Us</h2>
      <p><strong>School:</strong> {schoolName}</p>
      <p><strong>Location:</strong> Kivumu, Rwanda</p>
      <p>
        <strong>Contact email:</strong>{" "}
        <a href="mailto:info@example.com">info@example.com</a>
      </p>
      <p>
        Replace this example email with the school's official contact email if
        you have it.
      </p>
      <button type="button" onClick={() => onNavigate("Home")}>Return to Home</button>
    </section>
  );
}
