const Navbar = () => {
    return(
        <nav className="navbar">
            <h1>FeedBack App</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create">Create Session</a>
                <a href="/join">Join Session</a>
                <a href="/vote">Vote</a>
            </div>
        </nav>
    );
}

export default Navbar;