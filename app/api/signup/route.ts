import bcrypt from 'bcrypt';
import { NextResponse } from "next/server";
import axios from "axios";
import { PrismaClient } from "@prisma/client";

const saltRounds = 10;
const prisma = new PrismaClient();

export async function POST(request: Request) {
  const {username, password} = await request.json();

  const salt = await bcrypt.genSalt(saltRounds);
  const hash = await bcrypt.hash(password, salt);
  const created = await prisma.user.create({data: {name: username, password_hash: hash}})
  console.log(username, password, salt, hash, created);

  return NextResponse.json({code: 0, msg: 'ok'});
}
