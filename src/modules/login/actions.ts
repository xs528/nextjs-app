import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import cookie from "cookie";

import prisma from "@/src/utils/prisma";

export async function getUserInfo() {
  const token = cookies().get("token")?.value || "";

  if (token) {
    try {
      const payload = jwt.verify(token, process.env.JWT_SECRET);
      if (typeof payload !== "string" && payload.name) {
        const user = await prisma.user.findUnique({
          where: { name: payload.name },
        });
  
        if (user) {
          return {
            name: user.name,
            registerTime: user.registerTime,
            lastLoginTime: user.lastLoginTime,
          };
        }
      }
    } catch (err) {
      console.error(err);
    }
  }
  
  return null;
}

export function genToken(user: { id: number; name: string }) {
  const token = jwt.sign(
    { id: user.id, name: user.name },
    process.env.JWT_SECRET
  );

  return token;
}

export function genTokenCookie(token: string) {
  const tokenCookie = cookie.serialize("token", token, {
    httpOnly: true,
    path: "/",
    maxAge: 60 * 60 * 24 * 3,
  });

  return tokenCookie;
}
