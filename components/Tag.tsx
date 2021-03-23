const Tag = ({ text }: { text: string }) => (
  <div className="px-2 mx-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-indigo-100 text-indigo-800">
    {text}
  </div>
);

export default Tag;
