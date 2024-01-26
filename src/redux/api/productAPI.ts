import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  AllProductsResponse,
  CatagoriesResponse,
  DeleteProductRequest,
  MessageResponse,
  NewProductRequest,
  ProductResponse,
  SearchProductRequest,
  SearchProductResponse,
  UpdateProductRequest,
} from "../../types/api-types";

export const productAPI = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER}/api/v1/product/`,
  }),
  tagTypes: ["product"],

  endpoints: (builder) => ({
    latestProducts: builder.query<AllProductsResponse, string>({
      query: () => "latest",
      providesTags: ["product"],
    }),

    allProducts: builder.query<AllProductsResponse, string>({
      query: (id) => `admin-product?id=${id}`,
      providesTags: ["product"],
    }),

    catagories: builder.query<CatagoriesResponse, string>({
      query: () => `categories`,
      providesTags: ["product"],
    }),

    SearchProducts: builder.query<SearchProductResponse, SearchProductRequest>({
      query: ({ price, search, sort, catagory, page }) => {
        let base = `all?search=${search}&page=${page}`;

        if (price) {
          base += `&price=${price}`;
        }

        if (sort) {
          base += `&sort=${sort}`;
        }

        if (catagory) {
          base += `&catagory=${catagory}`;
        }

        return base;
      },
      providesTags: ["product"],
    }),

    productDetails: builder.query<ProductResponse, string>({
      query: (id) => id,
      providesTags: ["product"],
    }),

    newProducts: builder.mutation<MessageResponse, NewProductRequest>({
      query: ({ formData, id }) => ({
        url: `new?id=${id}`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["product"],
    }),

    updateProducts: builder.mutation<MessageResponse, UpdateProductRequest>({
      query: ({ formData, userId, productId }) => ({
        url: `${productId}?id=${userId}`,
        method: "PUT",
        body: formData,
      }),
      invalidatesTags: ["product"],
    }),

    deleteProducts: builder.mutation<MessageResponse, DeleteProductRequest>({
      query: ({ userId, productId }) => ({
        url: `${productId}?id=${userId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["product"],
    }),
  }),
});

export const {
  useLatestProductsQuery,
  useAllProductsQuery,
  useCatagoriesQuery,
  useSearchProductsQuery,
  useNewProductsMutation,
  useProductDetailsQuery,
  useUpdateProductsMutation,
  useDeleteProductsMutation,
} = productAPI;
