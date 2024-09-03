import Footer from "./components/footer";
import  Navbar from "./components/navbar";
import Presentation from "./components/presentation";
import Profil from "./components/profil";
import Skills from "./components/skills";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
     <Navbar/>
     <Profil/>
     <Skills/>
     <Presentation/>
     <Footer/>
    </main>
  );
}
