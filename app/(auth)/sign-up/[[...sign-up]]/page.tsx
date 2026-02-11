import { SignUp } from "@clerk/nextjs";
import Image from "next/image";

export default function RegisterPage() {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-4">
      <Image
        src="/logo.png"
        alt="logo"
        width={80}
        height={80}
        className="md:w-25 md:h-25"
      />

      <h2 className="text-xl md:text-2xl font-semibold text-center max-w-[90%] leading-tight">
        Bienvenido a tu App de Slides 📝
      </h2>

      <SignUp
        appearance={{
          elements: {
            header: {
              display: "none",
            },
            footer: {
              display: "none",
            },
            card: {
              paddingTop: "1.5rem",
              boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
            },
            main: {
              marginTop: "0",
            },
          },
        }}
      />
    </div>
  );
}
