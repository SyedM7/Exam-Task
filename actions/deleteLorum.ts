"use server";

import prisma from "@/lib/db";

export const deleteLorem = async (loremId: String) => {
  if (!loremId) {
    throw new Error("loremId is required");
  }
  return await prisma.lorem.deleteLorem({
    where: { id: loremId },
  });
};
