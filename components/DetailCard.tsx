import Tag from './Tag';

type PropTypes = {
  title: string;
  subTitle: string;
  image: string;
  price: string;
  tags: string[];
  onAddToCart?: () => void;
};
const DetailCard = ({ title, subTitle, image, price, tags, onAddToCart }) => (
  <div className="space-y-10 py-3 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
    <div>
      <img src={image} className="object-contain" />
    </div>
    <div className="flex  flex-col justify-center">
      <h1 className="text-3xl my-2 text-indigo-600">{title}</h1>
      <p className="font-normal my-1 text-gray-500 self-sa">{subTitle}</p>
      <div>
        <div className=" flex my-3  text-indigo-400 items-center title-font font-normal text-xl text-gray-900">
          <svg
            className="h-6 mr-1 text-indigo-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14.121 15.536c-1.171 1.952-3.07 1.952-4.242 0-1.172-1.953-1.172-5.119 0-7.072 1.171-1.952 3.07-1.952 4.242 0M8 10.5h4m-4 3h4m9-1.5a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>

          {price}
        </div>
      </div>
      <div>
        {tags.map((tag) => (
          <Tag text={tag} />
        ))}
      </div>
      <div className="py-4">
        <button
          onClick={onAddToCart}
          type="button"
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-xl font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <svg
            className="-ml-1 mr-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          Add to Cart
        </button>
      </div>
    </div>
  </div>
);
export default DetailCard;
