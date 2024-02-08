import { redirect } from 'next/navigation'

import { getUserInfo } from "@/src/modules/login/actions";

export default async function Page() {
  const userInfo = await getUserInfo();

  if (!userInfo) {
    redirect('/login');
  }

  return (
    <div className="flex min-h-full flex-col items-center justify-between">
      <div
        className="flex-auto w-full hero min-h-screen"
        // style={{ backgroundImage: `url("/main-bg.jpg")` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl">Hello {userInfo?.name}</h1>
          </div>
        </div>
      </div>
      <footer className="flex-none footer footer-center p-2 bg-base-300 text-base-content text-xs">
        <div>
          <a
            className="link link-hover"
            href="https://beian.miit.gov.cn"
            target="_blank"
          >
            湘ICP备2023012577号-1
          </a>
          <p>Copyright © 2023 - All right reserved by XShuai</p>
        </div>
      </footer>
    </div>
  );
}
