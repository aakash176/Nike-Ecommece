import CustomerReview from "./components/CustomerReview"
import Hero from "./components/Hero"
import Services from "./components/Services"
import SuperOffer from "./components/SuperOffer"
import SuperQuality from "./components/SuperQuality"
import Subscribe from "./components/Subscribe"
import Footer from "./components/Footer"
import PopularProducts from "./components/PopularProducts"
import { SignOutButton, SignInButton, SignedOut, SignedIn } from "@clerk/clerk-react"
import bg from './assets/images/background.jpg'
import { FaArrowRightLong } from "react-icons/fa6";
import Nav from "./components/Nav"
const App = () => (

  <>
    <SignedOut>
      <div className="h-screen w-full">
        <div className="flex gap-2 absolute top-[30%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white bg-coral-red text-xl p-5 rounded-3xl font-bold">
          <SignInButton />
          <FaArrowRightLong />
        </div>
        <img src={bg} className="w-full h-full object-cover" />
      </div>
    </SignedOut>
    <SignedIn>
      <main className="relative">
        <Nav />
        <section className="xl:padding-l wide:padding-r padding-b">
          <Hero />
        </section>
        <section className="padding">
          <PopularProducts />
        </section>
        <section className="padding">
          <SuperQuality />
        </section>
        <section className="padding-x py-10">
          <Services />
        </section>
        <section className="padding">
          <SuperOffer />
        </section>
        <section className="bg-pale-blue padding">
          <CustomerReview />
        </section>
        <section className="padding">
          <Subscribe />
        </section>
        <section className="padding">
          <Footer />
        </section>
        
      </main>
    </SignedIn>
  </>
)

export default App