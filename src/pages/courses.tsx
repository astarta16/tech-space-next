// src/pages/courses.tsx
import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import {
  CoursesWrapper,
  ImageContainer,
  CoverImage,
  CenteredText,
  RegisterButton,
  CoursesSection,
  CoursesGrid,
  CourseCard,
  CourseInfo,
  CourseImage,
  CourseTitle,
  CourseDescription,
  CourseLink,
} from "../components/courses/CoursesStyled";

const Courses: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <CoursesWrapper>
          <ImageContainer>
            <CoverImage src="/images/6892036.jpg" alt="Course Cover" />
            <CenteredText>
              განავითარე შენი ცოდნა და უნარები ჩვენს კურსებთან ერთად!
              <RegisterButton>
                <a href="/register" className="register-text">
                  დარეგისტრირდი
                </a>
              </RegisterButton>
            </CenteredText>
          </ImageContainer>
          <CoursesSection>
            <h2 className="courses-title">კურსების კატალოგი</h2>
            <CoursesGrid>
              {/* Course 1 */}
              <CourseCard>
                <CourseImage src="/images/python.png" alt="Python" />
                <CourseInfo>
                  <CourseTitle>პითონი</CourseTitle>
                  <CourseDescription>
                    მარტივი და მოქნილი პროგრამირების ენა, რომელიც პოპულარულია
                    ვებ-განვითარებაში, მონაცემთა მეცნიერებაში და
                    ავტომატიზაციაში. გამოირჩევა სიმარტივითა და კოდის
                    გამჭვირვალობით.
                  </CourseDescription>
                  <CourseLink href="#">შეიტყვე მეტი</CourseLink>
                </CourseInfo>
              </CourseCard>

              {/* Course 2 */}
              <CourseCard>
                <CourseImage src="/images/web.png" alt="Web Development" />
                <CourseInfo>
                  <CourseTitle>ვებ დეველოპმენტი</CourseTitle>
                  <CourseDescription>
                    ვებ დეველოპმენტი არის ვებგვერდებისა და ვებაპლიკაციების
                    შექმნის პროცესი, რომელიც მოიცავს დიზაინს, კოდირებას და
                    სერვერების მართვას, რაც აუცილებელია ციფრულ სამყაროში
                    წარმატებისთვის.
                  </CourseDescription>
                  <CourseLink href="#">შეიტყვე მეტი</CourseLink>
                </CourseInfo>
              </CourseCard>

              {/* Course 3 */}
              <CourseCard>
                <CourseImage src="/images/game.png" alt="Game Development" />
                <CourseInfo>
                  <CourseTitle>თამაშების აწყობა</CourseTitle>
                  <CourseDescription>
                    კურსი გაძლევთ შესაძლებლობას, ისწავლოთ თამაშების დიზაინისა და
                    განვითარების საფუძვლები, პროგრამირების ენები და
                    ინსტრუმენტები, რაც დაგეხმარებათ შექმნათ ინტერაქტიული, 2D და
                    3D თამაშები.
                  </CourseDescription>
                  <CourseLink href="#">შეიტყვე მეტი</CourseLink>
                </CourseInfo>
              </CourseCard>

              {/* Course 4 */}
              <CourseCard>
                <CourseImage src="/images/photoshop.png" alt="Photoshop" />
                <CourseInfo>
                  <CourseTitle>ფოტოშოპი</CourseTitle>
                  <CourseDescription>
                    Photoshop არის გრაფიკული რედაქტირების პროგრამა, რომელიც
                    გამოიყენება სურათების დამუშავებისთვის, დიზაინის შექმნისთვის
                    და ფოტომანიპულაციებისთვის.
                  </CourseDescription>
                  <CourseLink href="#">შეიტყვე მეტი</CourseLink>
                </CourseInfo>
              </CourseCard>

              {/* Course 5 */}
              <CourseCard>
                <CourseImage src="/images/scratch.png" alt="Scratch" />
                <CourseInfo>
                  <CourseTitle>ვიზუალური პროგრამირება</CourseTitle>
                  <CourseDescription>
                    Scratch არის ვიზუალური პროგრამირების ენა, რომელიც შექმნილია
                    ბავშვებისთვის 7-10 წლამდე და დამწყებთათვის. ისწავლე
                    ანიმაციების და ინტერაქტიული ისტორიების შექმნა მარტივად.
                  </CourseDescription>
                  <CourseLink href="#">შეიტყვე მეტი</CourseLink>
                </CourseInfo>
              </CourseCard>

              {/* Course 6 */}
              <CourseCard>
                <CourseImage src="/images/robotic.png" alt="Robotics" />
                <CourseInfo>
                  <CourseTitle>რობოტიკა</CourseTitle>
                  <CourseDescription>
                    რობოტიკა ეხება რობოტების შექმნას, პროგრამირებას და
                    გამოყენებას. ეს მეცნიერება აერთიანებს მექანიკას,
                    ელექტრონიკასა და პროგრამირებას სხვადასხვა ამოცანების
                    შესასრულებლად.
                  </CourseDescription>
                  <CourseLink href="#">შეიტყვე მეტი</CourseLink>
                </CourseInfo>
              </CourseCard>
            </CoursesGrid>
          </CoursesSection>
        </CoursesWrapper>
      </main>
      <Footer />
    </>
  );
};

export default Courses;
