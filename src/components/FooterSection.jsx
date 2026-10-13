import siteLogo from '../../images/site_logo_transparent.png';
import { Link, NavLink } from 'react-router';

const FooterSection = ({}) => {

        return (
            <section className="footer_section">
                <div className='mask_layer'/>
                <div className='hbar_container'>
                <img className="hbar" src='./images/h_bar.jpeg'/>
                <p>Supported Systems</p>
                </div>
                <div className='platforms_container'>
                    <div className="platforms">
                        <Link className="platform" to="https://www.playstation.com/">PS4/PS5 <i className="fa-brands fa-playstation"></i></Link>
    
                        <Link className="platform" to="https://www.xbox.com/">XBOX ONE <i className="fa-brands fa-xbox"></i></Link>
    
                        <Link className="platform" to="https://store.steampowered.com/">Steam <i className="fa-brands fa-steam"></i></Link>
    
                        <Link className="platform" to="https://www.microsoft.com/store/games/windows">Windows <i className="fa-brands fa-windows"></i></Link>
    
                        <Link className="platform" to="https://play.google.com/">Google Play <i className="fa-brands fa-google-play"></i></Link>
    
                        <Link className="platform" to="https://www.apple.com/app-store">App Store <i className="fa-brands fa-app-store-ios"></i></Link>
                    </div>
                </div>
                <div className="copyright_container">
                <a href='/#city'>
                    {/* <i className="fa-brands fa-fort-awesome"></i> */}
                    <img src={siteLogo} className="site_logo" alt="" />
                </a>
                <p className="copyright">Copyright &copy; City Ventures Company
                    <span id="date"> {new Date().getFullYear()}</span> all rights reserved
                </p>
                </div>
            </section>
        )
    
}

export default FooterSection