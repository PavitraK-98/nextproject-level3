import React from "react";
import { useState } from "react";
import { MdEdit, MdDelete } from "react-icons/md";

//-----------------------------------------------------------------
const TABLE_HEAD = [
  {
    id:1,
    title: "First Name",
  },
  {  
    id:2,
    title:"Last Name",
  },
  {
    id:3,
    title:"Contact",
  },
  {
    id:4,
    title:"Address",
  },
  {
    id:5,
    title:"Reference",
  },
  {
    id:6
  }
];

//-----------------------------------------------------------------

function Record() {
  const [values, setValues] = useState({});
  const [tableValues, setTableValues] = useState([]);

  const handleSubmit = (e) => {
    setTableValues([...tableValues, values]);
    e.preventDefault();
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  console.log(values, "ppppppppppppp", tableValues);

  //----------------------------------------------------
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="flex flex-col text-black dark:text-white space-y-3 px-2">

        <div className="px-4 py-4 border-black border-b-2 flex justify-center items-center">
          <div className=" container mx-auto rounded border-slate-300 border-2 px-4 py-2 justify-center items-center">
            <p className="font-bold text-xl flex justify-center items-center mb-2">
              Fill the form
            </p>
            <div>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-2">
                  <div className="w-11/12">
                    <label className="block text-sm font-bold mb-1">
                      Firstname
                    </label>
                    <input
                      name="first"
                      type="text"
                      required
                      className="form-input min-w-full py-2 px-2 bg-gray-200 dark:bg-gray-200 border-slate-50 border-1"
                      placeholder="Enter your first name here..."
                      value={values.firstname}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="w-11/12">
                    <label className="block text-sm font-bold mb-1">
                      Lastname
                    </label>
                    <input
                      name="last"
                      type="text"
                      required
                      className="form-input min-w-full py-2 px-2 bg-gray-200 dark:bg-gray-200 border-slate-50 border-1"
                      placeholder="Enter your last name here..."
                      value={values.lastname}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="w-11/12">
                    <label className="block text-sm font-bold mb-1">
                      Contact no
                    </label>
                    <input
                      name="contact"
                      type="number"
                      required
                      className="form-input min-w-full py-2 px-2 bg-gray-200 dark:bg-gray-200 border-slate-50 border-1"
                      placeholder="Enter your contact number here..."
                      value={values.contact}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="w-11/12">
                    <label className="block text-sm font-bold mb-1">
                      Address
                    </label>
                    <input
                      name="address"
                      type="text"
                      required
                      className="form-input min-w-full py-2 px-2 bg-gray-200 dark:bg-gray-200 border-slate-50 border-1"
                      placeholder="Enter your address here..."
                      value={values.address}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="w-11/12">
                    <label className="block text-sm font-bold mb-1">
                      Reference by
                    </label>
                    <input
                      name="reference"
                      type="text"
                      required
                      className="form-input min-w-full py-2 px-2 bg-gray-200 dark:bg-gray-200 border-slate-50 border-1"
                      placeholder="Enter your refrence name here..."
                      value={values.reference}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="mb-2 flex justify-end items-center space-x-3">
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

        <div className="px-4 py-4 flex justify-center items-center">
          <div className="container mx-auto rounded">
            <table className="w-full min-w-max table-auto text-left border-2 border-slate-500 dark:border-slate-100">
              <thead>
                <tr className="border-b-2 border-slate-500 dark:border-slate-100">
                  {TABLE_HEAD.map((head) => (
                    <th
                      key={head.id}
                      className="p-2 bg-gray-200 dark:bg-gray-900 border-r-2 border-slate-500 dark:border-slate-100"
                    >
                      <p className="font-bold text-black dark:text-white">
                        {head.title}
                      </p>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="overflow-y-auto max-h-80">
                {tableValues.map(
                  ({ first, last, contact, address, reference }) => {
                    return (
                      <tr key={first} className="border-b-2 border-slate-500 dark:border-slate-100">
                        <td className="text-black dark:text-white bg-white dark:bg-gray-900 p-2 border-r-2 border-slate-500 dark:border-slate-100">
                          <p className="font-medium">{first}</p>
                        </td>
                        <td className="text-black dark:text-white bg-white dark:bg-gray-900 p-2 border-r-2 border-slate-500 dark:border-slate-100">
                          <p className="font-medium">{last}</p>
                        </td>
                        <td className="text-black dark:text-white bg-white dark:bg-gray-900 p-2 border-r-2 border-slate-500 dark:border-slate-100">
                          <p className="font-medium">{contact}</p>
                        </td>
                        <td className="text-black dark:text-white bg-white dark:bg-gray-900 p-2 border-r-2 border-slate-500 dark:border-slate-100">
                          <p className="font-medium">{address}</p>
                        </td>
                        <td className="text-black dark:text-white bg-white dark:bg-gray-900 p-2 border-r-2 border-slate-500 dark:border-slate-100">
                          <p className="font-medium">{reference}</p>
                        </td>
                        <td className="text-black dark:text-white bg-white dark:bg-gray-900 p-2">
                          <div className="flex flex-row space-x-2">
                            <MdEdit style={{fontSize:'1.4rem'}} />
                            <MdDelete style={{fontSize:'1.4rem'}} />
                          </div>
                        </td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Record;
