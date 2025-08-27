"use client";

import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { signIn } from "next-auth/react";
import axios from "axios";
import { AiOutlineClose } from "react-icons/ai";
import { FaCloudUploadAlt } from "react-icons/fa";
import Loading from "./Loading";
import { registerUser } from "@/app/action/auth/registerUser";


export default function RegisterForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    formState: { errors },
  } = useForm();

  // Register "image" manually
  useEffect(() => {
    register("image", { required: "Image is required" });
  }, [register]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setValue("image", file);
      trigger("image");
      setImage(file);

      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };
  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };
  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFileChange({ target: { files: [file] } });
  };
  const handleRemoveImage = () => {
    setImage(null);
    setPreview(null);
    setValue("image", null);
    trigger("image");
  };

  const handleRegister = async (data) => {
    setLoading(true);
    let imageUrl = "";

    if (data.image) {
      const formData = new FormData();
      formData.append("image", data.image);
      try {
        const response = await axios.post(
          `https://api.imgbb.com/1/upload?key=9683ba99474011560739e696292fa9e0`,
          formData
        );
        imageUrl = response.data.data.url;
      } catch (error) {
        setLoading(false);
        return Swal.fire({
          icon: "error",
          title: "Image upload failed",
          text: "Please try again",
        });
      }
    }

    const result = await registerUser({
      name: data.name,
      email: data.email,
      password: data.password,
      image: imageUrl,
    });

    if (result.acknowledged) {
      const response = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Registration successful",
          timer: 1500,
        });
        router.push("/products");
      } else {
        Swal.fire({
          icon: "error",
          title: "Login after registration failed",
          timer: 1500,
        });
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Registration failed",
        timer: 1500,
      });
    }

    setLoading(false);
  };

  if (loading) return <Loading />;

  return (
    <form
      onSubmit={handleSubmit(handleRegister)}
      className="flex flex-col gap-4"
    >
      {/* Image Upload */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
           Image
        </label>
        <div
          className={`w-full p-6 border-2 border-dashed rounded-lg text-center cursor-pointer ${
            isDragging ? "border-blue-500 bg-blue-50" : "border-gray-300"
          } transition-all duration-300`}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
          onClick={() => !preview && fileInputRef.current.click()}
        >
          <input
            type="file"
            accept="image/*"
            className="hidden"
            ref={fileInputRef}
            onChange={handleFileChange}
          />
          {preview ? (
            <div className="relative inline-block">
              <img
                src={preview}
                alt="Preview"
                className="mx-auto h-32 w-32 rounded-full object-cover shadow-lg"
              />
              <button
                type="button"
                onClick={handleRemoveImage}
                className="absolute top-0 right-0 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
              >
                <AiOutlineClose />
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center space-y-2">
              <FaCloudUploadAlt className="text-5xl text-gray-400" />
              <p className="text-gray-500">
                Drag & drop an image or click to select
              </p>
            </div>
          )}
        </div>
        {errors.image && (
          <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>
        )}
      </div>
      {/* Name */}
      <label
        htmlFor="name"
        className="text-gray-700 font-medium text-sm sm:text-base"
      >
        Name
      </label>
      <input
        {...register("name", { required: "Name is required" })}
        type="text"
        placeholder="Enter your name"
        className="border border-gray-300 p-3 sm:p-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
      />

      {errors.name && (
        <p className="text-red-500 text-sm">{errors.name.message}</p>
      )}

      {/* Email */}
      <label
        htmlFor="email"
        className="text-gray-700 font-medium text-sm sm:text-base"
      >
        Email
      </label>
      <input
        {...register("email", { required: "Email is required" })}
        type="email"
        placeholder="Enter your email"
        className="border border-gray-300 p-3 sm:p-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
      />
      {errors.email && (
        <p className="text-red-500 text-sm">{errors.email.message}</p>
      )}
      {/* Password */}
      <label
        htmlFor="password"
        className="text-gray-700 font-medium text-sm sm:text-base"
      >
        Password
      </label>
      <input
        {...register("password", { required: "Password is required" })}
        type="password"
        placeholder="Enter your password"
        className="border border-gray-300 p-3 sm:p-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
      />
      {errors.password && (
        <p className="text-red-500 text-sm">{errors.password.message}</p>
      )}
      <button
        type="submit"
        disabled={loading}
        className={`mt-4 bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition ${
          loading ? "cursor-not-allowed" : ""
        }`}
      >
        Register
      </button>
    </form>
  );
}