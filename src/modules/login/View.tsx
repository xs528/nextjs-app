"use client";
import { useState } from "react";

import Signup from "@/src/modules/login/Signup";
import Login from "@/src/modules/login/Login";

export default function LoginView() {
  const [visibleLogin, setVisibleLogin] = useState(true);

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-[320px]">
        {visibleLogin ? <Login /> : <Signup />}
        {visibleLogin && <div className="mt mt-3 text-center">
          <button
            className="btn btn-link"
            onClick={() => setVisibleLogin(false)}
          >
            没有账号，去注册
          </button>
        </div>}
      </div>
    </div>
  );
}
