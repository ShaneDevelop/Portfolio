"use client";
import React, { useRef, useState } from "react";
import { GlobeDemo } from "../components/GlobeDemo";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'
import { wordsContact } from "@/constants/words";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [disabled, setDisabled] = useState<boolean>(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setDisabled(true);

    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });

    if (form.current) {
      if (process.env.NEXT_PUBLIC_SERVICE_ID && process.env.NEXT_PUBLIC_TEMPLATE_NAME && process.env.NEXT_PUBLIC_PUBLIC_KEY)
        emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_NAME, form.current, {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY
        }).then(() => {
          if (form.current) {
            form.current.reset();
          }
          Toast.fire({
            icon: "success",
            title: "Message Sent Successfully!"
          });
        }).catch((e) => {
          console.log(e);
          Toast.fire({
            icon: "error",
            title: "Message failed to send!"
          });
        }).finally(() => {
          setDisabled(false);
        });
    }
    else {
      Toast.fire({
        icon: "error",
        title: "Message failed to send!"
      });
    }
  };

  return (
    <section id="contact" className="relative">
      <h1 className="py-5 px-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-10 text-center">Get in touch</h1>
      <TypewriterEffectSmooth words={wordsContact} className="text-center justify-center mb-20" />

      <div className="flex flex-col lg:flex-row justify-between items-stretch gap-10 px-4">
        <div className="w-full lg:w-1/2 h-[600px] lg:h-auto">
          <GlobeDemo />
        </div>
        <div className="w-full lg:w-1/2 flex items-center">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col gap-6 w-full max-w-[500px] mx-auto"
          >
            <input
              type="text"
              name="from_name"
              placeholder="Name"
              className="w-full p-3 bg-white/5 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              required
              autoComplete="off"
            />
            <input
              type="email"
              name="email_sender"
              placeholder="Email"
              className="w-full p-3 bg-white/5 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              required
            />
            <input
              type="text"
              name="subject_sender"
              placeholder="Subject"
              className="w-full p-3 bg-white/5 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              required
              autoComplete="off"
            />
            <textarea
              name="message_sender"
              placeholder="Message"
              className="w-full p-3 bg-white/5 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all min-h-[150px]"
              required
              autoComplete="off"
            />
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={disabled}
                className="px-6 py-2 rounded-lg bg-black text-white font-medium hover:bg-gray-800 transition-colors disabled:opacity-50"
                aria-label="send-button"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

