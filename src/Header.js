import About from './About'

function Header() {
    return (
        <div className='title-container'>
            <h1 className='title' >Kaitlyn Greve</h1>
            <h2 className='title-2' >Software Engineer</h2>
            {/* <img className='profile-photo' src='images/profilephoto.jpg' /> */}
            <About />
        </div>
    );
}

export default Header;