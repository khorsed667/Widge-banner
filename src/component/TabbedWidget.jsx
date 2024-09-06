import { useState } from "react";
import { GoQuestion } from "react-icons/go";
import { TfiWidgetized } from "react-icons/tfi";

const TabbedWidget = () => {
  const [activeTab, setActiveTab] = useState("About Me");

  return (
    <div className="relative">
      <GoQuestion className="text-xl absolute hidden lg:block lg:top-8 xl:top-12 lg:left-2 xl:left-5" />
      <TfiWidgetized  className="text-xl absolute hidden lg:block lg:top-40 lg:left-2 xl:left-5" />
      <div className="flex flex-col w-full bg-gray-800 md:p-2 lg:p-6 xl:p-12 rounded-2xl text-white">
        <div className="flex justify-between border-black border-2 p-2 rounded-2xl bg-black">
          {["About Me", "Experiences", "Recommended"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`${
                activeTab === tab ? "bg-gray-600" : "bg-black"
              } xl:px-10 md:px-2 py-2 rounded-2xl font-bold transition-all shadow-deep-black duration-300`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="mt-4 mx-2 text-justify">
          {activeTab === "About Me" && (
            <p>
              Hi! I&apos;m Khorsed Alam, a passionate Front-End Developer from
              Jessore, Bangladesh. Currently pursuing a Bachelor of Science in
              Physics at Jashore University of Science and Technology. I have a
              diverse skill set in front-end technologies like HTML5, CSS3,
              Tailwind CSS, React.js, and Next.js, along with experience in
              backend technologies like MongoDB, Express.js, and REST APIs.
            </p>
          )}
          {activeTab === "Experiences" && (
            <p>
              <strong>Focus Haven</strong> - Developed a Photography Training
              School platform with user-specific dashboards, secure routing, and
              payment integration. <br />
              <strong>Bistro Boss</strong> - Built an online restaurant platform
              with table reservation, food ordering, and a Stripe payment
              gateway. <br />
              <strong>IMDb Clone</strong> - Developed a movie platform using
              Next.js with dynamic routes, toggle features, and movie search
              functionality.
            </p>
          )}
          {activeTab === "Recommended" && (
            <p>
              {" "}
              I highly recommend diving into technologies like Tailwind CSS for
              responsive design and React.js for building fast, scalable
              applications. Also, explore platforms like GitHub and Vercel for
              project deployment and collaboration.
            </p>
          )}
        </div>
      </div>
      <div className="mx-10 mt-7">
        <hr />
      </div>
    </div>
  );
};

export default TabbedWidget;
