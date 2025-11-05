export default function Team() {
    // Example data for 8 team members, now with optional links
    const teamMembers = [
        { name: "Emmanuel Iarussi", role: "PI", image: "./Emmanuel.jpg", link: "https://emmanueliarussi.github.io/" },
        { name: "Viviana Siless", role: "Co-PI", image: "./Viviana.png", link: "https://www.utdt.edu/ver_contenido.php?id_contenido=22640&id_item_menu=37529" },
        { name: "Paula Feldman", role: "ML Research assistant", image: "./Paula.png" },
        { name: "Martin Sinnona", role: "ML Research assistant", image: "./Martin.jpg" },
        { name: "Valentín Bonás", role: "ML Research assistant", image: "./Valentin.jpg" },
        { name: "Leonardo Iara", role: "Frontend Developer", image: "./LeonardoI.jpg" },
    ];

    const contributors = [
        { name: "Julian Eisenschlos", role: "Advisor", image: "./Julian.jpg" },
        { name: "Leonardo Svarc", role: "Designer", image: "./LeonardoS.jpg" },
    ];

    return (
        <div className="relative flex flex-col items-center gap-2 sm:gap-4 w-full mb-16 2xl:mb-20 3xl:mb-24 4xl:mb-28">
            <h2 className="text-xl sm:text-2xl lg:text-3xl 2xl:text-5xl 3xl:text-6xl 4xl:text-7xl text-black font-serif font-medium text-center mb-6 sm:mb-8 2xl:mb-12 3xl:mb-16 4xl:mb-20 px-6 sm:px-8 lg:px-12 2xl:px-16">
                <span className="flex items-center justify-center">
                    <span className="w-16 sm:w-24 md:w-32 lg:w-40 xl:w-48 2xl:w-56 h-px bg-black mr-3 sm:mr-4" />
                    Team
                    <span className="w-16 sm:w-24 md:w-32 lg:w-40 xl:w-48 2xl:w-56 h-px bg-black ml-3 sm:ml-4" />
                </span>
            </h2>
            <div className="w-full flex flex-row flex-wrap items-center justify-center gap-6 2xl:gap-8 3xl:gap-10 4xl:gap-12 px-6 sm:px-8 lg:px-12 2xl:px-16 mb-10 2xl:mb-12 3xl:mb-16 4xl:mb-20">
                {teamMembers.map((member, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                        <img
                            src={member.image}
                            alt={member.name}
                            className="h-16 w-16 sm:h-20 sm:w-20 2xl:h-24 2xl:w-24 3xl:h-28 3xl:w-28 4xl:h-32 4xl:w-32 rounded-full object-cover border-2 border-gray-200 mb-1"
                        />
                        {member.link ? (
                            <a
                                href={member.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl font-medium text-black text-center hover:underline"
                            >
                                {member.name}
                            </a>
                        ) : (
                            <span className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl font-medium text-black text-center">
                                {member.name}
                            </span>
                        )}
                        <span className="text-xs sm:text-sm 2xl:text-base 3xl:text-lg 4xl:text-xl text-gray-500 text-center mt-0.5">
                            {member.role}
                        </span>
                    </div>
                ))}
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl 2xl:text-5xl 3xl:text-6xl 4xl:text-7xl text-black font-serif font-medium text-center mb-6 sm:mb-8 2xl:mb-12 3xl:mb-16 4xl:mb-20 px-6 sm:px-8 lg:px-12 2xl:px-16">
                <span className="flex items-center justify-center">
                    <span className="w-16 sm:w-24 md:w-32 lg:w-40 xl:w-48 2xl:w-56 h-px bg-black mr-3 sm:mr-4" />
                    Contributors
                    <span className="w-16 sm:w-24 md:w-32 lg:w-40 xl:w-48 2xl:w-56 h-px bg-black ml-3 sm:ml-4" />
                </span>
            </h2>
            <div className="w-full flex flex-row flex-wrap items-center justify-center gap-6 2xl:gap-8 3xl:gap-10 4xl:gap-12 px-6 sm:px-8 lg:px-12 2xl:px-16 mb-10 2xl:mb-12 3xl:mb-16 4xl:mb-20">
                {contributors.map((member, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                        <img
                            src={member.image}
                            alt={member.name}
                            className="h-16 w-16 sm:h-20 sm:w-20 2xl:h-24 2xl:w-24 3xl:h-28 3xl:w-28 4xl:h-32 4xl:w-32 rounded-full object-cover border-2 border-gray-200 mb-1"
                        />
                        <span className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl font-medium text-black text-center">
                            {member.name}
                        </span>
                        <span className="text-xs sm:text-sm 2xl:text-base 3xl:text-lg 4xl:text-xl text-gray-500 text-center mt-0.5">
                            {member.role}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}