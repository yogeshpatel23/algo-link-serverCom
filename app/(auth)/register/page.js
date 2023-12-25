"use client";
import Button from "@/components/ui/button";
import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { register } from "@/lib/actions";
import { useFormState } from "react-dom";
export default function Page() {
  const [state, dispatch] = useFormState(register, null);
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36">
          <div className="w-32 text-white md:w-36">
            <p>AlogLink</p>
          </div>
        </div>
        <form action={dispatch} className="space-y-3">
          <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
            <h1 className={`mb-3 text-2xl`}>Register with us.</h1>
            <div>
              {/* Name Input */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-3 mt-5 text-xs font-medium text-gray-900"
                >
                  Full Name
                </label>
                <div className="relative">
                  <input
                    id="name"
                    name="fullName"
                    type="text"
                    className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                    placeholder="Enter your full name"
                    required
                    aria-describedby="fullname-error"
                  />
                  <UserIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                </div>
                <div id="fullname-error" aria-live="polite" aria-atomic="true">
                  {state?.fullName && (
                    <p className="mt-2 text-sm text-red-500">
                      {state.fullName.message}
                    </p>
                  )}
                </div>
              </div>
              {/* Email Input */}
              <div className="mt-4">
                <label
                  htmlFor="email"
                  className="mb-3 mt-5 text-xs font-medium text-gray-900"
                >
                  Email
                </label>
                <div className="relative">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                    placeholder="Enter your email address"
                    required
                    aria-describedby="email-error"
                  />
                  <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                </div>
                <div id="email-error" aria-live="polite" aria-atomic="true">
                  {state?.email && (
                    <p className="mt-2 text-sm text-red-500">
                      {state.email.message}
                    </p>
                  )}
                </div>
              </div>
              {/* Passwrod input */}
              <div className="mt-4">
                <label
                  htmlFor="password"
                  className="mb-3 mt-5 text-xs font-medium text-gray-900"
                >
                  Passwrod
                </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                    placeholder="Enter password"
                    required
                    min={6}
                    aria-describedby="password-error"
                  />
                  <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                </div>
                <div id="password-error" aria-live="polite" aria-atomic="true">
                  {state?.password && (
                    <p className="mt-2 text-sm text-red-500">
                      {state.password.message}
                    </p>
                  )}
                </div>
              </div>
              {/* CPasswrod input */}
              <div className="mt-4">
                <label
                  htmlFor="cpassword"
                  className="mb-3 mt-5 text-xs font-medium text-gray-900"
                >
                  Confirm password
                </label>
                <div className="relative">
                  <input
                    id="cpassword"
                    name="cpassword"
                    type="password"
                    className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                    placeholder="Re Enter password"
                    required
                    aria-describedby="cpassword-error"
                  />
                  <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                </div>
                <div id="cpassword-error" aria-live="polite" aria-atomic="true">
                  {state?.cpassword && (
                    <p className="mt-2 text-sm text-red-500">
                      {state.cpassword.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <Button classname="mt-4 w-full">
              Register
              <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
            </Button>
            <div
              className="flex h-8 items-end space-x-1"
              aria-live="polite"
              aria-atomic="true"
            >
              {state?.error && (
                <>
                  <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                  <p className="text-sm text-red-500">state?.error?.message</p>
                </>
              )}
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}
