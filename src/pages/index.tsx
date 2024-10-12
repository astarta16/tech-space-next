// src/pages/index.tsx
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <main>{/* Your main content goes here */}</main>
      <Footer />
    </div>
  );
};

export default Home;
