"use client";
import { useState } from "react";
import axios from "axios";

import toast from "@/components/Toast";

export default function Page() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function signup() {
    if (!username || !password) {
      return;
    }

    axios
      .post("/api/signup", {
        username,
        password,
      })
      .then((result) => {
        toast.success("注册成功");
      });
  }

  return (
    <div>
      {/* <h2 className="p-[20px] text-center text-2xl">注册</h2> */}
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">账号</span>
        </div>
        <input
          type="text"
          placeholder=""
          maxLength={36}
          className="input input-bordered w-full max-w-xs"
          onChange={(e) => setUsername(e.target.value.trim())}
        />
      </label>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">密码</span>
        </div>
        <input
          type="password"
          placeholder=""
          maxLength={36}
          className="input input-bordered w-full max-w-xs"
          onChange={(e) => setPassword(e.target.value.trim())}
        />
      </label>
      <div className="flex justify-center mt-5">
        <button className="btn btn-primary" onClick={signup}>
          注册
        </button>
      </div>
    </div>
  );
}
