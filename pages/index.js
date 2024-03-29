import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
// import Img from "../public/vishnu-v3.jpg";
import dp from "../public/vishnu.jpeg";
import Tesla from "../public/tesla-clone.png";
import Portfolio from "../public/portfolio.png";
import Disney from "../public/disney-clone.png";
import ForkPlace from "../public/fork-place.png";
import BootCamp from "../public/boot-camp.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>{`Vishnu Sekhar\u0027s Portfolio`}</title>
        <meta name="description" content="createdbyvishnu" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 md:px-20 lg:px-40 xl:px-100 dark:bg-gray-900">
        <section className="min-h-screen">
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <div className="text-center p-1">
            <h2 className="text-xl py-2 font-normal md:text-3xl dark:text-white">
              I&apos;m
            </h2>
            <h2 className="text-5xl py-2 text-blue-700 font-medium md:text-6xl">
              Vishnu Sekhar
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl font-semibold dark:text-white">
              Software Developer
            </h3>
            <p className="text-justify text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-white">
              As a Software Developer specializing in Web application
              development, I bring 2 years of experience to the table. My
              expertise lies in front-end technologies, where I have honed my
              skills in React, JavaScript, Redux Toolkit, and version control
              using Git. I am dedicated to creating exceptional user experiences
              and am passionate about staying up to date with the latest
              industry trends and best practices.
            </p>
          </div>
          <div className="text-5xl flex justify-between gap-12 py-3 px-1 text-gray-600">
            <a
              target="blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/itsvishnusekhar/"
            >
              <AiFillLinkedin className="cursor-pointer" />
            </a>
            <FaReact />
            <a
              target="blank"
              rel="noopener noreferrer"
              href="https://github.com/seVishnu"
            >
              <AiFillGithub />
            </a>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-blue-700 rounded-full w-60 h-60 sm:w-80 sm:h-80 my-14 overflow-hidden md:w-96 md:h-96">
            <Image
              src={dp}
              layout="fill"
              objectFit="cover"
              alt="display picture"
            />
          </div>
        </section>

        <section>
          <div className="text-center p-2 pb-6">
            <h3 className="text-2xl py-1 font-semibold dark:text-white">
              Skillsets I offer
            </h3>
            <p className="text-md py-2 leading-8 text-justify text-gray-800 dark:text-white">
              Welcome to my comprehensive development toolkit. As an experienced
              developer myself, I understand the intricate requirements and
              challenges that arise during the development process. With my
              expertise in the{" "}
              <span className="text-blue-700">React domain</span>, I can help
              you develop intuitive, interactive, and high-performance user
              interfaces for your applications, optimized for performance.
            </p>
            <h4 className="py-1 text-blue-700 font-medium text-xl">
              My Tech Stack
            </h4>
            <ul>
              <li className="font-medium dark:text-white">React</li>
              <li className="font-medium dark:text-white">JavaScript</li>
              <li className="font-medium dark:text-white">Next.js</li>
              <li className="font-medium dark:text-white">React Native</li>
              <li className="font-medium dark:text-white">TypeScript</li>
              <li className="font-medium dark:text-white">Redux Toolkit</li>
              <li className="font-medium dark:text-white">Git</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <div className="text-center p-3">
            <h3 className="text-2xl py-1 font-semibold dark:text-white">
              My Portfolio
            </h3>
            <p className="text-md py-2 leading-relaxed text-justify text-gray-800 dark:text-white">
              Throughout my journey as a developer, I have had the opportunity
              to work on a wide range of projects, from web applications to
              mobile apps. Each project has allowed me to refine my skills,
              tackle complex challenges, and deliver high-quality solutions.
              Most importantly, I understand that as a dev you are always
              learning.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-5">
            <div className="p-4 border rounded">
              <a
                href="https://disney-plus-hs-clone.vercel.app/"
                target="blank"
                rel="noopener noreferrer"
              >
                <Image src={Disney} alt="disney logo" className="mb-4" />
                <h3 className="text-lg font-bold  dark:text-white">
                  Disney+ Hotstar Clone
                </h3>
                <p className="mt-2  dark:text-white text-sm">
                  Tech Stack used: React, Styled Components, Redux Toolkit, &
                  Firebase
                </p>
              </a>
            </div>
            <div className="p-4 border rounded">
              <Image src={Tesla} alt="tesla logo" className="mb-4" />
              <h3 className="text-lg font-bold  dark:text-white">
                Tesla Website Clone
              </h3>
              <p className="mt-2  dark:text-white text-sm">
                Tech Stack used: React, Styled Components, Redux Toolkit,
                Firebase & Material UI
              </p>
            </div>

            <div className="p-4 border rounded">
              <Image src={Portfolio} alt="portfolio logo" className="mb-4" />
              <h3 className="text-lg font-bold  dark:text-white">
                Portfolio I
              </h3>
              <p className="mt-2  dark:text-white text-sm">
                Tech Stack used: React, Sass & emailJS
              </p>
            </div>
            <div className="p-4 border rounded">
              <Image src={ForkPlace} alt="restaurant logo" className="mb-4" />
              <h3 className="text-lg font-bold  dark:text-white">
                Fork Place Recipe
              </h3>
              <p className="mt-2  dark:text-white text-sm">
                Tech Stack used: React, Styled Components, & Framer Motion
              </p>
            </div>
            <div className="p-4 border rounded">
              <Image src={BootCamp} alt="bootcamp logo" className="mb-4" />
              <h3 className="text-lg font-bold  dark:text-white">
                Coding BootCamp Design
              </h3>
              <p className="mt-2  dark:text-white text-sm">
                Tech Stack used: HTML, Vanilla JS & Bootstrap
              </p>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
};
export default Home;
