import { FaFacebookSquare ,  FaLinkedin} from "react-icons/fa";
import { SlSocialInstagram } from "react-icons/sl";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center p-10 bg-[#DFE1FA] mt-10  text-base-content rounded">
                <nav className="grid grid-flow-col gap-4">
                    <Link className="link link-hover">About us</Link>
                    <Link className="link link-hover">Contact</Link>
                    <Link className="link link-hover">Jobs</Link>
                    <Link className="link link-hover">Press kit</Link>
                </nav>
                <nav>

                    <div className="grid grid-flow-col gap-4">
                       <Link to={'https://www.facebook.com/profile.php?id=100077374245629'}><FaFacebookSquare className="text-3xl "></FaFacebookSquare></Link>
                        <Link to={'https://www.linkedin.com/in/siyam-ahmed-a5a6b3285/'}><FaLinkedin className="text-3xl "></FaLinkedin></Link>

                        <Link to={'https://www.instagram.com/foysalahmedsiyam/'}><SlSocialInstagram className="text-3xl "></SlSocialInstagram></Link>
                    </div>
                </nav>
                <aside>
                    <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;