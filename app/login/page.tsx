import LoginView from "@/src/modules/login/View";

export const metadata = {
  title: "Login",
};

export default async function Page() {
  return (
    <div className="h-screen flex justify-center items-center">
      <LoginView />
    </div>
  );
}
