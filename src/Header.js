import About from './About'

function Header() {
    return (
        <div>
            <h1>Kaitlyn Greve</h1>
            <h3>Software Engineer</h3>
            {/* <img className='profile-photo' src='images/profilephoto.jpg' /> */}
            <About />
        </div>
    );
}

export default Header;