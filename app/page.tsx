
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <main className="flex-auto w-full">
        <div className="hero min-h-screen" style={{ backgroundImage: `url("/main-bg.jpg")` }}>
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-8xl font-bold">Hello</h1>
            </div>
          </div>
        </div>
      </main>
      <footer className="flex-none footer footer-center p-4 bg-base-300 text-base-content">
        <div>
          <a className="link link-hover" href="https://beian.miit.gov.cn" target="_blank">湘ICP备2023012577号-1</a>
          <p>Copyright © 2023 - All right reserved by XShuai</p>
        </div>
      </footer>
    </div>
  )
}
