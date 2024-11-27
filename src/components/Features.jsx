import {
	UserCircleIcon,
	CloudArrowUpIcon,
	FingerPrintIcon,
	LockClosedIcon,
} from "@heroicons/react/24/outline";

const features = [
	{
		name: "Feature 1",
		description: "Desc 1",
		icon: UserCircleIcon,
	},
	{
		name: "Feature 2",
		description: "Desc 2",
		icon: UserCircleIcon,
	},
	{
		name: "Feature 3",
		description: "Desc 3",
		icon: UserCircleIcon,
	},
	{
		name: "Feature 4",
		description: "Desc 4",
		icon: UserCircleIcon,
	},
];

const Features = () => {
	return (
		<div className="bg-gray py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:text-center">
					<h2 className="text-base/7 font-semibold text-indigo-600">
						Post with confidence
					</h2>
					<p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-balance">
						Everything you need to manage your accounts
					</p>
					<p className="mt-6 text-lg/8 text-gray-400">
						Quis tellus eget adipiscing convallis sit sit eget
						aliquet quis. Suspendisse eget egestas a elementum
						pulvinar et feugiat blandit at. In mi viverra elit nunc.
					</p>
				</div>
				<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
					<dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
						{features.map((feature) => (
							<div key={feature.name} className="relative pl-16">
								<dt className="text-base/7 font-semibold text-gray-900">
									<div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
										<feature.icon
											aria-hidden="true"
											className="h-6 w-6 text-white"
										/>
									</div>
									{feature.name}
								</dt>
								<dd className="mt-2 text-base/7 text-gray-600">
									{feature.description}
								</dd>
							</div>
						))}
					</dl>
				</div>
			</div>
		</div>
	);
};

export default Features;
