import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CertificateForm = ({ onFormSubmit }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        watch
    } = useForm();
    // Watch for changes in start date and end date
    const startDate = watch("startingFrom");
    const endDate = watch("endingAt");

    // Update days off field based on selected start and end dates
    useEffect(() => {
        if (startDate && endDate) {
            const daysOff = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24)) + 1;
            setValue("daysOff", daysOff);
        } else {
            setValue("daysOff", "");
        }
    }, [startDate, endDate, setValue]);

    // Update end date based on selected days off
    const updateEndDate = (daysOff) => {
        if (startDate) {
            const endDate = new Date(startDate);
            endDate.setDate(startDate.getDate() + (daysOff - 1));
            setValue("endingAt", endDate);
        }
    };
    const currentDate = new Date();
    const onSubmit = (data) => {
        // Call the onFormSubmit callback function with the form values
        onFormSubmit(
            data.fullName,
            data.birthdate,
            data.email,
            data.address,
            data.symptoms,
            data.workOrSchool,
            data.daysOff,
            data.startingFrom,
            data.endingAt
        );
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex-1 flex-col bg-white p-8 rounded-md shadow-md mb-2">
            <h1 className="text-2xl font-semibold mb-6">Medical Certificate Form</h1>
            <div className="mb-4 lg:w-1/3 sm:w-full ">
                <label htmlFor="fullName" className="block font-medium mb-2">Full Name</label>
                <input type="text" id="fullName" {...register("fullName", { required: "This field is required" })} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" />
                {errors.fullName && <span className="text-red-500 text-sm">{errors.fullName.message}</span>}
            </div>
            <div className="mb-4 lg:w-1/4 sm:w-full" >
                <label htmlFor="birthdate" className="block font-medium mb-2">Birthdate</label>
                <input type="date" id="birthdate" {...register("birthdate", { required: "This field is required" })} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" />
                {errors.birthdate && <span className="text-red-500 text-sm">{errors.birthdate.message}</span>}
            </div>
            <div className="mb-4 lg:w-1/3 sm:w-full">
                <label htmlFor="email" className="block font-medium mb-2">Email</label>
                <input type="email" id="email" {...register("email", { required: "This field is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" } })} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" />
                {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
            </div>
            <div className="mb-4 lg:w-1/2 sm:w-full">
                <label htmlFor="address" className="block font-medium mb-2">Address</label>
                <textarea id="address" {...register("address", { required: "This field is required" })} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" />
                {errors.address && <span className="text-red-500 text-sm">{errors.address.message}</span>}
            </div>
            <div className="mb-4 lg:w-1/2 sm:w-full">
                <label htmlFor="symptoms" className="block font-medium mb-2">Symptoms</label>
                <input type="text" id="symptoms" {...register("symptoms", { required: "This field is required" })} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" />
                {errors.symptoms && <span className="text-red-500 text-sm">{errors.symptoms.message}</span>}
            </div>
            <div className="flex flex-row space-x-4 mb-4">
                <h1 className="block font-medium mb-2">Work or School:</h1>
                <input type="radio" id="work" value="work" {...register("workOrSchool", { required: "This field is required" })} className="h-4 w-4 mt-1  border-gray-300 focus:ring-green-500 focus:border-green-500" />
                <label htmlFor="work" className="ml-2">Work</label>
                <input type="radio" id="school" value="school" {...register("workOrSchool", { required: "This field is required" })} className="h-4 w-4 mt-1 border-gray-300 focus:ring-green-500 focus:border-green-500" />
                <label htmlFor="school" className="ml-2">School</label>
            </div>
            <div className="mb-4 flex flex-row space-x-4">
                <div className="mb-4">
                    <label htmlFor="startDate" className="block font-medium mb-2">
                        Start Date
                    </label>
                    <DatePicker
                        id="startDate"
                        minDate={currentDate} 
                        selected={watch("startingFrom")}
                        onChange={(date) => setValue("startingFrom", date)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    {errors.startingFrom && (
                        <span className="text-red-500 text-sm">{errors.startingFrom.message}</span>
                    )}
                </div>
                <div className="mb-4">
                    <label htmlFor="daysOff" className="block font-medium mb-2">
                        Days Off
                    </label>
                    <input
                        type="number"
                        id="daysOff"
                        {...register("daysOff", {
                            required: "This field is required",
                            min: { value: 1, message: "Days off must be at least 1" },
                        })}
                        onChange={(e) => {
                            const daysOff = parseInt(e.target.value, 10);
                            updateEndDate(daysOff);
                        }}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    {errors.daysOff && (
                        <span className="text-red-500 text-sm">{errors.daysOff.message}</span>
                    )}
                </div>
                <div className="mb-4">
                    <label htmlFor="endDate" className="block font-medium mb-2">
                        End Date
                    </label>
                    <DatePicker
                        selected={watch("endingAt")}
                        onChange={(date) => setValue("endingAt", date)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    {errors.startingFrom && (
                        <span className="text-red-500 text-sm">{errors.startingFrom.message}</span>
                    )}
                </div>
            </div>

            <div className="flex justify-end">
                <button type="submit" className="bg-blue-400 text-white px-4 py-2 rounded-md hover:bg-blue-600">Submit Request</button>
            </div>
        </form >
    );
}

export default CertificateForm;
