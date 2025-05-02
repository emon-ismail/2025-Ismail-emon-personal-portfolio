'use client'

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-light/80 dark:bg-dark/80 backdrop-blur-lg z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-2xl font-bold text-primary">Ismail Emon</a>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="nav-link">About</a>
            <a href="#experience" className="nav-link">Experience</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 