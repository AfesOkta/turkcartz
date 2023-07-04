import { Link } from "react-router-dom";
import { path } from "src/constants/path.enum";
import useSearchProducts from "src/hooks/useSearchProducts";
import { ShopeeLogoIcon } from "../Icon";
import MainNavbar from "./MainNavbar";

const CartNavbar = () => {
  const { handleSearch, register } = useSearchProducts();

  return (
    <div className="border-b border-b-black/10">
      <MainNavbar bottomCropped={true} />
      <div className="py-6 bg-white">
        <div className="container">
          <nav className="flex flex-col items-center justify-center md:flex-row md:justify-between">
            <Link
              to={path.home}
              className="flex items-end flex-shrink-0"
            >
              <div>
                <ShopeeLogoIcon fillColor="primary"></ShopeeLogoIcon>
              </div>
              <div className="mx-4 h-6 w-[1px] bg-primary md:h-8" />
              <div className="capitalize text-primary md:text-xl">Giỏ hàng</div>
            </Link>
            <form
              className="mt-3 w-full md:mt-0 md:w-[50%]"
              onSubmit={handleSearch}
            >
              <div className="flex border-2 rounded-sm border-primary">
                <input
                  type="text"
                  className="flex-grow w-full px-3 py-1 text-black bg-transparent border-none outline-none"
                  placeholder="Searching....."
                  {...register("search")}
                />
                <button className="flex-shrink-0 px-8 py-2 rounded-sm bg-primary hover:opacity-90">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 stroke-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default CartNavbar;
