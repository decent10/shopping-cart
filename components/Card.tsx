type PropTypes = {
  image: string;
  title: string;
  text: string;
  price: string;
  onView?: () => void;
  onAddToCart?: () => void;
};

const Card = ({ image, title, text, price, onAddToCart }: PropTypes) => {
  return (
    <div className="relative overflow-hidden flex flex-col card rounded-lg shadow-xl border border-gray-200 xs:mx-2">
      <img alt={title} className="block h-3/4  w-full" src={image} />
      <div className="flex items-center justify-between h-1/3 overflow-hidden leading-tight p-2 md:p-4">
        <h3 className="text-xl text-gray-800 font-medium mr-auto line-clamp-2">
          {title}
        </h3>
      </div>
      <div className="flex p-2 md:p-4">
        <span className="title-font font-medium text-2xl text-gray-900">
          $58.00
        </span>
        <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
          View Details
        </button>
        <button
          onClick={onAddToCart}
          className="absolute bg-black bg-indigo-500 hover:bg-indigo-600 flex h-8 items-center justify-center right-1.5 rounded-3xl top-0 top-1.5 w-8"
        >
          <svg
            className="flex h-5 items-center text-center text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Card;
