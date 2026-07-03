function BootcampProjectCard({ project }) {
  const CardTag = project.link ? 'a' : 'div'

  return (
    <CardTag
      href={project.link}
      target={project.link ? '_blank' : undefined}
      rel={project.link ? 'noreferrer' : undefined}
      className="flex flex-col rounded-md border-2 border-[#666] bg-white p-4 shadow ring-1 ring-black/5 transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg hover:ring-black/10 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
    >
      <div className="aspect-[4/3] w-full overflow-hidden rounded-t-md bg-gray-100">
        <img
          src={project.img}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>

      <h3 className="mt-4 !p-4 text-lg font-semibold text-gray-900">
        {project.title}
      </h3>
      <p className="mt-2 !p-4 text-sm leading-relaxed text-gray-700">
        {project.desc}
      </p>
    </CardTag>
  )
}

export default BootcampProjectCard
