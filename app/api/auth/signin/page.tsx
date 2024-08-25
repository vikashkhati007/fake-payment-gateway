"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function SignupInForm() {
  const router = useRouter();
  const { data: session } = useSession();

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    const result = await signIn("credentials", {
      username,
      password,
      redirect: false, // Redirect manually
    });
    console.log(result);

    if (result?.ok) {
      router.push("/dashboard"); // Redirect to dashboard on successful sign-in
    } else {
      console.error("Failed to sign in");
    }
  };

  if (session) {
    router.push("/dashboard");
    return null;
  }
  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl m-8 p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Login to Your Account
      </h2>
      <form className="my-8" onSubmit={handleSignIn}>
      
        <LabelInputContainer className="mb-4">
          <Label htmlFor="username">Email Address</Label>
          <Input id="username" placeholder="projectmayhem@fc.com" type="text" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input id="password" placeholder="••••••••" type="password" />
        </LabelInputContainer>
       
        <div className="buttoncontainer space-y-2">
        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Login In &rarr;
          <BottomGradient />
        </button>
        <Link href={"/api/auth/createaccount"}
        > 
         <button
          className="bg-gradient-to-br my-2 relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
        Create An Account &rarr;

        </button>
          <BottomGradient />
        </Link>
        </div>
        

      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
