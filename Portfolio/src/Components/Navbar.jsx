import { useState, useEffect } from 'react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    // 👇 Scroll behavior
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 60) {
                setShowNavbar(false);
            } else {
                setShowNavbar(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <>
            {/* ✅ Overlay to detect outside click */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-40 lg:hidden "
                    onClick={() => setIsOpen(false)}
                ></div>
            )}

            <nav
                className={`fixed top-0 left-0 w-full z-50 px-8 md:px-20 py-4 shadow-md bg-black transition-transform duration-300 ${showNavbar ? 'translate-y-0' : '-translate-y-full'
                    }`}
            >
                <div className="container mx-auto flex justify-between items-center flex-wrap relative z-50">
                    {/* Logo */}
                    <div className="text-white text-lg font-bold">BaijuYadav</div>

                    {/* Hamburger Icon */}
                    <div className="block lg:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white text-3xl focus:outline-none cursor-pointer"
                        >
                            <i className={isOpen ? 'ri-close-line' : 'ri-menu-3-line'}></i>
                        </button>
                    </div>

                    {/* Menu Links */}
                    <div
                        className={`w-full ${isOpen ? 'flex' : 'hidden'} flex-col text-center items-center lg:flex lg:flex-row border-t border-[#00D664] md:border-t-0 lg:justify-end lg:w-auto`}
                    >
                        <div className="nav-links lg:flex text-xl lg:flex-grow mr-8 gap-8">
                            {['Home', 'About', 'Tech Stack', 'Projects', 'Experience'].map((item) => {
                                const id = item.toLowerCase().replace(/\s+/g, '');
                                return (
                                    <a
                                        key={item}
                                        href={`#${id}`}
                                        onClick={() => setIsOpen(false)} // ✅ close on click
                                        className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-[#55dd1a] px-3 py-2"
                                    >
                                        {item}
                                    </a>
                                );
                            })}
                        </div>

                        <div className="mt-4 lg:mt-0">
                            <button className="cta-button">
                                Resume <i className="ri-file-download-line font-l"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
