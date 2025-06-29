import {
  MessageCircle,
  MessageSquareText,
  Settings,
  User,
  Users,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  const sidebarItems = [
    { href: "/chats", icon: MessageCircle, label: "Chats" },
    { href: "/contacts", icon: Users, label: "Contacts" },
  ];
  const bottomItems = [
    { href: "/profile", icon: User, label: "Profile" },
    { href: "/settings", icon: Settings, label: "Settings" },
  ];
  const [selectedLabel, setSelectedLabel] = useState("Chats");
  return (
    <div className="flex h-screen">
      <div className="w-16 bg-gray-200  flex flex-col">
        <div className="flex-1 py-4">
          <div className="flex justify-center mb-6">
            <div className="w-10 h-10 bg-black rounded flex items-center justify-center">
              <MessageSquareText className="w-6 h-6 text-white" />
            </div>
          </div>

          <div className="space-y-1">
            {sidebarItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <button
                  key={index}
                  className={`w-full h-12 flex items-center justify-center transition-colors duration-200 group relative `}
                  title={item.label}
                  onClick={() => setSelectedLabel(item.label)}
                >
                  <Link to={item.href}>
                    <Icon
                      className={`w-6 h-6 ${
                        item.label === selectedLabel
                          ? "text-gray-900"
                          : "text-gray-400"
                      }`}
                    />
                  </Link>
                </button>
              );
            })}
          </div>
        </div>

        <div className="py-4 border-t border-gray-700">
          <div className="space-y-1">
            {bottomItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <button
                  key={index}
                  className={`w-full h-12 flex items-center justify-center transition-colors duration-200 group relative `}
                  title={item.label}
                  onClick={() => setSelectedLabel(item.label)}
                >
                  <Link to={item.href}>
                    <Icon
                      className={`w-6 h-6 ${
                        item.label === selectedLabel
                          ? "text-gray-900"
                          : "text-gray-400"
                      }`}
                    />
                  </Link>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
