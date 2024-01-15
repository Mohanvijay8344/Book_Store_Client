import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";

import { Button, Checkbox, Label, Select, TextInput } from "flowbite-react";
import { Textarea } from "flowbite-react";
import { Backend_Url } from "../Components/global.js";
import { useNavigate, useParams } from "react-router-dom";

export default function EditBook() {

  const { id } = useParams();

  const navigate = useNavigate()

  const bookCategory = [
    "Adventure stories",
    "Art and Design",
    "Autobiography",
    "Biography",
    "Classics",
    "Crime",
    "Essays",
    "Fairy tales, fables, and folk tales",
    "Fantasy",
    "Fiction",
    "Historical fiction",
    "Horror",
    "Humour and satire",
    "Literary fiction",
    "memoir",
    "Mystery",
    "Non-fiction",
    "Plays",
    "Poetry",
    "Religion",
    "Romance",
    "Science fiction",
    "Self-help",
    "Short stories",
    "Thrillers",
    "Travel",
    "War",
    "Women’s fiction",
    "Young adult",
  ];

  const [formData, setFormData] = useState({
    title: "",
    authorName: "",
    imageURL: "",
    category: "",
    description: "",
  });

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await fetch(`${Backend_Url}/book/${id}`);
        if (response.ok) {
          const bookData = await response.json();
          // Update the state with the fetched data
          
          setFormData({
            title: bookData.title,
            authorName: bookData.authorName,
            imageURL: bookData.imageURL,
            category: bookData.category,
            description: bookData.description,
          });
          console.log(bookData);
        } else {
          console.error("Failed to fetch book details");
          // Handle the error here
        }
      } catch (error) {
        console.error("Error:", error);
        // Handle the error here
      }
    };
    fetchBookDetails();
  }, [id]);

  

  const handleChangeSelectedValue = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      category: event.target.value,
    }));
  };

  const handleChange = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };


  const handleUpdate = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`${Backend_Url}/edit/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Book successfully updated!", formData);
        alert("Book successfully updated");
        navigate(`/admin/dashboard/manage`); 
      } else {
        console.error("Failed to update book");
        alert("No Update Found!")
        // Handle the error here
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle the error here
    }
  };

  return (
    <div className="flex">
      <SideBar />
      <div className="px-4 my-12">
        <h1 className="mb-8 text-3xl font-bold">Update the Book</h1>
        <form
          className="flex lg:w-[1150px] flex-col flex-wrap gap-4"
          onSubmit={handleUpdate}
        >
          <div className="flex gap-8">
            <div className="lg:w-1/2">
              {/* title */}
              <div className="mb-2 block">
                <Label htmlFor="title" value="Book Title" />
              </div>
              <TextInput
                id="title"
                type="text"
                name="title"
                onChange={handleChange}
                value={formData.title}
                placeholder="Book Name"
                required
              />
            </div>
            {/* Author Name */}
            <div className="lg:w-1/3">
              <div className="mb-2 block">
                <Label htmlFor="authorName" value="Author Name" />
              </div>
              <TextInput
                id="authorName"
                name="authorName"
                type="text"
                onChange={handleChange}
                value={formData.authorName}
                placeholder="Author Name"
                required
              />
            </div>
          </div>
          {/* image url */}
          <div className="flex gap-8">
            <div className="lg:w-1/2">
              <div className="mb-2 block">
                <Label htmlFor="imageURL" value="Book image url" />
              </div>
              <TextInput
                id="imageURL"
                type="text"
                name="imageURL"
                onChange={handleChange}
                value={formData.imageURL}
                placeholder="Book image url"
                required
              />
            </div>
            {/* Book Category */}
            <div className="lg:w-1/3">
              <div className="mb-2 block">
                <Label htmlFor="inputState" value="Book Category" />
              </div>
              <Select
                id="inputState"
                name="categoryName"
                className="w-full rounded"
                value={formData.category}
                onChange={handleChangeSelectedValue}
              >
                {bookCategory.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </Select>
            </div>
          </div>
          {/* Book Description */}
          <div className="w-10/12">
            <div className="mb-2 block">
              <Label htmlFor="description" value="Book Description" />
            </div>
            <Textarea
              id="description"
              placeholder="Write Your Book Description..."
              name="description"
              onChange={handleChange}
              value={formData.description}
              required
              className="w-full"
              rows={4}
            />
          </div>
          <Button type="submit" className="w-10/12">
            Update Book
          </Button>
          <Button onClick={() => navigate("/admin/dashboard/manage")} className="w-10/12 bg-red-600">
            Cancel
          </Button>
        </form>
      </div>
    </div>
  );
}
