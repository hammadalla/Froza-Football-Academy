// src/components/Header.jsx
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import './Header.css'
const Header = () => {
    return (
        <header className="bg-header">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-6">
                        <div className="headerEmail text-sm text-gray-700">
                            <strong>Email:</strong> <Link to="mailto:frozaclub@example.com" className="Email">frozaclub@example.com</Link>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="d-flex justify-content-end gap-2">
                            <a href="#" className="socilaIcon">
                                <FaFacebookF size={16} />
                            </a>
                            <a href="#" className="socilaIcon">
                                <FaInstagram size={16} />
                            </a>
                            <a href="#" className="socilaIcon">
                                <FaXTwitter size={16} />
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </header>
    );
};

export default Header;
