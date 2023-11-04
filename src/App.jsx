import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./components/data"

function App() {
  const cards = data.map((data) => {
    return <Card 
      key= {data.id}
      {...data}
    />
  })
  return (
    <>
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cards}
      </section>
    </>
  )
}

export default App
