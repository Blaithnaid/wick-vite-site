import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useAuth } from "../contexts/AuthContext";
import { db } from "../firebase";
import {
	doc,
	getDoc,
	addDoc,
	deleteDoc,
	collection,
	serverTimestamp,
	onSnapshot,
} from "firebase/firestore";
import { PlusIcon, XMarkIcon } from "@heroicons/react/24/solid";

const AdminDash = () => {
	const { currentUser } = useAuth();
	const [newTrend, setNewTrend] = useState({
		platform: "",
		title: "",
		description: "",
	});
	const [newTip, setNewTip] = useState({
		platform: "",
		title: "",
		youtubeUrl: "",
	});
	const [newFilter, setNewFilter] = useState({
		title: "",
		tiktokUrl: "",
	});
	const [trends, setTrends] = useState([]);
	const [tips, setTips] = useState([]);
	const [filters, setFilters] = useState([]);

	const [isLoading, setIsLoading] = useState(true);
	const [isAdmin, setIsAdmin] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [form, setForm] = useState("Trends");

	useEffect(() => {
		const fetchUserData = async () => {
			if (currentUser) {
				const userDoc = await getDoc(doc(db, "users", currentUser.uid));
				if (userDoc.exists() && userDoc.data().isAdmin) {
					setIsAdmin(true);
				}
			}
			setIsLoading(false);
		};
		fetchUserData();
	}, [currentUser]);

	useEffect(() => {
		const unsubscribe = onSnapshot(collection(db, "trends"), (snapshot) => {
			const trendsData = snapshot.docs.map((doc) => ({
				id: doc.id,
				...doc.data(),
			}));
			setTrends(trendsData);
		});
		return () => unsubscribe(); // Cleanup listener on unmount
	}, []);

	const handleSetForm = (e, formName) => {
		e.preventDefault();
		setForm(formName);
	};

	const handleAddTrend = async (e) => {
		e.preventDefault();
		if (!isAdmin) {
			alert("You do not have permission to perform this action.");
			return;
		}
		setIsSubmitting(true);
		try {
			await addDoc(collection(db, "trends"), {
				platform: newTrend.platform,
				title: newTrend.title,
				description: newTrend.description,
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

	const handleDeleteTrend = async (id) => {
		if (!isAdmin) {
			alert("You do not have permission to perform this action.");
			return;
		}
		try {
			await deleteDoc(doc(db, "trends", id));
			alert("Trend deleted successfully!");
		} catch (err) {
			console.error("Error deleting trend:", err);
			alert("Something went wrong.");
		}
	};

	const handleAddTip = async (e) => {
		e.preventDefault();
		if (!isAdmin) {
			alert("You do not have permission to perform this action.");
			return;
		}
		setIsSubmitting(true);
		try {
			await addDoc(collection(db, "tips"), {
				platform: newTip.platform,
				title: newTip.title,
				youtubeUrl: newTip.youtubeUrl,
				createdAt: serverTimestamp(),
			});
			alert("Tip added successfully!");
			setNewTip({ platform: "", title: "", youtubeUrl: "" });
		} catch (err) {
			console.error("Error adding tip:", err);
			alert("Something went wrong.");
		}
		setIsSubmitting(false);
	};

	const handleDeleteTip = async (id) => {
		if (!isAdmin) {
			alert("You do not have permission to perform this action.");
			return;
		}
		try {
			await deleteDoc(doc(db, "tips", id));
			alert("Trend deleted successfully!");
		} catch (err) {
			console.error("Error deleting trend:", err);
			alert("Something went wrong.");
		}
	};

	const handleAddFilter = async (e) => {
		e.preventDefault();
		if (!isAdmin) {
			alert("You do not have permission to perform this action.");
			return;
		}
		setIsSubmitting(true);
		try {
			await addDoc(collection(db, "filters"), {
				title: newFilter.title,
				tiktokUrl: newFilter.tiktokUrl,
				createdAt: serverTimestamp(),
			});
			alert("Filter added successfully!");
			setNewFilter({ title: "", tiktokUrl: "" });
		} catch (err) {
			console.error("Error adding filter:", err);
			alert("Something went wrong.");
		}
		setIsSubmitting(false);
	};

	const handleDeleteFilter = async (id) => {
		if (!isAdmin) {
			alert("You do not have permission to perform this action.");
			return;
		}
		try {
			await deleteDoc(doc(db, "filters", id));
			alert("Trend deleted successfully!");
		} catch (err) {
			console.error("Error deleting trend:", err);
			alert("Something went wrong.");
		}
	};

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (!isAdmin) {
		return <div>You do not have permission to access this page.</div>;
	}

	return (
		<>
			<Header />
			<div className="pt-32 my-4 text-black flex flex-col items-center">
				<h1 className="text-3xl">Admin Dashboard</h1>
				<div className="my-6 max-w-2xl px-8 text-pretty">
					You can use these forms to add new Trends to the Trends page in-app,
					new videos to the Tips &amp; Tricks section, and new filters to the
					TikTok filters section!
				</div>
				<div className="max-w-2xl rounded-lg flex flex-col items-center border-2 bg-slate-400 border-slate-500">
					<div className="flex flex-row gap-2 mt-2">
						<button
							className={`bg-slate-200 ${form === "Tips" ? "font-bold underline" : ""}`}
							onClick={(e) => handleSetForm(e, "Tips")}
						>
							Tips & Tricks
						</button>
						<button
							className={`bg-slate-200 ${form === "Trends" ? "font-bold underline" : ""}`}
							onClick={(e) => handleSetForm(e, "Trends")}
						>
							Trends
						</button>
						<button
							className={`bg-slate-200 ${form === "Filters" ? "font-bold underline" : ""}`}
							onClick={(e) => handleSetForm(e, "Filters")}
						>
							TikTok Filters
						</button>
					</div>

					{form === "Trends" && (
						<form
							onSubmit={handleAddTrend}
							className="self-center p-4 space-y-3"
						>
							<select
								value={newTrend.platform}
								onChange={(e) =>
									setNewTrend({ ...newTrend, platform: e.target.value })
								}
								className="bg-slate-300 w-full p-2 rounded"
								required
							>
								<option value="">Select platform</option>
								<option value="TikTok">TikTok</option>
								<option value="X">X</option>
								<option value="Instagram">Instagram</option>
								<option value="Twitch">Twitch</option>
								<option value="Facebook">Facebook</option>
							</select>
							<input
								type="text"
								placeholder="Title"
								value={newTrend.title}
								onChange={(e) =>
									setNewTrend({ ...newTrend, title: e.target.value })
								}
								className="bg-slate-300 w-full p-2 rounded"
								required
							/>
							<textarea
								placeholder="Description"
								value={newTrend.description}
								onChange={(e) =>
									setNewTrend({ ...newTrend, description: e.target.value })
								}
								className="bg-slate-300 w-full p-2 rounded"
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
					)}

					{form === "Tips" && (
						<form onSubmit={handleAddTip} className="self-center p-4 space-y-3">
							<select
								value={newTrend.platform}
								onChange={(e) =>
									setNewTrend({ ...newTrend, platform: e.target.value })
								}
								className="bg-slate-300 w-full p-2 rounded"
								required
							>
								<option value="">Select platform</option>
								<option value="Instagram">Instagram</option>
								<option value="TikTok">TikTok</option>
								<option value="YouTube">YouTube</option>
							</select>
							<input
								type="text"
								placeholder="Title"
								value={newTrend.title}
								onChange={(e) =>
									setNewTrend({ ...newTrend, title: e.target.value })
								}
								className="bg-slate-300 w-full p-2 rounded"
								required
							/>
							<input
								type="url"
								placeholder="YouTube URL"
								value={newTrend.youtubeUrl}
								onChange={(e) =>
									setNewTrend({ ...newTrend, youtubeUrl: e.target.value })
								}
								className="bg-slate-300 w-full p-2 rounded"
								required
							/>
							<button
								type="submit"
								disabled={isSubmitting}
								className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
							>
								{isSubmitting ? "Adding..." : "Add Tip"}
							</button>
						</form>
					)}

					{form === "Filters" && (
						<form
							onSubmit={handleAddFilter}
							className="self-center p-4 space-y-3"
						>
							<input
								type="text"
								placeholder="Title"
								value={newTrend.title}
								onChange={(e) =>
									setNewTrend({ ...newTrend, title: e.target.value })
								}
								className="bg-slate-300 w-full p-2 rounded"
								required
							/>
							<input
								type="url"
								placeholder="TikTok Link"
								value={newTrend.tiktokUrl}
								onChange={(e) =>
									setNewTrend({ ...newTrend, tiktokUrl: e.target.value })
								}
								className="bg-slate-300 w-full p-2 rounded"
								required
							/>
							<button
								type="submit"
								disabled={isSubmitting}
								className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
							>
								{isSubmitting ? "Adding..." : "Add Filter"}
							</button>
						</form>
					)}
				</div>
			</div>

			<div className="min-h-screen pb-16 px-4 max-w-7xl mx-auto">
				<div className="w-full grid md:grid-cols-3 grid-cols-1 gap-4 items-stretch justify-center">
					<div className="w-full rounded-xl min-h-[640px] h-fit pb-2 bg-slate-400">
						<div className="bg-slate-500 relative w-full flex flex-row items-center justify-center px-4 h-fit text-xl py-2 rounded-t-xl">
							<div className="inline-block self-center">Trends</div>
						</div>
						<div className="px-2 space-y-2 pt-2">
							{trends.map((trend) => (
								<div
									key={trend.id}
									className="bg-slate-300 p-2 relative rounded shadow flex justify-between items-center"
								>
									<div>
										<h3 className="font-bold text-left">{trend.title}</h3>
										<p className="text-sm text-left text-gray-600">
											{trend.description}
										</p>
										<p className="text-xs text-left text-gray-500">
											Platform: {trend.platform}
										</p>
									</div>
									<button
										onClick={() => handleDeleteTrend(trend.id)}
										className="bg-red-400/60 absolute right-2 top-2 text-white p-1 rounded hover:bg-red-600"
									>
										<XMarkIcon className="h-4 w-4" />
									</button>
								</div>
							))}
						</div>
					</div>
					<div className="w-full rounded-xl min-h-[640px] h-fit pb-2 bg-slate-400">
						<div className="bg-slate-500 relative w-full flex flex-row items-center justify-center px-4 h-fit text-xl py-2 rounded-t-xl">
							<div className="inline-block self-center">Tips &amp; Tricks</div>
						</div>
					</div>
					<div className="w-full rounded-xl min-h-[640px] h-fit pb-2 bg-slate-400">
						<div className="bg-slate-500 relative w-full flex flex-row items-center justify-center px-4 h-fit text-xl py-2 rounded-t-xl">
							<div className="inline-block self-center">TikTok Filters</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AdminDash;
