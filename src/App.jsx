import CustomerReview from "./components/CustomerReview"
import Hero from "./components/Hero"
import Services from "./components/Services"
import SuperOffer from "./components/SuperOffer"
import SuperQuality from "./components/SuperQuality"
import Subscribe from "./components/Subscribe"
import Footer from "./components/Footer"
import PopularProducts from "./components/PopularProducts"
import Nav from "./components/Nav"
const App = () => (
  <main className="relative">
    <Nav/>
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero/>
    </section>
    <section className="padding">
      <PopularProducts/>
    </section>
    <section className="padding">
      <SuperQuality/>
    </section>
    <section className="padding-x py-10">
      <Services/>
    </section>
    <section className="padding">
      <SuperOffer/>
    </section>
    <section className="bg-pale-blue padding">
      <CustomerReview/>
    </section>
    <section className="padding">
      <Subscribe/>
    </section>
    <section className="padding">
      <Footer/>
    </section>
  </main>
)

export default App