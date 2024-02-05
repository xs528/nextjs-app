import dynamic from "next/dynamic";

import Signup from "@/components/Signup";

export const metadata = {
  title: "Login",
};

const HankoAuth = dynamic(() => import("@/components/HankoAuth"), {
  ssr: false,
});

export function LoginPage() {
  return (
    <div className="h-screen flex justify-center items-center">
      <HankoAuth />
    </div>
  );
}

export default function Page() {

  return (
    <div className="h-screen flex justify-center items-center">
      <Signup></Signup>
    </div>
  );
}
