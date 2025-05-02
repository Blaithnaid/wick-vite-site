import React, { useState } from "react";
import Header from "../components/Header";
import { useAuth } from "../contexts/AuthContext";
import { db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { PlusIcon } from "@heroicons/react/24/solid";

const AdminDash = () => {
	const { currentUser } = useAuth();
	const [newTrend, setNewTrend] = useState({
		platform: "",
		title: "",
		description: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleAddTrend = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);
		try {
			await addDoc(collection(db, "trends"), {
				...newTrend,
				createdAt: serverTimestamp(),
			});
			alert("Trend added successfully!");
			setNewTrend({ platform: "", title: "", description: "" });
		} catch (err) {
			console.error("Error adding trend:", err);
			alert("Something went wrong.");
		}
		setIsSubmitting(false);
	};

	return (
		<>
			<Header />
			<div className="pt-32 my-4 text-black flex flex-col items-center">
				<h1 className="text-3xl">Admin Dashboard</h1>
				<div className="my-6 md:w-1/3 px-8 text-pretty">
					You can use these forms to add new Trends to the Trends page in-app,
					new videos to the Tips &amp; Tricks section, and new filters to the
					TikTok filters section!
				</div>
			</div>
			<form onSubmit={handleAddTrend} className="p-4 space-y-3">
				<input
					type="text"
					placeholder="Platform (e.g. Instagram)"
					value={newTrend.platform}
					onChange={(e) =>
						setNewTrend({ ...newTrend, platform: e.target.value })
					}
					className="w-full p-2 rounded"
					required
				/>
				<input
					type="text"
					placeholder="Title"
					value={newTrend.title}
					onChange={(e) => setNewTrend({ ...newTrend, title: e.target.value })}
					className="w-full p-2 rounded"
					required
				/>
				<textarea
					placeholder="Description"
					value={newTrend.description}
					onChange={(e) =>
						setNewTrend({ ...newTrend, description: e.target.value })
					}
					className="w-full p-2 rounded"
					required
				/>
				<button
					type="submit"
					disabled={isSubmitting}
					className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
				>
					{isSubmitting ? "Adding..." : "Add Trend"}
				</button>
			</form>

			<div className="min-h-screen pb-16 px-4 max-w-7xl mx-auto">
				<div className="w-full grid md:grid-cols-3 grid-cols-1 gap-8 items-stretch justify-center">
					<div className="w-full rounded-xl h-[640px] bg-slate-400">
						<div className="bg-slate-500 relative w-full flex flex-row items-center justify-center px-4 h-fit text-xl py-2 rounded-t-xl">
							<div className="inline-block self-center">Trends</div>
							<button className="bg-lavender-300 p-0.5 absolute right-2 inline text-white">
								<PlusIcon className="w-6 h-6" />
							</button>
						</div>
					</div>
					<div className="w-full rounded-xl h-[640px] bg-slate-400">
						<div className="bg-slate-500 relative w-full flex flex-row items-center justify-center px-4 h-fit text-xl py-2 rounded-t-xl">
							<div className="inline-block self-center">Tips &amp; Tricks</div>
							<button className="bg-lavender-300 p-0.5 absolute right-2 inline text-white">
								<PlusIcon className="w-6 h-6" />
							</button>
						</div>
					</div>
					<div className="w-full rounded-xl h-[640px] bg-slate-400">
						<div className="bg-slate-500 relative w-full flex flex-row items-center justify-center px-4 h-fit text-xl py-2 rounded-t-xl">
							<div className="inline-block self-center">TikTok Filters</div>
							<button className="bg-lavender-300 p-0.5 absolute right-2 inline text-white">
								<PlusIcon className="w-6 h-6" />
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AdminDash;
