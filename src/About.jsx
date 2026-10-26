export default function About({ schoolName }) {
  const subjects = [
    "Front-End Development with ReactJS",
    "JavaScript Programming",
    "HTML and Web Page Structure",
    "Database Design and SQL",
    "Software Testing and Debugging",
  ];

  return (
    <section>
      <h2>About Our Class</h2>
      <p>
        The purpose of this website is to present our class, introduce students,
        and share information about the Software Development trade at{" "}
        <strong>{schoolName}</strong>.
      </p>

      <h3>About Software Development</h3>
      <p>
        Software Development involves planning, designing, building, testing,
        and maintaining computer applications and websites. Students practise
        problem-solving, teamwork, programming, and responsible use of technology.
      </p>

      <h3>Subjects and Skills We Learn</h3>
      <ul>
        {subjects.map((subject) => <li key={subject}>{subject}</li>)}
      </ul>
    </section>
  );
}
