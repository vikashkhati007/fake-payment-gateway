"use client"
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import InputMask from "react-input-mask";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";

// Zod schema for validation
const validationSchema = z.object({
  cc_number: z
    .string()
    .regex(/^\d{4} \d{4} \d{4} \d{4}$/, "Credit Card Number must be 16 digits")
    .min(19, "Credit Card Number must be 16 digits")
    .max(19, "Credit Card Number must be 16 digits"),
  month: z
    .string()
    .min(2, "Month cannot be empty")
    .max(2, "Invalid month format"),
  year: z.string().min(4, "Year cannot be empty").max(4, "Invalid year format"),
  cvv: z.string().min(3, "CVV must be 3 digits").max(3, "CVV must be 3 digits"),
});

type FormData = z.infer<typeof validationSchema>;

const PaymentForm: React.FC = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(validationSchema),
  });

  const [isProcessing, setIsProcessing] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
    setIsProcessing(true);

    // Simulate a delay for payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsCompleted(true);
    }, 3000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Secure Payment
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Credit Card Number
            </label>
            <Controller
              name="cc_number"
              control={control}
              render={({ field }) => (
                <InputMask
                  {...field}
                  mask="9999 9999 9999 9999"
                  placeholder="1234 5678 9012 3456"
                  className={`w-full px-4 py-3 border ${
                    errors.cc_number ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                />
              )}
            />
            {errors.cc_number && (
              <p className="text-red-500 text-sm mt-1">
                {errors.cc_number.message}
              </p>
            )}
          </div>

          <div className="flex space-x-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Expiry Month
              </label>
              <Controller
                name="month"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    maxLength={2}
                    placeholder="MM"
                    className={`w-full px-4 py-3 border ${
                      errors.month ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  />
                )}
              />
              {errors.month && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.month.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Expiry Year
              </label>
              <Controller
                name="year"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    maxLength={4}
                    placeholder="YY"
                    className={`w-full px-4 py-3 border ${
                      errors.year ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  />
                )}
              />
              {errors.year && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.year.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              CVV
            </label>
            <Controller
              name="cvv"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  maxLength={3}
                  placeholder="123"
                  className={`w-full px-4 py-3 border ${
                    errors.cvv ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                />
              )}
            />
            {errors.cvv && (
              <p className="text-red-500 text-sm mt-1">{errors.cvv.message}</p>
            )}
          </div>

          <motion.button
            type="submit"
            className={`w-full py-3 rounded-lg shadow-md text-white transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 flex items-center justify-center ${
              isCompleted
                ? "bg-green-600 hover:bg-green-700"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
            whileTap={{ scale: 0.95 }}
            disabled={isProcessing || isCompleted}
          >
            {isProcessing ? (
              <motion.div
                className="w-5 h-5 border-4 border-t-transparent border-white rounded-full animate-spin"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 0.5 }}
              ></motion.div>
            ) : isCompleted ? (
              <FaCheck className="text-white text-xl" />
            ) : (
              "Pay Now"
            )}
          </motion.button>
        </form>
      </div>
    </div>
  );
};

export default PaymentForm;
