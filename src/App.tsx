import "./App.css"
import Header from "./components/Header"
import Banner from "./components/Banner"
import Row from "./components/Row"

function App() {
   return (
      <div className="relative h-screen bg-gradient-to-b">
         <Header />
         <main className="relative pl-10 pb-12 md:pb-24 overflow-x-hidden">
            <Banner />
            <section className="space-y-5">
               <Row />
               <Row />
               <Row />
            </section>
         </main>
      </div>
   )
}

export default App
