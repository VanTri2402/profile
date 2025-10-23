// File: lib/db.ts

import { PrismaClient } from "@prisma/client";

// Khai báo globalThis để giữ instance
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// Tạo và tái sử dụng instance
export const db =
  globalForPrisma.prisma ??
  new PrismaClient({
    // (Tùy chọn) Bật log để xem các query khi dev
    log:
      process.env.NODE_ENV === "development"
        ? ["query", "error", "warn"]
        : ["error"],
  });

// Chỉ gán vào globalThis khi không ở production
if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = db;
}
