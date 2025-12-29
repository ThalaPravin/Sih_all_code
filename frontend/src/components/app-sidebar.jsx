import { Calendar, Home, Inbox, LogOutIcon, PlusIcon, Settings } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link } from "react-router-dom";
import { DashboardIcon } from "@radix-ui/react-icons";
import { MdDeviceHub, MdEditDocument, MdNotifications, MdOutlineAnalytics } from "react-icons/md";
import { AiOutlineMessage } from "react-icons/ai"; // Complaint management icon
import { useDispatch } from "react-redux";
import { useState } from "react";

// Menu items with updated options.
const items = [
  {
    id: 0,
    title: "Dashboard",
    url: "/dashboard",
    icon: DashboardIcon,
  },
  {
    id: 1,
    title: "Delivery",
    url: "/delivery",
    icon: MdEditDocument,
  },
  {
    id: 2,
    title: "Schedule",
    url: "/schedules",
    icon: Calendar,
  },
  {
    id: 3,
    title: "QR Management",
    url: "/qr-management",
    icon: MdDeviceHub,
  },
  {
    id: 4,
    title: "Assign Delivery",
    url: "/assign-delivery",
    icon: Inbox,
  },
  {
    id: 5,
    title: "Manage Postmen",
    url: "/postman-management",
    icon: PlusIcon,
  },
  {
    id: 6,
    title: "Reports & Analytics",
    url: "/report-and-analytics",
    icon: MdOutlineAnalytics,
  },
  {
    id: 7,
    title: "Notification Center",
    url: "/notifications",
    icon: MdNotifications,
  },
  {
    id: 8,
    title: "Manage Complaints",
    url: "/manage-complaints",
    icon: AiOutlineMessage, // This already points to ManageComplaints
  },
];

export function AppSidebar() {
  const dispatch = useDispatch();
  const [current, setCurrent] = useState(0);

  return (
    <Sidebar className="bg-gray-100">
      <SidebarContent className="flex flex-col justify-between h-full border">
        {/* Sidebar Header */}
        <SidebarGroup>
          <SidebarGroupLabel className="font-semibold text-3xl my-5 mb-8 ml-5 text-gray-900">
            <Link to={"/"}>Admin Panel</Link>
          </SidebarGroupLabel>
          <SidebarGroupContent className="p-2">
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem
                  key={item.id}
                  className={`flex items-center rounded-lg px-4 py-2 ${
                    current === item.id
                      ? "bg-red-800 hover:bg-red-800 text-white font-semibold"
                      : "bg-transparent hover:bg-red-800 hover:text-white"
                  } transition`}
                  onClick={() => setCurrent(item.id)}
                >
                  <item.icon className="mr-3 h-5 w-5" />
                  <Link to={item.url}>
                    <span className="text-lg">{item.title}</span>
                  </Link>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Sidebar Footer */}
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link
                  to="/logout"
                  className="flex items-center rounded-lg px-4 py-4 mb-5 hover:bg-red-800 hover:text-white transition"
                >
                  <LogOutIcon className="mr-3 h-5 w-5 text-black hover:text-white transition" />
                  <span className="text-lg font-medium text-black hover:text-white transition">
                    Logout
                  </span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
