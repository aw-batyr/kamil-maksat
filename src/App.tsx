import { Footer, Header } from "./components/layout";
import { About, ContactForm, Hero, Services } from "./components/sections";
import { LanguageSync } from "./lang-sync";

function App() {
  return (
    <main>
      <Header />
      <LanguageSync />
      <Hero />
      <About />
      <Services />
      <ContactForm />
      <Footer />
    </main>
  );
}

export default App;
