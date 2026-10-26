export default function Home({
  schoolName,
  className,
  onNavigate,
  clickCount,
  onCountClick,
}) {
  return (
    <section>
      <h2>Welcome to Our Class Website</h2>
      <p>
        Welcome to <strong>{schoolName}</strong>! This website introduces our
        class, our students, and the skills we are learning.
      </p>
      <p>
        <strong>Class level and trade:</strong> {className}
      </p>
      <p>
        We are learning to design, develop, test, and deploy useful software
        applications. Explore the pages to learn more about our class.
      </p>

      <h3>Explore Our Class</h3>
      <ul>
        <li><button type="button" onClick={() => onNavigate("About")}>Learn About the Class</button></li>
        <li><button type="button" onClick={() => onNavigate("Students")}>Meet the Students</button></li>
        <li><button type="button" onClick={() => onNavigate("Contact")}>Contact the School</button></li>
      </ul>

      <h3>React Click Counter</h3>
      <p>You have clicked the counter button {clickCount} time(s).</p>
      <button type="button" onClick={onCountClick}>Click Me</button>
    </section>
  );
}
