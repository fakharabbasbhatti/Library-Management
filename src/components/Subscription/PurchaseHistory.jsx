import React, { useState } from "react";

const PurchaseHistory = () => {
  const [purchases, setPurchases] = useState([
    { id: 1, name: "George", date: "2024-01-01", price: "$5", quantity: 1 },
    { id: 2, name: "Fitzgerald", date: "2024-02-15", price: "$10", quantity: 2 },
    { id: 3, name: "Austen", date: "2024-03-05", price: "$7", quantity: 1 },
    { id: 4, name: "Salinger", date: "2024-04-20", price: "$12", quantity: 3 },
    { id: 5, name: "Herman", date: "2024-05-11", price: "$8", quantity: 2 },
    { id: 6, name: "Leo", date: "2024-06-01", price: "$6", quantity: 1 },
    { id: 7, name: "Tolkien", date: "2024-07-07", price: "$9", quantity: 1 },
    { id: 8, name: "Aldous", date: "2024-08-18", price: "$11", quantity: 2 },
    { id: 9, name: "Huxley", date: "2024-09-25", price: "$15", quantity: 1 },
    { id: 10, name: "Fyodor", date: "2024-10-30", price: "$20", quantity: 3 },
  ]);

  const [page, setPage] = useState(1);
  const itemsPerPage = 5;

  const paginate = (arr, pageNumber, itemsPerPage) => {
    const start = (pageNumber - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return arr.slice(start, end);
  };

  const currentPurchases = paginate(purchases, page, itemsPerPage);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-2xl sm:text-4xl font-bold text-center text-gray-800 mb-8">
        Purchase History
      </h2>

      {/* Table for Purchase History */}
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100 text-center">
              <th className="border text-nowrap px-4 py-2 text-center">Book Name</th>
              <th className="border text-nowrap px-4 py-2 text-center">Purchase Date</th>
              <th className="border text-nowrap px-4 py-2 text-center">Price</th>
              <th className="border text-nowrap px-4 py-2 text-center">Quantity</th>
              <th className="border text-nowrap px-4 py-2 text-center">Total</th>
            </tr>
          </thead>
          <tbody>
            {currentPurchases.map((purchase) => (
              <tr key={purchase.id} className="text-center">
                <td className="border text-nowrap px-4 py-2">{purchase.name}</td>
                <td className="border text-nowrap px-4 py-2">{purchase.date}</td>
                <td className="border text-nowrap px-4 py-2">{purchase.price}</td>
                <td className="border text-nowrap px-4 py-2">{purchase.quantity}</td>
                <td className="border text-nowrap px-4 py-2">{`$${
                  parseInt(purchase.price.slice(1)) * purchase.quantity
                }`}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-6">
        <button
          onClick={() => setPage(page - 1)}
          className="bg-blue-500 text-white py-2 px-4 rounded-l-lg disabled:bg-gray-400"
          disabled={page === 1}
        >
          Previous
        </button>
        <span className="py-3 px-3 sm:py-2 sm:px-4 text-lg font-semibold text-gray-800">{`Page ${page}`}</span>
        <button
          onClick={() => setPage(page + 1)}
          className="bg-blue-500 text-white py-2 px-4 rounded-r-lg disabled:bg-gray-400"
          disabled={page * itemsPerPage >= purchases.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PurchaseHistory;
