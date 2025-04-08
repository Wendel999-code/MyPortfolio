import Image from "next/image";

const projects = [
    {
        id: 1,
        title: "Attendance Monitoring System",
        description:
            "QR-Code based attendance monitoring system with real-time parental notification.",
        image: "/a.png",
    },
    {
        id: 2,
        title: "Yulo's Poultry Farm",
        description: "Online ordering platform for poultry products.",
        image: "/egg.png",
    },
];

const ProjectCard = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-5  ">
            {projects.map((project) => (
                <div
                    key={project.id}
                    className="dark:bg-[#121212] hover:cursor-pointer dark:hover:bg-black hover:bg-gray-100  rounded-lg overflow-hidden p-4 flex flex-col items-start shadow-lg"
                >
                    <Image
                        src={project.image}
                        alt={project.title}
                        width={350}
                        height={250}
                        className="w-full rounded-md object-cover"
                    />
                    <h1 className="dark:text-white font-semibold text-lg mt-3">
                        {project.title}
                    </h1>
                    <p className="text-gray-700 dark:text-gray-400 text-lg mt-1">
                        {project.description}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default ProjectCard;
