import Navbar from "./NavBar"
import Home from "./Home"

export default function Main() {
    return (
        <main className="wraper main">
            <Navbar />
            <Home />
            {/* <Menu />
            <Contact /> */}
        </main>
      )
}