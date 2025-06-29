import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { NavLink } from 'react-router-dom'

function Header(){
    return (
        <>
            <nav className="w-full bg-background border-b border-zinc-600">
                <div className="container flex mx-auto p-4 px-4 lg:px-48 md:px-4 sm:px-4 justify-between items-center">

                    {/* AVATAR IMAGE */}
                    <Avatar className="rounded-none opacity-80 hover:opacity-100">
                        <AvatarImage src="/assets/favicon.png" />
                        <AvatarFallback>FCK</AvatarFallback>
                    </Avatar>

                    {/* NAVIGATION LINKS */}
                    <NavigationMenu>
                        <NavigationMenuList>

                            <NavigationMenuItem>
                                <NavigationMenuLink asChild>
                                    <NavLink
                                        to="/"
                                        className={({ isActive }) => {return isActive ? 'text-zinc-600' : '';}}
                                    >
                                        Projects
                                    </NavLink>
                                </NavigationMenuLink>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuLink asChild>
                                    <NavLink
                                        to="/"
                                        className={({ isActive }) => {return isActive ? 'text-zinc-600' : '';}}
                                    >
                                        Backyard
                                    </NavLink>
                                </NavigationMenuLink>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuLink asChild>
                                    <NavLink
                                        to="/"
                                        className={({ isActive }) => {return isActive ? 'text-zinc-600' : '';}}
                                    >
                                        Blog
                                    </NavLink>
                                </NavigationMenuLink>
                            </NavigationMenuItem>

                        </NavigationMenuList>
                    </NavigationMenu>

                </div>
            </nav>
        </>
    )
}

export default Header
