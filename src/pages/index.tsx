// src/pages/index.tsx
import Head from "next/head";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import HeroSection from "@/components/hero/HeroSection";
import FeaturesSection from "@/components/features/FeaturesSection";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Tech Space Website - Empowering Your Tech Journey</title>
        <meta
          name="description"
          content="Join Tech Space to advance your tech career with expert instructors and flexible learning paths. Discover courses in web development, data science, and more!"
        />
        <meta
          name="keywords"
          content="tech education, online courses, programming, web development, data science, expert instructors, tech community"
        />
        <meta name="author" content="Nini Gedeshuri" />
        <meta
          property="og:title"
          content="Tech Space Website - Empowering Your Tech Journey"
        />
        <meta
          property="og:description"
          content="Empower your tech journey at Tech Space with our expert-led courses and vibrant community. Start learning today!"
        />
        <meta property="og:image" content="/images/tech-space.jpg" />
        <meta
          property="og:url"
          content="https://astarta16.github.io/tech-space/"
        />
        <meta property="og:type" content="website" />
      </Head>

      <Header />
      <HeroSection />
      <FeaturesSection />
      <Footer />
    </>
  );
};

export default Home;
