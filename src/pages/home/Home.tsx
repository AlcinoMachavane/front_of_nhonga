
import './Home.css'
import '../../templates/aside/Aside.tsx'
import Nav from "../../templates/nav/Nav.tsx";

// const title: HTMLElement = document.getElementById(".main_title");
// title.innerHTML = "Home";

function Home() {
    
  return (
    <>
        {Nav()}
    </>
  )
}

export default Home
