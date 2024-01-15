import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import { Backend_Url } from "../Components/global.js";

import { Table } from "flowbite-react";
import { Link } from "react-router-dom";

export default function ManageBooks() {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    fetch(`${Backend_Url}/all-books`)
      .then((res) => res.json())
      .then((data) => setAllBooks(data));
  }, []);

  const handleDelete = async (id) => {
    console.log(id);

    await fetch(`${Backend_Url}/book/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(
            `Failed to delete book. Server response: ${res.status} ${res.statusText}`
          );
        }
        return res.json();
      })
      .then((data) => {
        alert("Book deleted Successfully");
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle the error here
      });
  };

  return (
    <div className="flex">
      <SideBar />
      <div className="px-4 my-12">
        <h1 className="mb-8 text-3xl font-bold">Manage Your Book</h1>

        <Table className="lg:w-[1150px]">
          <Table.Head>
            <Table.HeadCell>No.</Table.HeadCell>
            <Table.HeadCell>Book Name</Table.HeadCell>
            <Table.HeadCell>Author Name</Table.HeadCell>
            <Table.HeadCell>Category</Table.HeadCell>
            <Table.HeadCell>Actions</Table.HeadCell>

            <Table.HeadCell>
              <span className="sr-only">Edit or Manage</span>
            </Table.HeadCell>
          </Table.Head>
          {allBooks.map((book, index) => (
            <Table.Body className="divide-y" key={book._id}>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {index + 1}
                </Table.Cell>
                <Table.Cell>{book.title}</Table.Cell>
                <Table.Cell>{book.authorName}</Table.Cell>
                <Table.Cell>{book.category}</Table.Cell>
                <Table.Cell className="flex flex-cols gap-4">
                  <Link
                    to={`/admin/dashboard/edit-book/${book._id}`}
                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(book._id)}
                    className="bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-600"
                  >
                    Delete
                  </button>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          ))}
        </Table>
      </div>
    </div>
  );
}
