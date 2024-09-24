"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button"; // Import the Button component
import '../app/globals.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 py-6 bg-white z-50"> {/* Fixed navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Company Name */}
        <div className="flex items-center">
          <Link href="/" className="text-black font-bold text-2xl mr-2">
            DamnData.
          </Link>
        </div>
        <div className="md:hidden flex items-center">
          <button
            className="text-sm text-black"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex">
          <NavigationMenu className="text-black">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={navigationMenuTriggerStyle()}
                  >
                    <span className="text-black">About</span>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={navigationMenuTriggerStyle()}
                  >
                    <span className="text-black">Contact</span>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/testimonial" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={navigationMenuTriggerStyle()}
                  >
                    <span className="text-black">Testimonials</span>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-black">Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[400px] lg:grid-cols-[.75fr_1fr] text-black bg-white">
                    <ListItem
                      href="/dataanalytics"
                      title="Data Analysis"
                      className="hover:bg-black/20"
                    />
                    <ListItem
                      href="/aiml"
                      title="AI/ML Product"
                      className="hover:bg-black/20"
                    />
                    <ListItem
                      href="/chatbots"
                      title="Chatbots"
                      className="hover:bg-black/20"
                    />
                    <ListItem
                      href="/growth"
                      title="Org. Growth"
                      className="hover:bg-black/20"
                    />
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Book Now Button */}
        <div className="flex space-x-2">
          <Link href="/book">
            <Button variant="default" className="text-white hover:bg-red-500 transition">
              Book Now
            </Button>
          </Link>

          <Link href="/checkout">
            <Button variant="default" className="text-white hover:bg-red-500 transition">
              Checkout More
            </Button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden ${
            isMenuOpen ? "block" : "hidden"
          } bg-white p-4 mt-4 rounded-lg`}
        >
          <Link href="/about" className="block text-sm text-black hover:text-gray-600 py-2">
            About
          </Link>
          <Link href="/contact" className="block text-sm text-black hover:text-gray-600 py-2">
            Contact
          </Link>
          <Link href="/testimonial" className="block text-sm text-black hover:text-gray-600 py-2">
            Testimonial
          </Link>
          <Link href="/dataanalytics" className="block text-sm text-black hover:text-gray-600 py-2">
            Data Analysis
          </Link>
          <Link href="/aiml" className="block text-sm text-black hover:text-gray-600 py-2">
            AI/ML
          </Link>
          <Link href="/chatbots" className="block text-sm text-black hover:text-gray-600 py-2">
            Chatbots
          </Link>
          <Link href="/growth" className="block text-sm text-black hover:text-gray-600 py-2">
            Org. Growth
          </Link>
        </div>
      </div>
    </header>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ${className}`}
          {...props}
        >
          <div className="text-sm font-medium leading-none text-black">{title}</div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Navbar;
