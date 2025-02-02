import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../assets/wick-logoonly.svg";

const navigation = [
  { name: "HOME", href: "/home" },
  { name: "SHOP", href: "/shop" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#FFFFFF] shadow-md z-50">
      <div className="w-full max-w-[1200px] mx-auto flex items-center justify-between py-2"> {/* Reduced padding to make header smaller */}
        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="text-[#FFFFFF] p-2"
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>

        {/* Centered Navigation */}
        <div className="flex-grow flex justify-center items-center space-x-12"> {/* Reduced space between items */}
          {/* Home link */}
          <a
            href={navigation[0].href}
            className="text-xl text-[#6F6DB2] font-bold hover:text-[#78C288] transition"
          > 
            {navigation[0].name}
          </a>

          {/* Logo */}
          <div className="transform translate-y-4">
            <img
              src={logo}
              alt="WICK Logo"
              className="h-24 w-auto transition-transform duration-300 hover:scale-200 shadow-lg" // Increased scale to 2x on hover
            />
          </div>

          {/* Shop link */}
          <a
            href={navigation[1].href}
            className="text-xl text-[#6F6DB2] font-bold hover:text-[#78C288] transition"
          >
            {navigation[1].name}
          </a>
        </div>

        {/* Right Side - Log In Button */}
        <div className="lg:flex flex-shrink-0">
          <a
            href="/login"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-[#6F6DB2] text-[#FFFFFF] text-sm font-semibold hover:bg-[#78C288] transition"
          >
            Log In
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50 bg-black opacity-75" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-[#1B1B1B] p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <img src={logo} alt="WICK Logo" className="h-8 w-auto" />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#FFFFFF]"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 space-y-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-lg text-[#78C288] hover:text-[#6F6DB2] transition"
              >
                {item.name}
              </a>
            ))}
            <a
              href="/login"
              className="block text-lg text-[#FFFFFF] bg-[#6F6DB2] px-4 py-2 rounded-full text-center hover:bg-[#78C288] transition"
            >
              Log In
            </a>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Header;
