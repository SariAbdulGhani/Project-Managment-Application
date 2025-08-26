import Button from "./Button";

export default function ProjectsSidebar({onStartAddProject, projects, onSelectProject, projectId}) {
  const baseButtonClass = 'w-full px-2 pt-1 my-1 text-left rounded-sm  hover:text-stone-200 hover:bg-stone-800';
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-400 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        {projects.map(project => (
          <li key={project.id}>
            <button
              className={`${baseButtonClass} ${project.id === projectId ? 'bg-stone-700 text-stone-50' : ''}`}
              onClick={() => onSelectProject(project.id)}
            >
              {project.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}