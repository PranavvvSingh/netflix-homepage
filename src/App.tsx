import "./App.css"
import Header from "./components/Header"
import Banner from "./components/Banner"
import Row from "./components/Row"

function App() {
   return (
      <div className="relative h-screen bg-gradient-to-b">
         <Header />
         <main className="relative pl-7 md:pl-10 pe-3.5 md:pe-5 pb-12 md:pb-24 overflow-x-hidden">
            <Banner />
            <section className="space-y-5">
               <Row collection_name="top_movies" />
               <Row collection_name="new_releases" />
               <Row collection_name="casual_viewing" />
            </section>
         </main>
      </div>
   )
}

export default App
