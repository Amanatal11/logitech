import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Package, Truck, User, LogOut, Map, ChevronLeft, ChevronRight } from 'lucide-react';
import useAuthStore from '../store/useAuthStore';
import { cn } from '../utils/cn';
import ThemeToggle from './ThemeToggle';

const Sidebar = ({ isCollapsed, toggleSidebar }) => {
    const { user, logout } = useAuthStore();

    const links = [
        { name: 'Dashboard', to: '/dashboard', icon: LayoutDashboard, roles: ['admin'] },
        { name: 'Shipments', to: '/shipments', icon: Package, roles: ['admin'] },
        { name: 'Driver Panel', to: '/driver', icon: Truck, roles: ['driver'] },
        { name: 'Track Package', to: '/track', icon: Map, roles: ['admin', 'driver', 'public'] }, // Public can't see sidebar usually, but good to have
        { name: 'Profile', to: '/profile', icon: User, roles: ['admin', 'driver'] },
    ];

    const filteredLinks = links.filter(link =>
        !link.roles || (user && link.roles.includes(user.role))
    );

    return (
        <div className={cn(
            "h-screen bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col hidden md:flex transition-all duration-300",
            isCollapsed ? "w-20" : "w-64"
        )}>
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
                <h1 className={cn("text-2xl font-bold text-primary-600 flex items-center gap-2", isCollapsed && "justify-center")}>
                    <Truck className="w-8 h-8" />
                    {!isCollapsed && <span>LogiTrack</span>}
                </h1>
                {!isCollapsed && (
                    <button onClick={toggleSidebar} className="p-1 hover:bg-gray-100 rounded-full">
                        <ChevronLeft className="w-5 h-5 text-gray-500" />
                    </button>
                )}
            </div>

            {isCollapsed && (
                <div className="flex justify-center py-2 border-b border-gray-200">
                    <button onClick={toggleSidebar} className="p-1 hover:bg-gray-100 rounded-full">
                        <ChevronRight className="w-5 h-5 text-gray-500" />
                    </button>
                </div>
            )}

            <nav className="flex-1 p-4 space-y-1">
                {filteredLinks.map((link) => (
                    <NavLink
                        key={link.to}
                        to={link.to}
                        className={({ isActive }) =>
                            cn(
                                "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                                isActive
                                    ? "bg-primary-50 text-primary-700 font-medium dark:bg-primary-900/20 dark:text-primary-400"
                                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200",
                                isCollapsed && "justify-center px-2"
                            )
                        }
                        title={isCollapsed ? link.name : ''}
                    >
                        <link.icon className="w-5 h-5" />
                        {!isCollapsed && link.name}
                    </NavLink>
                ))}
            </nav>

            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                <div className={cn("flex px-4 mb-2", isCollapsed ? "justify-center" : "justify-end")}>
                    <ThemeToggle />
                </div>
                <div className={cn("flex items-center gap-3 px-4 py-3 mb-2", isCollapsed && "justify-center px-0")}>
                    <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold shrink-0">
                        {user?.name?.charAt(0) || 'U'}
                    </div>
                    {!isCollapsed && (
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">{user?.name}</p>
                            <p className="text-xs text-gray-500 truncate capitalize">{user?.role}</p>
                        </div>
                    )}
                </div>
                <button
                    onClick={logout}
                    className={cn(
                        "w-full flex items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors",
                        isCollapsed && "justify-center px-2"
                    )}
                    title={isCollapsed ? "Logout" : ""}
                >
                    <LogOut className="w-5 h-5" />
                    {!isCollapsed && "Logout"}
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
