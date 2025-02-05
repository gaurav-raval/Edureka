import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setTableData } from "../redux/tableSlice";

const Form = () => {
  const dispatch = useDispatch();
  const tableData = useSelector((state) => state.table.data) || [];

  // Initialize react-hook-form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Handle Form Submission
  const onSubmit = (data) => {
    // Add new entry to existing table data
    const newData = [...tableData, { id: tableData.length + 1, ...data }];
    dispatch(setTableData(newData)); // Update Redux state
    reset(); // Clear form after submission
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg mb-4">
      <h2 className="text-xl font-bold mb-4">Add New Entry</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-4">
        {/* Account Name */}
        <div>
          <label className="block font-medium">Account Name</label>
          <input
            {...register("name", { required: "Account Name is required" })}
            className="w-full p-2 border rounded"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block font-medium">Email</label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email format" },
            })}
            className="w-full p-2 border rounded"
          />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        </div>

        {/* Phone */}
        <div>
          <label className="block font-medium">Phone</label>
          <input
            {...register("id", {
              required: "Phone is required",
              pattern: { value: /^[0-9]+$/, message: "Only numbers allowed" },
            })}
            className="w-full p-2 border rounded"
          />
          {errors.id && <p className="text-red-500">{errors.id.message}</p>}
        </div>

        {/* Website */}
        <div>
          <label className="block font-medium">Website</label>
          <input
            {...register("website", { required: "Website is required" })}
            className="w-full p-2 border rounded"
          />
          {errors.website && <p className="text-red-500">{errors.website.message}</p>}
        </div>

        {/* Industry */}
        <div>
          <label className="block font-medium">Industry</label>
          <input
            {...register("industry", { required: "Industry is required" })}
            className="w-full p-2 border rounded"
          />
          {errors.industry && <p className="text-red-500">{errors.industry.message}</p>}
        </div>

        {/* Status */}
        <div>
          <label className="block font-medium">Status</label>
          <select
            {...register("status", { required: "Status is required" })}
            className="w-full p-2 border rounded"
          >
            <option value="">Select Status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
          {errors.status && <p className="text-red-500">{errors.status.message}</p>}
        </div>

        {/* Remark */}
        <div className="col-span-2">
          <label className="block font-medium">Remark</label>
          <input
            {...register("remark")}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Submit Button */}
        <div className="col-span-2">
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded w-full">
            Add Entry
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
