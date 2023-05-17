/// <reference types="vite/client" />
type users = {
  id: number;
  name: string;
  email: string;
  birthday: string;
  status: "ACTIVE" | "PENDING" | "BLOCKED";
};
