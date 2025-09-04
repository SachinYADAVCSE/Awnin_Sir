import { FaHeadphones, FaBookOpen, FaGraduationCap } from "react-icons/fa";

export default function FeatureBoxes() {
  const features = [
    {
      icon: <FaHeadphones />,
      title: "Live Online Classes, with Guest Speakers",
      desc: "Get a chance to speak with Foriegners, Learn by speaking",
      style: "bg-white text-gray-900 hover:bg-indigo-50",
      iconStyle: "text-cyan-600",
    },
    {
      icon: <FaBookOpen />,
      title: "Get Access to Online Courses & Offline Offices Both",
      desc: "It depends on you If you want you can join us anytime Offline at our Offices & Gain Practical Exposure",
      style:
        "bg-gradient-to-r from-indigo-800 to-indigo-900 text-white shadow-lg scale-105",
      iconStyle: "text-cyan-300",
    },
    {
      icon: <FaGraduationCap />,
      title: "Learn by Doing Activities",
      desc: "We believe in practical Expirences more, Our Students do Podcast, Q&A, Story-Telling and more",
      style: "bg-white text-gray-900 hover:bg-indigo-50",
      iconStyle: "text-cyan-600",
    },
  ];

  return (
    <section className="w-full py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {features.map((feature, i) => (
          <div
            key={i}
            className={`rounded-xl p-8 transition transform hover:-translate-y-2 duration-300 ${feature.style}`}
          >
            <div className="flex justify-center mb-6">
              <div
                className={`text-5xl p-4 rounded-full bg-white shadow-md ${feature.iconStyle}`}
              >
                {feature.icon}
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-center">{feature.title}</h3>
            <p className="text-center text-sm opacity-80">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
