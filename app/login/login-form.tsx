"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

// Form Schema
const FormSchema = z.object({
  phonenumber: z
    .string()
    .min(9, "Enter the correct phone number")
    .max(11, "Enter the correct phone number"),
  password: z.string().min(6, { message: "Please enter the correct password" }),
});

type FormData = z.infer<typeof FormSchema>;

export default function LoginForm() {
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      phonenumber: "",
      password: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    console.log("Submitting form", data);

    const { phonenumber, password } = data;

    try {
      const response: any = await signIn("credentials", {
        phonenumber,
        password,
        redirect: false,
      
      });

      // console.log({ response });

      if (!response?.error) {
        router.push("/");
        router.refresh();
      }

      if (!response.ok) {
        throw new Error("Network response error");
      }

      console.log("Login Successful", response);
      toast("Logged in successfully" );
    } catch (error: any) {
      console.error("Login Failed:", error);
      toast( "Login Failed");
    }
  };

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account.
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <FormField
                control={form.control}
                name="phonenumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Enter Phone Number</FormLabel>
                    <FormControl>
                      <Input
                        className="text-black"
                        placeholder="Enter phone number"
                        {...field}
                        type="text"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <div className="grid gap-2">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Provide Password</FormLabel>
                    <FormControl>
                      <Input
                        className="text-black"
                        placeholder="***********"
                        {...field}
                        type="password"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button
              type="submit"
              className=" hover:bg-cyan-700 w-full"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? "Signing in...." : "Sign in"}
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
