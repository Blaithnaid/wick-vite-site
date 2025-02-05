import { 
    CalendarIcon, 
    ChartBarIcon, 
    ChatBubbleLeftIcon, 
    UsersIcon 
  } from "@heroicons/react/24/outline";
  
  // Rename the array to avoid naming conflict
  const extraFeatures = [
    {
      name: "Content Scheduling",
      description: "Schedule posts across multiple social media platforms, saving time and ensuring consistent content delivery.",
      icon: CalendarIcon,
    },
    {
      name: "Analytics and Insights",
      description: "Monitor social media performance with in-depth analytics and insights to optimize engagement.",
      icon: ChartBarIcon,
    },
    {
      name: "Brand Monitoring",
      description: "Track brand mentions across social media to respond quickly and improve your brand's presence.",
      icon: ChatBubbleLeftIcon,
    },
    {
      name: "Team Collaboration",
      description: "Work with your team seamlessly, assign tasks, and manage approval workflows for social media posts.",
      icon: UsersIcon,
    },
    {
      name: "Customer Engagement",
      description: "Engage with customers by responding to comments, messages, and mentions across all platforms.",
      icon: ChatBubbleLeftIcon,
    },
    {
      name: "Automated Reporting",
      description: "Generate custom reports automatically, providing key metrics for performance review and strategy adjustments.",
      icon: ChatBubbleLeftIcon,
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
              Features
            </p>
          </div>
  
          {/* Features Grid */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {extraFeatures.map((feature) => (
              <div key={feature.name} className="flex flex-col items-center text-center">
                {/* Icon with hover scale effect */}
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
  
  export default Extra;
  