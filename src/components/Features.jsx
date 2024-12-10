import {
	UserCircleIcon,
	CloudArrowUpIcon,
	FingerPrintIcon,
	LockClosedIcon,
} from "@heroicons/react/24/outline";

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

const Features = () => {
	return (
		<div className="bg-black py-6 sm:py-20">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				{/* Header Section */}
				<div className="mx-auto max-w-2xl lg:text-center">
					<h2 className="text-base font-semibold text-[#7870EB]">
						Empower Your Workflow
					</h2>
					<p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
						Features Tailored for Your Success
					</p>
					<p className="mt-6 text-lg text-gray-200/90">
						Streamline your processes with tools designed to
						simplify and enhance every aspect of your work. From
						security to storage, we've got you covered.
					</p>
				</div>

				{/* Features Grid */}
				<div className="mt-16 grid grid-cols-1 gap-y-16 sm:grid-cols-2 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-20">
					{features.map((feature) => (
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
										<span className="text-[#00FF41]">
											No Image
										</span>
									</div>
								)}
							</div>

							{/* Feature Details */}
							<div className="mt-6 lg:mt-0 lg:ml-8">
								<div className="flex items-center">
									<div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#78c288]">
										<feature.icon
											className="h-6 w-6 text-black"
											aria-hidden="true"
										/>
									</div>
									<h3 className="ml-4 text-xl font-bold text-white">
										{feature.name}
									</h3>
								</div>
								<p className="mt-4 text-base text-gray-200">
									{feature.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Features;
