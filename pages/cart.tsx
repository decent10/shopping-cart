import React from 'react';
import Navbar from '../components/Navbar';
import { useProduct } from '../contexts/ProductsContext';

const Test = () => {
  const { cart } = useProduct();

  return (
    <>
      <Navbar />
      <main className="container mx-auto mt-5">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-indigo-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-indigo-200">
                <thead className="bg-indigo-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-indigo-500 uppercase tracking-wider"
                    >
                      ID
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-indigo-500 uppercase tracking-wider"
                    >
                      Product Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-indigo-500 uppercase tracking-wider"
                    >
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-indigo-200">
                  {cart.map((item, index) => (
                    <tr key={index}>
                      <td>
                        <div className=" px-1 text-sm font-medium text-indigo-900">
                          {item.id}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img
                              className="h-10 w-10 border-2 border-indigo-600 rounded-full"
                              src={item.variants[0].image.src}
                              alt=""
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-indigo-900">
                              {item.metadata.accentuate.mainTitle}
                            </div>
                            <div className="text-sm text-indigo-500">
                              {item.metadata.accentuate.subTitle}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="text-sm flex items-center font-medium text-indigo-900">
                          {item.variants[0].priceV2.amount}
                        </div>
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td colSpan={2} className=" border border-r-3 ">
                      <div className="p-3 text-3xl font-medium">
                        Total Price
                      </div>
                    </td>
                    <td>
                      <div className="flex text-3xl p-2 items-center">
                        <svg
                          className="h-8 mr-1 text-indigo-400"
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
                        </svg>{' '}
                        {cart
                          .reduce(
                            (total, current) =>
                              total +
                              parseFloat(current.variants[0].priceV2.amount),
                            0
                          )
                          .toFixed(2)}
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Test;
