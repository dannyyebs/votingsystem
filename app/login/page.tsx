import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import LoginForm from "./login-form";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default async function LoginPage() {
  const session = await getServerSession();
  console.log({ session });

  if (session) {
    redirect("/");
  }

  return (
    <section className="bg-gradient-to-r from-purple-500 to-purple-900 h-screen flex items-center justify-center">
      <div className=" flex flex-col items-center justify-center gap-2">
        <Card className="p-4 rounded-full shadow-lg shadow-black">
          <Image 
            src="/ucc-logo.webp"
            height={50}
            width={50} 
            alt={"UCC Logo"}          
            className=""
            />
        </Card>
        <LoginForm />;
      </div>
    </section>
  );
}
