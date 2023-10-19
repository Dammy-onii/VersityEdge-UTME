import "./why.css";
import FRAME1 from "./../../../../assets/Frame3.png";
import FRAME2 from "./../../../../assets/Frame5.png";
import FRAME3 from "./../../../../assets/Frame4.png";
import FRAME4 from "./../../../../assets/Frame6.png";

import LINE1 from "./../../../../assets/Line1.png";
import LINE2 from "./../../../../assets/Line2.png";
import LINE3 from "./../../../../assets/Line3.png";

import LINE4 from "./../../../../assets/mobileLine1.png";
import LINE5 from "./../../../../assets/mobileLine2.png";
import LINE6 from "./../../../../assets/mobileLine3.png";
import Hug from "./../../../../components/Hug/Hug";

const lines = [LINE1, LINE2, LINE3];

const text = [
  {
    header: "Unlock Your Potential",
    img: FRAME1,
    wirteup:
      "Learn from top educators and experts who will equip you with the skills to ace your UTME exams.",
  },

  {
    header: "Admission Strategies",
    img: FRAME2,
    wirteup:
      "Insider tips and strategies for navigating the complex admission process seamlessly.",
  },

  {
    header: "Comprehensive Study Materials",
    img: FRAME3,
    wirteup:
      "Access to a treasure trove of study resources, including past questions, mock exams, and study guides",
  },

  {
    header: "UTME Forms Scholarships",
    img: FRAME4,
    wirteup:
      "Be one of the 200 lucky students to receive a UTME Forms Scholarship",
  },
];

export default function WhyComponent() {
  return (
    <section className=" bg-[#F8FBFF] py-[3rem]">
      <article className=" generalPadding flex flex-col items-center justify-center gap-[3rem] mobile:gap-[6rem] mobile:py-4 md:py-7">
        <div className=" flex flex-col items-center justify-center gap-[1rem]">
          <h1 className="text-3xl responsiveHeader font-extrabold">
          Features
          </h1>
          <p className="text-xl responsiveText text-center ">
          Are you tired of feeling lost in the complex admission process? VersityEdge is your ultimate solution to
overcome challenges and unlock a world of opportunities
          </p>
        </div>

        <ul className="cards relative flex h-fit w-full place-items-center items-center justify-center gap-x-[2rem] gap-y-[2rem] smobile:gap-x-[2rem] mobile:flex mobile:gap-[2rem] md:gap-[3.5rem]">
          {Array.from({ length: text.length }, (_, i) => i + 1).map((num) => (
            // Cards
            <Hug
              type={"lined"}
              key={num}
              id={num}
              line={lines[num - 1]}
              header={text[num - 1].header}
              img={text[num - 1].img}
              staggered={true}
            >
              {text[num - 1].wirteup}
            </Hug>
          ))}
          {/* MobileLines */}
          <img
            className=" WCVLines absolute left-[29%] block scale-[40%] xs:top-[24%] smobile:left-[30%] smobile:top-[20%] ss:left-[33%] mobile:hidden"
            src={LINE4}
            alt="connection"
          />
          <img
            className=" WCVLines absolute left-[87%] top-[45%] block scale-[85%] smobile:left-[85%] smobile:top-[40%] smobile:scale-[100%] mobile:hidden "
            src={LINE5}
            alt="connection"
          />
          <img
            className=" WCVLines absolute left-[38%] top-[84%] block scale-[48%] smobile:left-[40%] smobile:top-[83%] smobile:scale-[50%] ss:left-[41%] ss:scale-[70%] mobile:hidden "
            src={LINE6}
            alt="connection"
          />
        </ul>
      </article>
    </section>
  );
}
