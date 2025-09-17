import { Footer, Header } from "./components/layout";
import { About, ContactForm, Hero, Services } from "./components/sections";
import { LanguageSync } from "./lang-sync";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <main>
      <Header />
      <LanguageSync />
      <Hero />
      <About />
      <Services />
      <ContactForm />
      <Toaster containerClassName="font-sans" />
      <Footer />
    </main>
  );
}

export default App;
