import sd87 from '../images/sd87.png';

function Footer() {
    return (
        <footer>
            <div className='sd87'>
                <img src={sd87} alt="sd87 Logo" />
            </div>
            <div className='copyright'>
                <p>&copy; 2023 sammidev87</p>
            </div>
        </footer>
    );
}

export default Footer;