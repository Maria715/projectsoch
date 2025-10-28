import React from "react";
import { Link } from "react-router-dom";

const OngoingCases = () => {
  const cases = [
    {
      id: 1,
      name: "Jannat Fatima",
      location: "Islamabad",
      image: "/images/story.png",
      description:
        "Jannat, a 5-year-old special child from Tarlai Kalan, Islamabad, has just started school. Her family struggles financially but believes in her potential to achieve great things through education.",
      raised: 109449,
      goal: 150000,
    },
    {
      id: 2,
      name: "Zahid",
      location: "Basti Numberdar Kundrala",
      image: "/images/case2.jpg",
      description:
        "Zahid, 12, from a small rural community, is enrolled in school and passionate about learning mathematics. His father works hard to support him, but the family needs help with basic school supplies.",
      raised: 87091,
      goal: 100000,
    },
    {
      id: 3,
      name: "Shafaq Tahir",
      location: "Pakistan",
      image: "/images/case3.jpg",
      description:
        "Shafaq, a 7-year-old special child who uses a wheelchair, is one of the brightest students in her class. She loves reading and always motivates others with her cheerful attitude and love for learning.",
      raised: 14670,
      goal: 50000,
    },
  ];

  return (
    <section id="ongoing-cases" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[#233d60] font-poppins font-bold text-4xl md:text-5xl mb-4">
            Ongoing Cases
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Meet the children and individuals currently receiving support. Your
            contributions directly change their lives.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map((c) => {
            const percent = Math.min((c.raised / c.goal) * 100, 100);
            return (
              <div
                key={c.id}
                className="bg-white border border-gray-100 rounded-2xl shadow-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <img
                  src={c.image}
                  alt={c.name}
                  className="w-full h-80 object-cover rounded-t-2xl object-top"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#233d60] font-poppins">
                    {c.name}
                  </h3>
                  <p className="text-sm italic text-gray-500 mb-3">
                    {c.location}
                  </p>

                  <p className="text-gray-600 text-[15px] leading-relaxed mb-4">
                    {c.description}
                  </p>

                  {/* Progress bar */}
                  <div className="mb-3">
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div
                        className="h-2 rounded-full bg-[#FF7A00] transition-all duration-700"
                        style={{ width: `${percent}%` }}
                      ></div>
                    </div>
                    <p className="text-sm font-medium text-[#233d60] mt-1">
                      £{c.raised.toLocaleString()} raised of £
                      {c.goal.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Button */}
        <div className="text-center mt-12">
          <Link
            to="/cases"
            className="inline-block bg-[#FF7A00] text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-[#e96d00] transition-all"
          >
            See More Cases →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OngoingCases;
