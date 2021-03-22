type PropTypes = {
  image: string;
  title: string;
  text: string;
  onView?: () => void;
  onAddToCart?: () => void;
};

const Card = ({ image, title, text }: PropTypes) => {
  return (
    <div className="overflow-hidden flex flex-col card rounded-lg shadow-lg xs:mx-2">
      <img alt={title} className="block h-3/4  w-full" src={image} />
      <div className="flex items-center justify-between h-1/3 overflow-hidden leading-tight p-2 md:p-4">
        <h3 className="text-lg font-bold line-clamp-2">{title}</h3>
      </div>

      <div className="flex items-center justify-between leading-none p-2 pb-4">
        <p className="ml-2 text-sm flex items-center">
          <svg
            className="h-5 mr-1"
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
          {text}
        </p>
      </div>
    </div>
  );
};

export default Card;
