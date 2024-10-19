import Image from "next/image";
import me from "../../public/me.png"; // Ensure this path is correct and the image exists

export default function Header() {
  return (
    <div className="main-container bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 min-h-screen p-8 flex items-center justify-center">
      <div className="parent-container bg-white shadow-2xl rounded-lg overflow-hidden flex flex-col md:flex-row items-center md:items-start justify-between p-8 space-y-8 md:space-y-0 md:space-x-12">
       
        <div className="child-container md:w-1/2">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-4">Hey,</h1>
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">
            My Name is <span className="text-blue-600">Humaiza Naz</span>
          </h2>
          <h3 className="text-xl font-medium text-gray-600 mb-6">I am a Next.js Developer</h3>

          <div className="intro bg-gray-50 p-6 shadow-lg rounded-lg">
            <p className="text-gray-700 leading-relaxed">
              Hello! I am Humaiza Naz, a passionate Next.js developer with a knack for creating dynamic, high-performance web applications. 
              With a strong foundation in JavaScript and React, I specialize in building scalable, user-friendly interfaces that enhance 
              user experiences. I love leveraging Next.js&apos; powerful features like server-side rendering and static site generation to 
              optimize performance and SEO. <br /><br />
              With 2 years of experience in web development, I have successfully delivered projects across various domains, collaborating 
              closely with designers and stakeholders to bring ideas to life. Whether it&apos;s crafting responsive layouts or implementing 
              complex functionalities, I thrive on solving challenges and staying up-to-date with the latest trends in the JavaScript ecosystem.
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="image md:w-1/2 flex justify-center">
          <Image
            src={me} // Image in public folder
            alt="Humaiza Naz"
            width={400}
            height={400}
            className="rounded-full border-4 border-blue-500 shadow-xl transition-transform transform hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
}
