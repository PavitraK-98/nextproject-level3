import React from "react";
import { useState } from "react";
import Image from "next/image";

const EditEmployee = ({ isOpen, onClose, data }) => {
  const [values, setValues] = useState(data || {});

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    e.preventDefault();
    fetch(`https://reqres.in/api/users/${values.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    })
      .then((res) => {
        console.log(res, "delete success response");
        alert(res, "Employee updated successfully!");
      })
      .catch((error) => {
        alert(error, "An error occurred.");
        console.log(error, "update error");
      });
  };

  //-----------------------------------------------------------------

  return (
    <div className=" min-h-full scroll-smooth sm:scroll-auto fixed inset-0 bg-gray-400 bg-opacity-35 flex items-center justify-center z-50 text-black dark:text-black">
      <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg max-w-sm w-full p-6">
        <h2 className="text-xl font-semibold mb-4 flex justify-center items-center">
          Edit Employee details
        </h2>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="w-full flex justify-center items-center">
              <Image
                src={values.avatar}
                alt={values.first_name}
                width={100}
                height={100}
                className="rounded-full"
              />
            </div>
            <div className="flex flex-col gap-2 mb-3">
              <div className="w-full">
                <label className="block text-sm font-bold mb-1">
                  Firstname
                </label>
                <input
                  name="first_name"
                  type="text"
                  className="form-input min-w-full py-2 px-2 bg-gray-200 dark:bg-gray-200 border-slate-50 border-1"
                  placeholder="Enter your first name here..."
                  value={values.first_name}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full">
                <label className="block text-sm font-bold mb-1">Lastname</label>
                <input
                  name="last_name"
                  type="text"
                  className="form-input min-w-full py-2 px-2 bg-gray-200 dark:bg-gray-200 border-slate-50 border-1"
                  placeholder="Enter your last name here..."
                  value={values.last_name}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full">
                <label className="block text-sm font-bold mb-1">Email ID</label>
                <input
                  name="email"
                  type="text"
                  className="form-input min-w-full py-2 px-2 bg-gray-200 dark:bg-gray-200 border-slate-50 border-1"
                  placeholder="Enter your refrence name here..."
                  value={values.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mb-2 flex justify-end items-center space-x-3">
              <button
                className="bg-blue-800 hover:bg-blue-500 dark:bg-blue-800 text-sm p-2 rounded-lg border-inherit text-white dark:text-white"
                onClick={onClose}
              >
                Close
              </button>
              <button
                type="submit"
                className="bg-blue-800 hover:bg-blue-500 dark:bg-blue-800 text-sm p-2 rounded-lg border-inherit text-white dark:text-white"
              >
                submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditEmployee;
