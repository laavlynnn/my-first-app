
export const metadata = {
  title: "Projects | Lovelyn",
};

const projects = [
  {
    id: 1,
    name: "Personal Portfolio",
    description: "A personal website introducing myself and my skills.",
  },
  {
    id: 2,
    name: "Online Shopping Website",
    description: "A website for browsing and exploring different products.",
  },
  {
    id: 3,
    name: "Student Management System",
    description: "A simple system for managing student information.",
  },
];

export default function ProjectsPage() {
  return (
    <main>
      <h1>My Projects</h1>

      {projects.map((project) => (
        <div key={project.id}>
          <h2>{project.name}</h2>
          <p>{project.description}</p>
        </div>
      ))}
    </main>
  );
}
