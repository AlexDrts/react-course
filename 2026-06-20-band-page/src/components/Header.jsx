function Header({ name, description }) {
    return (
        <header className="header">
            <h1>🎵 {name}</h1>
            <p>{description}</p>
        </header>
    );
}

export default Header;