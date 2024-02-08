import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";

import prisma from "@/src/utils/prisma";
import { genToken, genTokenCookie } from "@s/modules/login/actions";

export async function POST(request: NextRequest) {
  const { username, password } = await request.json();

  const user = await prisma.user.findUnique({ where: { name: username } });
  const passwordHash = user ? user.passwordHash : "";
  const matched = await bcrypt.compare(password, passwordHash);

  if (matched && user) {
    const token = genToken({ id: user.id, name: user.name });
    const tokenCookie = genTokenCookie(token);

    prisma.user
      .update({
        data: { lastLoginTime: new Date() },
        where: { name: username },
      })
      .catch((err) => {
        console.error(err);
      });

    return NextResponse.json(
      { code: 0, msg: "ok" },
      { headers: { "Set-Cookie": tokenCookie } }
    );
  } else {
    return NextResponse.json({ msg: "登录失败" }, { status: 401 });
  }
}
