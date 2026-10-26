const students = [
  { id: "SWD001", name: "Remy Nsanzimana", trade: "Software Development" },
  { id: "SWD002", name: "Student Two", trade: "Software Development" },
  { id: "SWD003", name: "Student Three", trade: "Software Development" },
  { id: "SWD004", name: "Student Four", trade: "Software Development" },
  { id: "SWD005", name: "Student Five", trade: "Software Development" },
];

export default function Students({ schoolName }) {
  return (
    <section>
      <h2>Our Students</h2>
      <p>Students in the Software Development class at {schoolName}.</p>
      <p>
        Replace the sample names and IDs with the real details of your classmates
        before submitting the assessment.
      </p>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            <strong>ID:</strong> {student.id} | <strong>Name:</strong>{" "}
            {student.name} | <strong>Trade:</strong> {student.trade}
          </li>
        ))}
      </ul>
    </section>
  );
}
