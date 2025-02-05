import { 
    CalendarIcon, 
    ChartBarIcon, 
    ChatBubbleLeftIcon, 
    UsersIcon, 
    ChatBubbleLeftIcon, 
    ChatBubbleLeftIcon, // Using a different icon if DocumentReportIcon is unavailable
  } from "@heroicons/react/24/outline";
  
  // Rename the array to avoid naming conflict
  const extraFeatures = [
    {
      name: "Content Scheduling",
      description:
        "Schedule posts across multiple social media platforms, saving time and ensuring consistent content delivery.",
      icon: CalendarIcon,
      imageSrc: "https://picsum.photos/400/400?random=1",
    },
    {
      name: "Analytics and Insights",
      description:
        "Monitor social media performance with in-depth analytics and insights to optimize engagement.",
      icon: ChartBarIcon,
      imageSrc: "https://picsum.photos/400/400?random=2",
    },
    {
      name: "Brand Monitoring",
      description:
        "Track brand mentions across social media to respond quickly and improve your brand's presence.",
      icon: ChatBubbleLeftIcon,
      imageSrc: "https://picsum.photos/400/400?random=3",
    },
    {
      name: "Team Collaboration",
      description:
        "Work with your team seamlessly, assign tasks, and manage approval workflows for social media posts.",
      icon: UsersIcon,
      imageSrc: "https://picsum.photos/400/400?random=4",
    },
    {
      name: "Customer Engagement",
      description:
        "Engage with customers by responding to comments, messages, and mentions across all platforms.",
      icon: ChatBubbleLeftIcon,
      imageSrc: "https://picsum.photos/400/400?random=5",
    },
    {
      name: "Automated Reporting",
      description:
        "Generate custom reports automatically, providing key metrics for performance review and strategy adjustments.",
      icon: ChatBubbleLeftIcon, // Updated to DocumentTextIcon
      imageSrc: "https://picsum.photos/400/400?random=6",
    },
  ];
  
  const Extra = () => {
    return (
      <div className="bg-[#6F6DB2] min-h-screen flex flex-col justify-center py-24 sm:py-32">
        <div className="mx-auto max-w-screen-xl px-6 lg:px-8">
          {/* Title */}
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-base font-semibold text-[#FFFFFF]">
              Empower Your Workflow
            </h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-[#FFFFFF] sm:text-5xl">
              Extra Tailored for Your Success
            </p>
            <p className="mt-6 text-lg text-[#DCDCDC]">
              Streamline your processes with tools designed to simplify and enhance every aspect of your work. From social media management to analytics, we've got you covered.
            </p>
          </div>
  
          {/* Extra Grid */}
          <div className="mt-16 grid grid-cols-1 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-20">
            {extraFeatures.map((feature) => (
              <div
                key={feature.name}
                className="flex flex-col items-center lg:flex-row lg:items-start"
              >
                {/* Image Placeholder */}
                <div className="flex-shrink-0">
                  {feature.imageSrc ? (
                    <img
                      src={feature.imageSrc}
                      alt={feature.name}
                      className="rounded-xl shadow-md w-48 h-48 object-cover"
                    />
                  ) : (
                    <div className="flex items-center justify-center w-48 h-48 bg-[#121212] rounded-xl border border-[#00FF41]/50">
                      <span className="text-[#00FF41]">No Image</span>
                    </div>
                  )}
                </div>
  
                {/* Feature Details */}
                <div className="mt-6 lg:mt-0 lg:ml-8">
                  <div className="flex items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#00FF41]">
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
  
  export default Extra;
  