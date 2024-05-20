import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://66416b213d66a67b3433d36f.mockapi.io/",
  prepareHeaders: (headers) => {
    const token = localStorage.getItem("token");
    if (token) {
      headers.set("authentication", `${token}`);
    }
    return headers;
  },
});

// Qayta urinish soni
const baseQueryWithRetry = retry(baseQuery, { maxRetries: 0 });

export const api = createApi({
  reducerPath: "mainApi",
  baseQuery: baseQueryWithRetry,
  tagTypes: ["Product", "Users"], // O'zgarish bo'lganda qayta fetch qilish uchun Tag Typelar
  endpoints: () => ({}),
});
