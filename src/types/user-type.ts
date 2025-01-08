export type User = {
  id: number;
  username: string;
  phone?: string;
  email: string;
  password: string;
  roleId: number;
  rolets?: string[];
  createdAt: Date;
  updatedAt: Date;
};
