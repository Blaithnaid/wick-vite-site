"use client"; // Ensure client-side rendering works with React

import { UserCircleIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from "@heroicons/react/24/outline";

const features = [
  {
    name: "User Management",
    description: "Manage user access and permissions seamlessly.",
    icon: UserCircleIcon,
    imageSrc: "https://picsum.photos/400/400?random=1",
  },
  {
    name: "Cloud Storage",
    description: "Securely store and access your files from anywhere.",
    icon: CloudArrowUpIcon,
    imageSrc: "https://picsum.photos/400/400?random=2",
  },
  {
    name: "Enhanced Security",
    description: "Advanced encryption to protect your data.",
    icon: FingerPrintIcon,
    imageSrc: "https://picsum.photos/400/400?random=3",
  },
  {
    name: "Data Privacy",
    description: "Your data is safe and never shared without consent.",
    icon: LockClosedIcon,
    imageSrc: "https://picsum.photos/400/400?random=4",
  },
];

const Card = ({ title, description, imgSrc }) => (
  <div className="max-w-sm rounded-lg shadow-lg overflow-hidden bg-[#1B1B1B] hover:scale-105 transform transition-all duration-300">
    <img src={imgSrc} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-lg font-semibold text-[#FFFFFF]">{title}</h3>
      <p className="mt-2 text-[#6F6DB2]">{description}</p>
    </div>
  </div>
);

const Hero = () => {
  return (
    <div className="w-full h-full">
      {/* Hero Section */}
      <div className="relative flex items-center justify-center min-h-screen w-full text-center">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover -z-10">
          <source src="https://www.example.com/path-to-your-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black opacity-50 -z-10"></div>
        <div className="w-full text-white px-0">
          <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">Social Media, Simplified.</h1>
          <p className="mt-8 text-lg font-medium sm:text-xl">
            Wick brings all of your platforms into one place, making it easier than ever to manage your social media presence.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a href="#" className="rounded-md bg-[#78C288] px-5 py-3 text-lg font-semibold text-[#1B1B1B] shadow-lg hover:bg-[#00FF41]">
              Download
            </a>
            <a href="#" className="text-lg font-semibold hover:text-[#FFFFFF]">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <Features />
    </div>
  );
};

const Features = () => {
  return (
    <div className="bg-[#6F6DB2] py-24 sm:py-32 w-full">
      <div className="w-full">
        <div className="text-center">
          <h2 className="text-base font-semibold text-[#373f51]">Empower Your Workflow</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-[#1B1B1B] sm:text-5xl">Features Tailored for Your Success</p>
          <p className="mt-6 text-lg text-[#1B1B1B]/90">Streamline your processes with tools designed to simplify and enhance every aspect of your work.</p>
        </div>

        {/* Features Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature) => (
            <div key={feature.name} className="flex flex-col items-center text-center">
              <div className="transition-transform duration-300 ease-in-out transform hover:scale-110">
                <feature.icon className="h-12 w-12 text-black hover:text-[#78C288]" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-[#1B1B1B]">{feature.name}</h3>
              <p className="mt-2 text-base text-[#1B1B1B]/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
