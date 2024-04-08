import React from "react";

export default function Cart() {
  return (
    <>
      <div class="container mx-auto mt-5 overflow-x-auto overflow-y-hidden">
        <table class="table-auto w-full cursor-pointer mb-2">
          <thead class="text-green-500 text-xl border-b border-gray-200">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Option</th>
              <th scope="col">Amount</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
        <div>
          <button className="px-7 py-3 bg-green-500 hover:bg-green-600 rounded transition duration-150 ease-in-out">
            Check Out
          </button>
        </div>
      </div>
    </>
  );
}
