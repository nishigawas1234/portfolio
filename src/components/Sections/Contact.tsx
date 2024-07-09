import React, { useState, useRef, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
// import "react-toastify/dist/ReactToastify.css";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const sendParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    try {
      // const response = await ky
      //   .post(`/api/contact/add-contact`, { json: sendParams })
      //   .json();
      // if (response) {
      //   setFormData({
      //     name: "",
      //     email: "",
      //     message: "",
      //   });
      //   if (form.current) {
      //     form.current.reset();
      //   }
      //   toast.success("Your message has been sent.", {
      //     autoClose: 3000,
      //   });
      // }
    } catch (error) {
      // toast.error("Failed to send message.", {
      //   autoClose: 3000,
      // });
    }
  };

  return (
    <>
      <div className="hidden  md:block px-20 w-full pt-[100px]">
        <div className="relative py-[100px] px-20" id="contact">
          <h1 className="text-[65px] font-semibold text-[#fff] text-center space-x-3 leading-[80px]">
            Contact Me
          </h1>
          <div className="w-[30%] m-auto mt-[60px]">
            <form onSubmit={handleSubmit} ref={form} className="space-y-4">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-[16px] font-medium text-[#A5A0A0]"
                >
                  Full Name:
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  // placeholder="Enter name here..."
                  onChange={handleChange}
                  required
                  className="mt-1 p-2 block w-full h-[50px] text-[#fff] rounded-md border border-[gradient-to-br from-blue-100 to-blue-800] bg-[transparent]"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-[16px] font-medium text-[#A5A0A0] "
                >
                  Email:
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  // placeholder="Enter email here..."
                  onChange={handleChange}
                  required
                  className="mt-1 p-2 block w-full h-[50px] text-[#fff] border rounded-md bg-[transparent]"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-[16px] font-medium text-[#A5A0A0]"
                >
                  Message:
                </label>
                <textarea
                  style={{
                    resize: "none",
                  }}
                  name="message"
                  rows={8}
                  cols={50}
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  // placeholder="Enter message here..."
                  required
                  className="mt-1 p-2 block w-full h-[150px] text-[#fff] border rounded-md bg-[transparent]"
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-blue-600 to-blue-900 rounded-full py-1.5  px-10 text-[16px] w-auto mt-10 hover:translate-x-[10px] ease-out duration-100"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="block md:hidden px-5 mt-10" id="mobContact">
        <h1 className="text-[32px] font-semibold text-[#fff] text-center ">
          Contact Me
        </h1>
        <div className="w-[100%] m-auto mt-[30px]">
          <form onSubmit={handleSubmit} ref={form} className="space-y-4">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-[#A5A0A0]"
              >
                Full Name:
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                placeholder="Enter name here..."
                onChange={handleChange}
                required
                className="mt-1 p-2 block w-full h-[50px] text-[#fff] rounded-md border border-[gradient-to-br from-blue-100 to-blue-800] bg-[transparent] focus:border-none outline-none"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[#A5A0A0]"
              >
                Email:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                placeholder="Enter email here..."
                onChange={handleChange}
                required
                className="mt-1 p-2 block w-full h-[50px] text-[#fff] rounded-md border border-[gradient-to-br from-blue-100 to-blue-800] bg-[transparent] focus:border-none outline-none"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-[#A5A0A0]"
              >
                Message:
              </label>
              <textarea
                style={{
                  resize: "none",
                }}
                name="message"
                rows={8}
                cols={50}
                id="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter message here..."
                required
                className="mt-1 p-2 block w-full h-[150px] text-[#fff] rounded-md border border-[gradient-to-br from-blue-100 to-blue-800] bg-[transparent] focus:border-none outline-none"
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-blue-900 rounded-full py-1.5  px-4 text-[18px] w-auto mt-5 hover:translate-x-[10px] ease-out duration-100"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
