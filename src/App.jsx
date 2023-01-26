import Banner from "./components/Banner"
import Footer from "./components/Footer"
import Game from "./components/Game"
import Header from "./components/Header"

function App() {

  return (
    <div className="bg-slate-100 h-screen">
      <Header />
      <Banner/>
      <Game/>
      <Footer/>
    </div>
  )
}

export default App
