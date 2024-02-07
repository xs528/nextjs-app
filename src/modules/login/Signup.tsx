"use client";
import { useState } from "react";
import axios from "axios";

import toast from "@/src/components/Toast";

export default function Page() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  function signup() {
    if (!username || !password || !password2) {
      toast.info("请输入账号和密码");
      return;
    }

    if (password !== password2) {
      toast.warning("两次输入的密码不一致");
      return;
    }

    axios
      .post("/api/signup", {
        username,
        password,
      })
      .then((result) => {
        toast.success("注册成功");
        setTimeout(() => {
          location.href = "/";
        }, 1000);
      })
      .catch((err) => {
        console.error(err);
        toast.error("注册失败");
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
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">再次输入密码</span>
        </div>
        <input
          type="password"
          placeholder=""
          maxLength={36}
          className="input input-bordered w-full max-w-xs"
          onChange={(e) => setPassword2(e.target.value.trim())}
        />
      </label>
      <div className="flex justify-center mt-5">
        <button className="btn btn-primary btn-wide" onClick={signup}>
          注册
        </button>
      </div>
    </div>
  );
}
