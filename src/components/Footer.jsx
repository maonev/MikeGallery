import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { contactLinks } from "../data/contact";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-light border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <Logo />
            <p className="text-gray-400 text-sm mt-4">
              Building digital experiences that matter. Let's create something
              amazing together.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">
              Quick Links
            </h4>
            <div className="space-y-2">
              <Link
                to="/"
                className="block text-gray-400 hover:text-primary transition-colors">
                Home
              </Link>
              <Link
                to="/about"
                className="block text-gray-400 hover:text-primary transition-colors">
                About
              </Link>
              <Link
                to="/work"
                className="block text-gray-400 hover:text-primary transition-colors">
                Work
              </Link>
              <Link
                to="/experience"
                className="block text-gray-400 hover:text-primary transition-colors">
                Experience
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">Connect</h4>
            <div className="flex space-x-4 items-center">
              {contactLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:scale-110 hover:text-primary transition-transform duration-300"
                  title={social.name}>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Portfolio. Made with ☕
          </p>
        </div>
      </div>
    </footer>
  );
};
