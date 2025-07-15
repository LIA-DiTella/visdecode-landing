export default function Team() {
    // Example data for 8 team members, now with roles
    const teamMembers = [
        { name: "Emmanuel Iarussi", role: "PI", image: "./Emmanuel.jpg" },
        { name: "Viviana Siless", role: "Co-PI", image: "./Viviana.png" },
        { name: "Julian Eisenschlos", role: "Advisor", image: "./Julian.jpg" },
        { name: "Leonardo Svarc", role: "Designer", image: "./LeonardoS.jpg" },
        { name: "Paula Feldman", role: "ML Research assistant", image: "./Paula.png" },
        { name: "Martin Sinnona", role: "ML Research assistant", image: "./Martin.jpg" },
        { name: "Valentín Bonás", role: "ML Research assistant", image: "./Valentin.jpg" },
        { name: "Leonardo Iara", role: "Frontend Developer", image: "./LeonardoI.jpg" },
    ];

    return (
        <div className="relative flex flex-col items-center gap-2 sm:gap-4 w-full mb-16 2xl:mb-20 3xl:mb-24 4xl:mb-28">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-6xl 3xl:text-7xl 4xl:text-8xl text-black font-serif font-medium text-center mb-6 sm:mb-8 2xl:mb-12 3xl:mb-16 4xl:mb-20 px-4">
                <span className="flex items-center">
                    <span className="flex-1 h-px bg-black mr-2 w-xs" />
                    Team
                    <span className="flex-1 h-px bg-black ml-2" />
                </span>
            </h2>
            <div className="w-full flex flex-row flex-wrap items-center justify-center gap-6 2xl:gap-8 3xl:gap-10 4xl:gap-12 px-4 mb-10 2xl:mb-12 3xl:mb-16 4xl:mb-20">
                {teamMembers.map((member, idx) => (
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