import { Outlet, useLocation } from "react-router-dom";

const hyperlinks = [
    { name: "Home", link: "#" },
    { name: "Report", link: "/report" },
    { name: "App", link: "https://app.visdecode.ai" },
];

/* const footerLinks = [
    { name: "Privacy Policy", link: "/privacy" },
    { name: "Terms of Service", link: "/terms" },
    { name: "Contact", link: "/contact" },
]; */

const Layout = () => {
    const location = useLocation();
    const isHome = location.pathname === "/";

    return (
        <div className="flex flex-col min-h-screen">
            {/* Navbar (hidden on home page) */}
            {!isHome && (
                <nav className="w-full bg-white shadow-sm px-6 py-3 flex items-center justify-between">
                    <a href="/" className="flex items-center">
                        <img
                            src="/logo-name.svg"
                            alt="VisDecode Logo"
                            className="h-8 w-auto"
                        />
                    </a>
                    <div className="flex gap-6">
                        {hyperlinks
                            .filter(link => link.link !== "/")
                            .map(link => (
                                <a
                                    key={link.name}
                                    href={link.link}
                                    className="text-gray-700 hover:text-[#FDBA49] transition-colors font-medium"
                                >
                                    {link.name}
                                </a>
                            ))}
                    </div>
                </nav>
            )}

            <Outlet />


            {/* Footer */}
            <footer className="w-full bg-[#FDBA49] text-gray-800 py-6">
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center px-4">
                    <div className="mb-4 md:mb-0">
                        <span className="font-bold text-lg">VisDecode</span>
                        <p className="text-sm mt-1">© {new Date().getFullYear()} VisDecode. All rights reserved.</p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 items-center">
                        {hyperlinks.map(link => (
                            <a
                                key={link.name}
                                href={link.link}
                                className="text-sm hover:underline hover:text-gray-900 transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                        {/*                         {footerLinks.map(link => (
                            <a
                                key={link.name}
                                href={link.link}
                                className="text-sm hover:underline hover:text-gray-900 transition-colors"
                            >
                                {link.name}
                            </a>
                        ))} */}
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
