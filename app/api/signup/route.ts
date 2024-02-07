import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

import prisma from "@/src/utils/prisma";
import { genToken, genTokenCookie } from "@s/modules/login/actions";

const saltRounds = 10;

export async function POST(request: Request) {
  const { username, password } = await request.json();

  const salt = await bcrypt.genSalt(saltRounds);
  const hash = await bcrypt.hash(password, salt);
  const user = await prisma.user.create({
    data: { name: username, passwordHash: hash },
  });
  console.log(username, password, salt, hash, user);
  const token = genToken({ id: user.id, name: user.name });
  const tokenCookie = genTokenCookie(token);

  return NextResponse.json(
    { code: 0, msg: "ok" },
    {
      headers: {
        "Set-Cookie": tokenCookie,
      },
    }
  );
}
