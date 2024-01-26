import {
  Bar,
  CartItem,
  Line,
  Order,
  Pie,
  Product,
  ShippingInfo,
  Stats,
  User,
} from "./types";

export type MessageResponse = {
  success: boolean;
  message: string;
};

export type userResponse = {
  success: boolean;
  user: User;
};

export type AllUsersResponse = {
  success: boolean;
  users: User[];
};

export type AllProductsResponse = {
  success: boolean;
  products: Product[];
};

export type ProductResponse = {
  success: boolean;
  product: Product;
};

export type CatagoriesResponse = {
  success: boolean;
  catagories: string[];
};

export type SearchProductResponse = {
  success: boolean;
  products: Product[];
  totalPage: number;
};

export type SearchProductRequest = {
  price: number;
  page: number;
  catagory: string;
  search: string;
  sort: string;
};

export type CustomError = {
  status: number;
  data: {
    message: string;
    success: boolean;
  };
};

export type NewProductRequest = {
  id: string | undefined;
  formData: FormData;
};

export type UpdateProductRequest = {
  userId: string;
  productId: string;
  formData: FormData;
};

export type DeleteProductRequest = {
  userId: string;
  productId: string;
};

export type NewOrderResponse = {
  shippingInfo: ShippingInfo;
  orderItems: CartItem[];
  subtotal: number;
  tax: number;
  shippingCharges: number;
  discount: number;
  total: number;
  user: string;
};

export type AllOrdersResponse = {
  success: boolean;
  orders: Order[];
};

export type OrderDetailsResponse = {
  success: boolean;
  order: Order;
};

export type UpdateOrderResponse = {
  userId: string;
  orderId: string;
};

export type StatsResponse = {
  success: boolean;
  stats: Stats;
};

export type PieResponse = {
  success: boolean;
  charts: Pie;
};

export type BarResponse = {
  success: boolean;
  charts: Bar;
};

export type LineResponse = {
  success: boolean;
  charts: Line;
};

export type DeleteUserRequest = {
  userId: string;
  adminUserId: string;
};
