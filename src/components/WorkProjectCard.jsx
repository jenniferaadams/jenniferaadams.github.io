const bulletOrder = ['Challenge', 'Actions', 'Impact']

function WorkProjectCard({ project }) {
  return (
    <article className="rounded-md border-2 border-[#666] bg-white !p-6 shadow transition-transform duration-300 focus-within:ring-2 hover:shadow-lg hover:ring-black/10 md:!p-8">
      <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
      <ul className="mt-4 space-y-3 text-gray-800">
        {bulletOrder.map((key) =>
          project.bullets[key] ? (
            <li key={key} className="leading-relaxed">
              <span className="font-semibold">{key}:</span>{' '}
              {project.bullets[key]}
            </li>
          ) : null,
        )}
      </ul>

      {project.url ? (
        <a
          href={project.url}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex items-center gap-2 !pl-6 font-semibold text-indigo-700 hover:underline"
        >
          Visit project
        </a>
      ) : null}
    </article>
  )
}

export default WorkProjectCard
