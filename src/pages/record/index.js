import Image from "next/image";
import React from "react";
import { useState, useEffect } from "react";
import { MdEdit, MdDelete } from "react-icons/md";
import EditEmployee from "./EditEmployee";

//-----------------------------------------------------------------
const TABLE_HEAD = [
  {
    id: 1,
    title: "First Name",
  },
  {
    id: 2,
    title: "Last Name",
  },
  {
    id: 3,
    title: "Contact",
  },
  {
    id: 4,
    title: "Address",
  },
  {
    id: 5,
    title: "Reference",
  },
];

const EMP_HEAD = [
  {
    id: 1,
    title: "First Name",
  },
  {
    id: 2,
    title: "Last Name",
  },
  {
    id: 3,
    title: "Email",
  },
  {
    id: 6,
  },
];

//-----------------------------------------------------------------

function Record() {
  const [values, setValues] = useState({});
  const [tableValues, setTableValues] = useState([]);
  const [empData, setEmpData] = useState([]);
  const [empLoading, setEmpLoading] = useState(false);
  const [totalPages, setTotalPages] = useState("");
  const [currentPage, setCurrentPage] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState("");
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [editData, setEditData] = useState({});
  //---------------------------------------------------------

  const handleSubmit = (e) => {
    setTableValues([...tableValues, values]);
    e.preventDefault();
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const fetchEmployee = () => {
    setEmpLoading(true);
    fetch(`https://reqres.in/api/users?page=${currentPage}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        setEmpData(data);
        setCurrentPage(data?.page);
        setRowsPerPage(data?.per_page);
        setTotalPages(data?.total_pages);
        setEmpLoading(false);
      })
      .catch((error) => {
        console.log(error, "----error");
        setEmpLoading(false);
      });
  };

  useEffect(() => {
    fetchEmployee();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(event.target.value);
  };

  const handleDeleteEmployee = (data) => {
    fetch(`https://reqres.in/api/users/${data.id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        console.log(res, "delete success response");
        if (res.ok === true) {
          alert("Employee deleted successfully!");
        }
      })
      .catch((error) => {
        console.log(error, "delete error");
        if (error.ok === false) {
          alert("An error occurred.");
        }
      });
  };

  const handleOpenEditDialog = (data) => {
    setOpenEditDialog(true);
    setEditData(data);
  };

  const handleCloseEditDialog = () => {
    setOpenEditDialog(false);
  };

  //----------------------------------------------------
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="flex flex-col text-black dark:text-white space-y-3 px-2">
        <div className="border-black border-b-2 dark:border-white">
          <div className="px-4 py-4 flex justify-center items-center">
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
              {tableValues.length === 0 ? (
                <div className="flex justify-center border-2 border-gray-200 p-2 dark:border-gray-500">
                  <p className="font text-xl text-black dark:text-white">
                    Above submitted form values are displayed here
                  </p>
                </div>
              ) : (
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
                          <tr
                            key={first}
                            className="border-b-2 border-slate-500 dark:border-slate-100"
                          >
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
                          </tr>
                        );
                      }
                    )}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>

        <div className="px-4 py-4 flex flex-col justify-center items-center">
          <p className="text-2xl font-bold text-black dark:text-white mb-4">
            To Perform CRUD operations (using Dummy API&apos;s [reqres.in])
          </p>
          <div className="container mx-auto rounded">
            <table className="w-full min-w-max table-auto text-left border-2 border-slate-500 dark:border-slate-100">
              <thead>
                <tr className="border-b-2 border-slate-500 dark:border-slate-100">
                  {EMP_HEAD.map((head) => (
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
                {empData?.data?.map((i) => {
                  return (
                    <tr
                      key={i.id}
                      className="border-b-2 border-slate-500 dark:border-slate-100"
                    >
                      <td className="text-black dark:text-white bg-white dark:bg-gray-900 p-2 border-r-2 border-slate-500 dark:border-slate-100 flex flex-row space-x-2">
                        <Image
                          src={i.avatar}
                          alt={i.first_name}
                          width={30}
                          height={30}
                          className="rounded-full"
                        />
                        <p className="font-medium">{i.first_name}</p>
                      </td>
                      <td className="text-black dark:text-white bg-white dark:bg-gray-900 p-2 border-r-2 border-slate-500 dark:border-slate-100">
                        <p className="font-medium">{i.last_name}</p>
                      </td>
                      <td className="text-black dark:text-white bg-white dark:bg-gray-900 p-2 border-r-2 border-slate-500 dark:border-slate-100">
                        <p className="font-medium">{i.email}</p>
                      </td>
                      <td className="text-black dark:text-white bg-white dark:bg-gray-900 p-2">
                        <div className="flex flex-row space-x-2">
                          <button onClick={() => handleOpenEditDialog(i)}>
                            <MdEdit style={{ fontSize: "1.4rem" }} />
                          </button>
                          {openEditDialog && (
                            <EditEmployee
                              isOpen={openEditDialog}
                              onClose={handleCloseEditDialog}
                              data={editData}
                            />
                          )}
                          <button onClick={() => handleDeleteEmployee(i)}>
                            <MdDelete style={{ fontSize: "1.4rem" }} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="p-2 flex justify-end align-center">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (pageNumber) => (
                  <button
                    key={pageNumber}
                    className={`m-1 px-2 py-1 border rounded ${
                      currentPage === pageNumber
                        ? "bg-blue-500 text-white"
                        : "bg-white text-black"
                    }`}
                    onClick={() => handlePageChange(pageNumber)}
                  >
                    {pageNumber}
                  </button>
                )
              )}
              <select className="m-1" onChange={handleRowsPerPageChange}>
                {[10, 20, 30, 40, 50].map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Record;
