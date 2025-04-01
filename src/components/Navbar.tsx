const Navbar = () => {
  return (
    <>
      <nav className="absolute w-full">
        <div className="flex flex-wrap items-center justify-between mx-auto p-8">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="/images/jas_logo.png"
              className="h-14"
              alt="Flowbite Logo"
            />
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-zinc-500 rounded-lg md:hidden hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-zinc-200 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:focus:ring-zinc-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white bg-zinc-700 rounded-sm md:bg-transparent md:text-zinc-700 md:p-0 dark:text-white md:dark:text-zinc-500"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-zinc-900 rounded-sm hover:bg-zinc-100 md:hover:bg-transparent md:border-0 md:hover:text-zinc-700 md:p-0 dark:text-white md:dark:hover:text-zinc-500 dark:hover:bg-zinc-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-zinc-900 rounded-sm hover:bg-zinc-100 md:hover:bg-transparent md:border-0 md:hover:text-zinc-700 md:p-0 dark:text-white md:dark:hover:text-zinc-500 dark:hover:bg-zinc-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-zinc-900 rounded-sm hover:bg-zinc-100 md:hover:bg-transparent md:border-0 md:hover:text-zinc-700 md:p-0 dark:text-white md:dark:hover:text-zinc-500 dark:hover:bg-zinc-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-zinc-900 rounded-sm hover:bg-zinc-100 md:hover:bg-transparent md:border-0 md:hover:text-zinc-700 md:p-0 dark:text-white md:dark:hover:text-zinc-500 dark:hover:bg-zinc-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
