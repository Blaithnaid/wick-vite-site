// Hero.jsx

"use client"; // Ensure the client-side rendering works with React

import { useEffect } from "react";
import { UserCircleIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import Header from "./Header";
import appSync from "../assets/app-sync.png";

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
      <p className="mt-2 text-[#6F6DB2]">{description}</p> {/* Dusty Lavender */}
    </div>
  </div>
);

const Hero = () => {
  return (
    <div className="bg-[#FFFFFF] h-full w-full">
      {/* Hero Section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        {/* Background Gradient */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#78C288] to-[#6F6DB2] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>

        <div className="mx-auto max-w-[1200px] py-32 sm:py-48 lg:py-56 text-center fade-in-animation">
          <style>
            {`
            @keyframes fadeIn {
              from {
                opacity: 0;
                transform: translateY(20px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            .fade-in-animation {
              animation: fadeIn 1.5s ease-in-out;
              animation-delay: 0.2s;
              animation-fill-mode: both;
            }
            `}
          </style>

          {/* Text Content */}
          <h1 className="text-balance text-5xl font-bold tracking-tight text-[#6F6DB2] sm:text-7xl">
            Social Media, Simplified.
          </h1>
          <p className="mt-8 text-lg font-medium text-[#6F6DB2] sm:text-xl">
            Wick brings all of your platforms into one place, making it easier than ever to manage your social media presence.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-[#78C288] px-3.5 py-2.5 text-sm font-semibold text-[#1B1B1B] shadow-sm hover:bg-[#00FF41] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00FF41]"
            >
              Download
            </a>
            <a
              href="#"
              className="text-sm font-semibold text-[#6F6DB2] hover:text-[#FFFFFF]"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        {/* Bottom Gradient */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#1B1B1B] to-[#FFFFFF] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>

      {/* Insert the Video Here */}
      <div className="mt-16 text-center">
        <video
          className="mt-6 w-full max-w-4xl mx-auto rounded-lg"
          controls
        >
          <source src="https://www.example.com/path-to-your-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Features Cards Section */}
      <section className="container rounded-xl m-0 w-full p-16 grid grid-cols-1 bg-[#FFFFFF] sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card
          title="Integrated Dashboard"
          description="All your social media accounts in one unified interface."
          imgSrc="https://picsum.photos/400/300?random=1"
        />
        <Card
          title="Smart Analytics"
          description="Track performance and grow your audience effectively."
          imgSrc="https://picsum.photos/400/300?random=2"
        />
        <Card
          title="Collaboration Tools"
          description="Team up with collaborators seamlessly."
          imgSrc="https://picsum.photos/400/300?random=3"
        />
      </section>

      {/* Features Section */}
      <Features />
    </div>
  );
};

const Features = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col justify-center py-24 sm:py-32">
      <div className="mx-auto max-w-screen-xl px-6 lg:px-8">
        {/* Header Section */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-base font-semibold text-[#373f51]">
            Empower Your Workflow
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-[#1B1B1B] sm:text-5xl">
            Features Tailored for Your Success
          </p>
          <p className="mt-6 text-lg text-[#1B1B1B]/90">
            Streamline your processes with tools designed to simplify and enhance every aspect of your work. From security to storage, we've got you covered.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-16 grid grid-cols-1 gap-y-16 sm:grid-cols-2 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-20">
          {features.map((feature) => (
            <div key={feature.name} className="flex flex-col items-center lg:flex-row lg:items-start">
              {/* Image Placeholder */}
              <div className="flex-shrink-0">
                {feature.imageSrc ? (
                  <img
                    src={feature.imageSrc}
                    alt={feature.name}
                    className="rounded-xl shadow-md w-48 h-48 object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center w-48 h-48 bg-[#6F6DB2] rounded-xl border border-[#00FF41]/50">
                    <span className="text-[#6F6DB2]">No Image</span>
                  </div>
                )}
              </div>

              {/* Feature Details */}
              <div className="mt-6 lg:mt-0 lg:ml-8">
                <div className="flex items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#6F6DB2]">
                    <feature.icon className="h-6 w-6 text-black" aria-hidden="true" />
                  </div>
                  <h3 className="ml-4 text-xl font-bold text-[#1B1B1B]">{feature.name}</h3>
                </div>
                <p className="mt-4 text-base text-[#1B1B1B]/80">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
