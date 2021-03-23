import { useProduct } from '../contexts/ProductsContext';

const Navbar = () => {
  const { cart } = useProduct();
  return (
    <nav className="bg-white shadow" role="navigation">
      <div className="container mx-auto p-4 flex flex-wrap items-center md:flex-no-wrap">
        <div className="mr-4 md:mr-8">
          <a href="#" rel="home">
            <img src="./petsdeli-logo.svg" className="h-12" />
          </a>
        </div>
        <div className="ml-auto md:hidden">
          <button
            className="flex items-center px-3 py-2 border rounded"
            type="button"
          ></button>
        </div>
        <div className="w-full md:w-auto md:flex-grow md:flex md:items-center">
          <ul className="flex flex-col mt-4 -mx-4 pt-4 border-t md:flex-row md:items-center md:mx-0 md:ml-auto md:mt-0 md:pt-0 md:border-0">
            <li>
              <a
                href="#"
                role="button"
                className="relative flex block px-4 py-1 md:p-2 lg:px-4"
              >
                <svg
                  className="flex-1 w-8 h-8 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
                </svg>
                {cart.length > 0 ? (
                  <span className="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
                    {cart.length}
                  </span>
                ) : null}
              </a>
            </li>
            <li>
              <a
                className="block px-4 py-1 md:p-2 lg:px-4 text-purple-600"
                href="#"
                title="Active Link"
              >
                Active Link
              </a>
            </li>
            <li>
              <a
                className="block px-4 py-1 md:p-2 lg:px-4"
                href="#"
                title="Link"
              >
                Link
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
