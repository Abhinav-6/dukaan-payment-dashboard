import NavbarList from "./ui/NavbarList";

function Navbar() {
  return (
    <aside className="bg-[#1E2640] w-64 h-screen fixed top-0 left-0" aria-label="Side bar">
      <nav className="text-white flex flex-col  px-4 py-5 h-full justify-between">
        <div className="flex justify-start gap-4 items-center flex-col h-full ">
          <div className="flex w-full gap-4 justify-between items-center">
            <div className="flex items-center gap-2">
              <img className="w-10 h-10 rounded" src="/logo.png" alt="" />
              <div className="flex flex-col ">
                <h3 className="text-lg text-white">Nishyan</h3>
                <a
                  href="#"
                  className="text-sm underline text-gray-200 opacity-80 leading-4"
                >
                  Visit Store
                </a>
              </div>
            </div>
            <div>
              <svg
                className=" w-4 h-4 fill-current text-white"
                viewBox="0 0 15 8"
              >
                <path d="M.793.293a1 1 0 0 1 1.414 0L7.5 5.586 12.793.293a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 0-1.414Z" />
              </svg>
            </div>
          </div>
          <NavbarList />
        </div>
        <div className="w-full bg-[#353C53] rounded flex gap-2 px-2 py-2 items-center">
          <div className="rounded bg-[rgba(255,255,255,0.1)] p-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.00312 3.79727C2.42636 3.79727 1.80313 4.35527 1.80313 5.24727V18.7473C1.80313 19.6393 2.42636 20.1973 3.00312 20.1973H21.0031C21.5799 20.1973 22.2031 19.6393 22.2031 18.7473V15.8473H17.0032C14.8769 15.8473 13.1532 14.1236 13.1532 11.9973C13.1532 9.87097 14.8769 8.14727 17.0032 8.14727H22.2031V5.24727C22.2031 4.35527 21.5799 3.79727 21.0031 3.79727H3.00312ZM23.8031 8.14727V5.24727C23.8031 3.65398 22.6355 2.19727 21.0031 2.19727H3.00312C1.37075 2.19727 0.203125 3.65398 0.203125 5.24727V18.7473C0.203125 20.3405 1.37075 21.7973 3.00312 21.7973H21.0031C22.6355 21.7973 23.8031 20.3405 23.8031 18.7473V15.8473H23.8532V8.14727H23.8031ZM16.0032 11.9473C16.0032 11.4778 16.3837 11.0973 16.8532 11.0973H18.1532C18.6226 11.0973 19.0032 11.4778 19.0032 11.9473C19.0032 12.4167 18.6226 12.7973 18.1532 12.7973H16.8532C16.3837 12.7973 16.0032 12.4167 16.0032 11.9473ZM14.8532 11.9973C14.8532 10.8099 15.8158 9.84727 17.0032 9.84727H22.1532V14.1473H17.0032C15.8158 14.1473 14.8532 13.1847 14.8532 11.9973Z"
                fill="white"
              />
            </svg>
          </div>
          <div>
            <p className="font-light text-sm">Available Credits</p>
            <h3>123.10</h3>
          </div>
        </div>
      </nav>
    </aside>
  );
}

export default Navbar;
