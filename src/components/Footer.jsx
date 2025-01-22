import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { logo } from '../assets';

const Footer = () => {
    const Year = new Date().getFullYear();

    return (
        <footer className="relative bg-black text-white">
            <div className="absolute top-0 left-0 w-full overflow-hidden">
                <svg data-name="Layer 1"
                     xmlns="http://www.w3.org/2000/svg" 
                     viewBox="0 0 1200 120" 
                     preserveAspectRatio="none">
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,
                        250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,
                        3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        className="relative block h-[600px] fill-tertiary"></path>
                </svg>

                {/* Centered Content with Line */}
                <div className="flex flex-col md:flex-row items-center justify-center p-10 gap-10">
                    <div className="flex flex-col gap-5 items-center text-center">
                        <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
                        <h2 className="text-3xl font-semibold font-serif">
                            Jawwad Junaid <span className="sm:block hidden">| Website Developer</span>
                        </h2>
                        <p>
                        Transforming visions into vibrant digital realities—let's create something extraordinary together!</p>
                    </div>

                    {/* Divider Line */}
                    <div className="h-[150px] md:h-[200px] border-l-2 border-gray-400 hidden md:block"></div>

                    <div className="flex flex-col gap-4 items-center text-center">
                        <h2 className="text-[22px] font-semibold font-serif uppercase">Contact</h2>
                        <p>Email: JawwadJunaid17@gmail.com</p>
                        <p>Phone: +92 342-2234-091</p>
                        <div className="flex space-x-4">
                            <a href="https://github.com/jawwadjunaid" className="hover:text-pink-500 transform hover:scale-125 transition duration-150">
                                <FaGithub />
                            </a>
                            <a href="https://www.linkedin.com/in/jawwad-junaid-511697186/" className="hover:text-pink-500 transform hover:scale-125 transition duration-150">
                                <FaLinkedinIn />
                            </a>
                            <a href="https://x.com/AnonymousDegan" className="hover:text-pink-500 transform hover:scale-125 transition duration-150">
                                <FaTwitter />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Subscription Form */}
                <div className="flex items-center justify-center mt-10 px-5 md:px-0">
                    <form className="relative w-full max-w-sm">
                        <input type="email" placeholder="Your email"
                               className="w-full text-gray-800 p-3 rounded-full focus:outline-none focus:border border-pink-800" />
                        <button type="submit" className="bg-tertiary px-5 py-3 md:px-8 md:py-4  rounded-full text-white absolute right-0 top-0 bottom-0">
                            Submit
                        </button>
                    </form>
                </div>
                
                <h6 className="text-center mt-5 text-gray-700">Copyright &copy; {Year} Jawwad Junaid. All Right Reserved</h6>
            </div>
        </footer>
    );
};

export default Footer;
