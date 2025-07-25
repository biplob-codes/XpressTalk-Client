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

  const allItems = [...sidebarItems, ...bottomItems];

  return (
    <div className="lg:flex lg:h-screen">
      {/* Mobile Bottom Navigation */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-300 z-50">
        <div className="flex justify-around items-center py-2">
          {allItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link
                key={index}
                to={item.href}
                className="flex flex-col items-center justify-center py-2 px-3 min-w-0 flex-1"
                onClick={() => setSelectedLabel(item.label)}
              >
                <Icon
                  className={`w-6 h-6 ${
                    item.label === selectedLabel
                      ? "text-gray-900"
                      : "text-gray-400"
                  }`}
                />
              </Link>
            );
          })}
        </div>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden lg:flex lg:w-16 bg-gray-200 lg:flex-col">
        <div className="flex justify-center py-4">
          <div className="w-10 h-10 bg-black rounded flex items-center justify-center">
            <MessageSquareText className="w-6 h-6 text-white" />
          </div>
        </div>

        <div className="flex flex-col justify-between flex-1">
          <div className="space-y-1">
            {sidebarItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <Link
                  key={index}
                  to={item.href}
                  className="w-full h-12 flex items-center justify-center transition-colors duration-200 group relative block"
                  title={item.label}
                  onClick={() => setSelectedLabel(item.label)}
                >
                  <Icon
                    className={`w-6 h-6 ${
                      item.label === selectedLabel
                        ? "text-gray-900"
                        : "text-gray-400"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          <div className="py-4">
            <div className="space-y-1">
              {bottomItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={index}
                    to={item.href}
                    className="w-full h-12 flex items-center justify-center transition-colors duration-200 group relative block"
                    title={item.label}
                    onClick={() => setSelectedLabel(item.label)}
                  >
                    <Icon
                      className={`w-6 h-6 ${
                        item.label === selectedLabel
                          ? "text-gray-900"
                          : "text-gray-400"
                      }`}
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
