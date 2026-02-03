import { SignUp } from "@clerk/nextjs";
import Image from "next/image";

export default function RegisterPage() {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-4">
      <Image src="/logo.svg" alt="logo" width={50} height={50} />
      <h2 className="text-2xl font-semibold">Welcome to your To-Do App 🚀</h2>
      <SignUp signInUrl="/sign-in" />
    </div>
  );
}
