import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import Img from "../public/vishnu.jpeg";
import Web1 from "../public/web1.png";
import Web2 from "../public/web2.png";
import Web3 from "../public/web3.png";
import Web4 from "../public/web4.png";
import Web5 from "../public/web5.png";
import Web6 from "../public/web6.png";
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
            <h2 className="text-5xl py-2 text-blue-700 font-medium md:text-6xl">
              Vishnu Sekhar
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl font-semibold dark:text-white">
              Software Developer
            </h3>
            <p className="text-justify text-md py-5 leading-relaxed text-gray-800 md:text-xl max-w-xl mx-auto dark:text-white">
              A highly skilled software developer with 2 years of experience
              specializing in web and mobile application development. With a
              strong focus on front-end technologies, have extensive proficiency
              in React, React Native, JavaScript, TypeScript, and version
              control tools like Git.
            </p>
          </div>
          <div className="text-5xl flex justify-between gap-12 py-3 px-1 text-gray-600">
            <AiFillTwitterCircle />
            <a
              target="blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/itsvishnusekhar/"
            >
              <AiFillLinkedin className="cursor-pointer" />
            </a>
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
              src={Img}
              layout="fill"
              objectFit="cover"
              alt="display picture"
            />
          </div>
        </section>

        <section>
          <div className="text-center p-2 pb-6">
            <h3 className="text-2xl py-1 font-semibold dark:text-white">
              Services I offer
            </h3>
            <p className="text-md py-2 leading-8 text-justify text-gray-800 dark:text-white">
              Welcome to my comprehensive development services. As an
              experienced developer myself, I understand the intricate
              requirements and challenges that arise during the development With
              my expertise in{" "}
              <span className="text-blue-700"> React Domain</span>, I can help
              you develop intuitive, interactive, and high-performance user
              interfaces for your applications optimized for performance.
              {`Let\u0027s collaborate and leverage your ideas and dreams combined
              with my expertise to create exceptional applications.`}
            </p>
            <h4 className="py-1 text-blue-700 font-medium">My Tech Stack</h4>
            <ul>
              <li className="font-medium dark:text-white">Javscript</li>
              <li className="font-medium dark:text-white">React</li>
              <li className="font-medium dark:text-white">Next.js</li>
              <li className="font-medium dark:text-white">React Native</li>
              <li className="font-medium dark:text-white">Typescript</li>
              <li className="font-medium dark:text-white">Redux Toolkit</li>
              <li className="font-medium dark:text-white">Git</li>
              <li className="font-medium dark:text-white">Docker</li>
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
            </p>
            <p className="text-md py-2 leading-relaxed text-justify text-gray-800 dark:text-white">
              As you explore my portfolio, you will discover a diverse range of
              projects that highlight my ability to tackle various technical
              requirements, work effectively in teams, and adapt to evolving
              industry standards. I approach every project with passion and a
              commitment to delivering results that exceed expectations.
            </p>
          </div>

          <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div class="p-4 border rounded">
              <Image src={Web1} alt="Project 1" class="mb-4" />
              <h3 class="text-lg font-bold">Project 1</h3>
              <p class="mt-2">Description of Project 1 goes here.</p>
            </div>

            <div class="p-4 border rounded">
              <Image src={Web2} alt="Project 2" class="mb-4" />
              <h3 class="text-lg font-bold">Project 2</h3>
              <p class="mt-2">Description of Project 2 goes here.</p>
            </div>
            <div class="p-4 border rounded">
              <Image src={Web2} alt="Project 2" class="mb-4" />
              <h3 class="text-lg font-bold">Project 2</h3>
              <p class="mt-2">Description of Project 2 goes here.</p>
            </div>
            <div class="p-4 border rounded">
              <Image src={Web2} alt="Project 2" class="mb-4" />
              <h3 class="text-lg font-bold">Project 2</h3>
              <p class="mt-2">Description of Project 2 goes here.</p>
            </div>
            <div class="p-4 border rounded">
              <Image src={Web2} alt="Project 2" class="mb-4" />
              <h3 class="text-lg font-bold">Project 2</h3>
              <p class="mt-2">Description of Project 2 goes here.</p>
            </div>
            <div class="p-4 border rounded">
              <Image src={Web2} alt="Project 2" class="mb-4" />
              <h3 class="text-lg font-bold">Project 2</h3>
              <p class="mt-2">Description of Project 2 goes here.</p>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
};
export default Home;
