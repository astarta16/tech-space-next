// src/pages/about.tsx
import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import {
  AboutHero,
  HeroContainer,
  AboutSection,
  AboutContainer,
  AboutContent,
  AboutImage,
  AboutText,
  GallerySection,
  GalleryContainer,
  GalleryItem,
  FaqSection,
  FaqContainer,
} from "../components/about/AboutStyled";
import FaqItemComponent from "../components/about/FaqItem"; // Corrected import

const About: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <AboutHero>
          <HeroContainer>
            <h2>ჩვენს შესახებ</h2>
            <p>გაიგე უფრო მეტი ჩვენი კურსების და მენტორების შესახებ!</p>
          </HeroContainer>
        </AboutHero>

        <AboutSection>
          <AboutContainer>
            <AboutContent>
              <AboutImage src="/images/kiddo1.jpg" alt="Who We Are" />
              <AboutText>
                <h2>ვინ ვართ ჩვენ?</h2>
                <p>
                  ჩვენ ვართ პროფესიონალთა გუნდი, რომელიც ორიენტირებულია
                  ინოვაციებზე, ხარისხზე და გრძელვადიან წარმატებაზე. ჩვენი
                  მიზანია, შევქმნათ და გავუზიაროთ ცოდნა, რაც ხელს უწყობს
                  ტექნოლოგიური განვითარებას და ინოვაციურ გადაწყვეტილებებს.
                </p>
              </AboutText>
            </AboutContent>

            <AboutContent className="reverse">
              <AboutImage src="/images/kiddo2.jpg" alt="Our Mission" />
              <AboutText>
                <h2>ჩვენი მისია</h2>
                <p>
                  ჩვენი მისიაა, გავაძლიეროთ მომავალი თაობა, ავამაღლოთ მათი
                  ტექნოლოგიური უნარები და წვლილი შევიტანოთ ინოვაციურ და
                  შემოქმედებით სამყაროში.
                </p>
              </AboutText>
            </AboutContent>
          </AboutContainer>
        </AboutSection>

        <GallerySection>
          <h2 className="gallery-title">ფიზიკურ სივრცეში შეხვედრები</h2>
          <GalleryContainer>
            <GalleryItem>
              <img
                src="/images/392871609_122123914886190016_1703082755269786001_n.jpg"
                alt="Gallery Image"
              />
            </GalleryItem>
            <GalleryItem>
              <img
                src="/images/429651438_122123914814190016_7149053217752897165_n.jpg"
                alt="Gallery Image"
              />
            </GalleryItem>
            {/* Add more gallery images */}
          </GalleryContainer>
        </GallerySection>

        <FaqSection>
          <FaqContainer>
            <h2>ხშირად დასმული შეკითხვები</h2>
            <FaqItemComponent
              question="რა არის სწავლის საფასური?"
              answer="სწავლა ჩვენი აკადემიის ნებისმიერ კურსზე ღირს 150 ლარი თვეში."
            />
            <FaqItemComponent
              question="რა არის TechSpace?"
              answer="ჩვენ ვართ ონლაინ აკადემია, რომელიც მიზნად ისახავს ბავშვებსა და მოზარდებში ტექნოლოგიური უნარების განვითარებას, რათა მათ მომავლისთვის უკეთ მოემზადონ."
            />
            <FaqItemComponent
              question="როგორ არის დაყოფილი თქვენი კლასები ასაკების მიხედვით?"
              answer="ჩვენი კლასები დაყოფილია ასაკობრივ ჯგუფებად: 6-9, 10-13, და 14-17 წლის მოსწავლეებისთვის."
            />
            <FaqItemComponent
              question="რა კურსებს სთავაზობთ?"
              answer="ჩვენი აკადემია სთავაზობს კურსებს პროგრამირებაში, ვებ დეველოპმენტში, თამაშების აწყობაში, რობოტიკაში და გრაფიკულ დიზაინში."
            />
            <FaqItemComponent
              question="რამდენი წლიდან იწყებთ სწავლების პროცესს?"
              answer="ჩვენი კურსები განკუთვნილია 6 წლიდან მოზარდებისთვის."
            />
          </FaqContainer>
        </FaqSection>
      </main>
      <Footer />
    </>
  );
};

export default About;
