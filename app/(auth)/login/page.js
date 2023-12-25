"use client";
import Button from "@/components/ui/button";
import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { useFormState } from "react-dom";
import { login } from "@/lib/actions";

export default function Page() {
  const [state, dispatch] = useFormState(login, null);

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
            <h1 className={`mb-3 text-2xl`}>Please log in to continue.</h1>
            <div>
              {/* Email Input */}
              <div>
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
                  />
                  <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                </div>
              </div>
              {/* Passwrod input */}
              <div className="mt-4">
                <label
                  htmlFor="passwrod"
                  className="mb-3 mt-5 text-xs font-medium text-gray-900"
                >
                  Passwrod
                </label>
                <div className="relative">
                  <input
                    id="passwrod"
                    name="passwrod"
                    type="passwrod"
                    className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                    placeholder="Enter password"
                    required
                    minLength={6}
                  />
                  <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                </div>
              </div>
            </div>
            <Button classname="mt-4 w-full">
              Log in <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
            </Button>
            <div
              className="flex h-8 items-end space-x-1"
              aria-live="polite"
              aria-atomic="true"
            >
              {state && (
                <>
                  <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                  <p className="text-sm text-red-500">{state}</p>
                </>
              )}
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}
