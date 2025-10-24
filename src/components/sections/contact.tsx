"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ContactForm from "../ContactForm";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { config } from "@/data/config";
const ContactSection = () => {
  return (
    <section id="contact" className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
      <Link href={"#contact"}>
        <h2
          className={cn(
            "bg-clip-text text-3xl sm:text-4xl text-center text-transparent md:text-6xl lg:text-7xl pt-12 sm:pt-16",
            "bg-gradient-to-b from-black/80 to-black/50",
            "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50"
          )}
        >
          LET&apos;S WORK <br />
          TOGETHER
        </h2>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 z-[9999]">
        <Card className="w-full bg-white/70 dark:bg-black/70 backdrop-blur-sm rounded-xl mt-8 sm:mt-10 md:mt-20">
          <CardHeader>
            <CardTitle className="text-2xl sm:text-3xl md:text-4xl">Contact Form</CardTitle>
            <CardDescription className="text-sm sm:text-base">
              Please contact me directly at{" "}
              <a
                target="_blank"
                href={`mailto:${config.email}`}
                className="text-gray-200 cursor-can-hover rounded-lg"
              >
                {config.email.replace(/@/g, "(at)")}
              </a>{" "}
              or drop your info here.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
export default ContactSection;
