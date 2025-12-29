import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { DashboardIcon, PlusIcon } from "@radix-ui/react-icons";
import { BellIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProfileImage from "@/assets/postlogo.jpg";
import { Input } from "@/components/ui/input";
import Notification from "@/components/custom/Notification"; // Import the Notification component

function AdminPanelSidebar() {
	const [isNotificationVisible, setNotificationVisible] = useState(false);

	return (
		<SidebarProvider>
			<AppSidebar /> {/* Sidebar for navigation links */}
			<main className="w-full min-h-screen max-h-full overflow-hidden lg:p-3 bg-gray-100">
				<div className="w-full mt-2 lg:mb-5 grid grid-cols-1 lg:grid-cols-3 items-center justify-between bg-white p-3 rounded-3xl shadow-md">
					{/* Sidebar Trigger and Title */}
					<div className="flex items-center gap-3 col-span-1 lg:col-span-2">
						<div className="mx-3  rounded-full bg-white p-1 hover:bg-red-700 hover:text-white">
							<SidebarTrigger />
						</div>
						<div className="flex items-center gap-3">
							<div className="h-full bg-red-700 text-white p-3 rounded-full">
								<DashboardIcon />
							</div>
							<p className="font-bold text-lg">
								 <span className="font-normal">Dashboard</span>
							</p>
						</div>
					</div>

					{/* Notifications, Search Bar, and Profile */}
					<div className="flex items-center justify-end gap-4 col-span-1 hidden lg:flex">
						{/* Add Post Button */}
						<Button
							className="bg-transparent shadow-none border-2 text-black hover:bg-blue-400 hover:text-white rounded-full p-3"
							title="Add New Post"
						>
							<PlusIcon />
						</Button>

						{/* Profile and Notifications */}
						<div className="flex gap-3 items-center">
							<img
								src={ProfileImage}
								alt="Profile"
								width={45}
								className="rounded-full"
							/>
							<div
								className="rounded-full border-2 p-3 cursor-pointer"
								onClick={() => setNotificationVisible(!isNotificationVisible)}
								title="Notifications"
							>
								<BellIcon height={18} width={18} />
							</div>
						</div>

						{/* Search Bar */}
						<Input
							placeholder="Search posts..."
							className="flex-grow mx-9 border-none shadow-none text-xs placeholder:text-gray-500"
						/>
					</div>
				</div>

				{/* Notification Dropdown */}
				<Notification isVisible={isNotificationVisible} />

				{/* Main Content Area */}
				<Outlet />
			</main>
		</SidebarProvider>
	);
}

export default AdminPanelSidebar;
