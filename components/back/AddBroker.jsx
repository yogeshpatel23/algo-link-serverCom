"use client";
import { CurrencyRupeeIcon } from "@heroicons/react/20/solid";
import {
  BuildingOfficeIcon,
  CheckIcon,
  DocumentChartBarIcon,
  FingerPrintIcon,
  KeyIcon,
  ShieldCheckIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";
import Button from "../ui/Button";
import { addAccount } from "@/lib/actions";
import { useFormState } from "react-dom";

const brokers = ["finvaisa", "flattrade"];

const AddBroker = () => {
  const [state, dispatch] = useFormState(addAccount, undefined);
  return (
    <form action={dispatch}>
      <div className="rounded-md w-full md:w-96 bg-gray-50 p-4 shadow-md md:p-6">
        {/* name input */}
        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Name
          </label>
          <div className="relative">
            <input
              type="text"
              id="name"
              name="name"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              placeholder="Name for broker"
              required
              aria-describedby="name-error"
            />
            <UserIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
          </div>
          <div id="name-error" aria-live="polite" aria-atomic="true">
            {state?.name && (
              <p className="mt-2 text-sm text-red-500">{state?.name.message}</p>
            )}
          </div>
        </div>
        {/* Broker Select */}
        <div className="mb-4">
          <label htmlFor="broker" className="mb-2 block text-sm font-medium">
            Select Broker
          </label>
          <div className="relative">
            <select
              id="broker"
              name="broker"
              defaultValue=""
              className="peer capitalize block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              required
              aria-describedby="broker-error"
            >
              <option value="" disabled>
                Select Broker
              </option>
              {brokers.map((broker) => (
                <option key={broker} value={broker}>
                  {broker}
                </option>
              ))}
            </select>
            <BuildingOfficeIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
          </div>
          <div id="broker-error" aria-live="polite" aria-atomic="true">
            {state?.broker && (
              <p className="mt-2 text-sm text-red-500">
                {state.broker.message}
              </p>
            )}
          </div>
        </div>
        {/* userid input */}
        <div className="mb-4">
          <label htmlFor="userid" className="mb-2 block text-sm font-medium">
            UserId
          </label>
          <div className="relative">
            <input
              type="text"
              id="userid"
              name="userid"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              placeholder="User Id of Trading A/c"
              required
              aria-describedby="userid-error"
            />
            <FingerPrintIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
          </div>
          <div id="userid-error" aria-live="polite" aria-atomic="true">
            {state?.userid && (
              <p className="mt-2 text-sm text-red-500">
                {state.userid.message}
              </p>
            )}
          </div>
        </div>
        {/* key input */}
        <div className="mb-4">
          <label htmlFor="key" className="mb-2 block text-sm font-medium">
            Api Key
          </label>
          <div className="relative">
            <input
              type="text"
              id="key"
              name="key"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              placeholder="Api Key provided by Broker"
              required
              aria-describedby="key-error"
            />
            <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
          </div>
          <div id="key-error" aria-live="polite" aria-atomic="true">
            {state?.key && (
              <p className="mt-2 text-sm text-red-500">{state.key.message}</p>
            )}
          </div>
        </div>
        {/* secret input */}
        <div className="mb-4">
          <label htmlFor="secret" className="mb-2 block text-sm font-medium">
            Api Secret /
          </label>
          <div className="relative">
            <input
              type="text"
              id="secret"
              name="secret"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              placeholder="Api secret provided by Broker"
              required
              aria-describedby="secret-error"
            />
            <ShieldCheckIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
          </div>
          <div id="secret-error" aria-live="polite" aria-atomic="true">
            {state?.secret && (
              <p className="mt-2 text-sm text-red-500">
                {state.secret.message}
              </p>
            )}
          </div>
        </div>
        <div className="flex gap-2">
          {/* secret lot */}
          <div className="mb-4 grow">
            <label htmlFor="lot" className="mb-2 block text-sm font-medium">
              Lot
            </label>
            <div className="relative">
              <input
                type="number"
                id="lot"
                name="lot"
                defaultValue={1}
                min={1}
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                placeholder="Lot size "
              />
              <DocumentChartBarIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          {/* resk lot */}
          <div className="mb-4 grow">
            <label htmlFor="risk" className="mb-2 block text-sm font-medium">
              Risk /trade
            </label>
            <div className="relative">
              <input
                type="number"
                id="risk"
                name="risk"
                defaultValue={10}
                min={10}
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                placeholder="max risk"
              />
              <CurrencyRupeeIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>
        {/* Active radio goup */}
        <fieldset>
          <legend className="mb-2 block text-sm font-medium">
            Account Status
          </legend>
          <div className="rounded-md border border-gray-200 bg-white px-3.5 py-3">
            <div className="flex gap-4">
              <div className="flex items-center">
                <input
                  type="radio"
                  name="isActive"
                  id="active"
                  value={true}
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
                <label
                  htmlFor="active"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-sx font-medium text-white"
                >
                  Active <CheckIcon className="w-4 h-4" />{" "}
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  name="isActive"
                  id="inactive"
                  defaultChecked
                  value={false}
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
                <label
                  htmlFor="inactive"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-red-200 px-3 py-1.5 text-sx font-medium text-gray-600"
                >
                  Inactive <XMarkIcon className="w-4 h-4" />{" "}
                </label>
              </div>
            </div>
          </div>
        </fieldset>
        <div className="mt-6 flex justify-end gap-4">
          <Link
            href="/accounts"
            className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
          >
            Cancel
          </Link>
          <Button type="submit">Add Account</Button>
        </div>
        {state?.error && (
          <div className="mt-4 p-2 bg-red-300 text-sm font-medium">
            {state.error.message}
          </div>
        )}
      </div>
    </form>
  );
};

export default AddBroker;
