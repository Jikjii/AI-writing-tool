import { Form, Link } from "@remix-run/react";

import { useUser } from "~/utils";
import { requireUserId } from "~/session.server";
import { ActionFunction, json, LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await requireUserId(request);

  return json({ ok: true });
};

export const action: ActionFunction = async ({ request }) => {
  const userId = await requireUserId(request);

  const reqBody = await request.formData();
  const body = Object.fromEntries(reqBody);

  // Check the user has enough tokens to make request
  // If not enough return an error
  // Make the request to OPENAI API
  // if not successful return error
  // Save the completion to the database
  // Update the user tokens if request is successful

  return json({ ok: true });
};

// Create the form for input
// Create action for the form
// Bring recent completion onto page from the database

export default function Writing() {
  const user = useUser();

  return (
    <div className="text-slate-100">
      <div className="mx-auto mt-4 flex w-full items-center justify-between text-slate-200">
        <p>Welcome {user.email}</p>
        <div className="flex gap-5">
          <Form action="/logout" method="post">
            <button
              type="submit"
              className="rounded bg-slate-600 py-2 px-4 text-blue-100 hover:bg-blue-500 active:bg-blue-600"
            >
              Logout
            </button>
          </Form>
        </div>
      </div>
      <h1 className="text-2xl font-bold ">AI Writing Tool</h1>

      <Form method="post">
        <fieldset className="mt-4 w-full">
          <textarea
            name="prompt"
            id="prompt"
            rows={5}
            className="w-full rounded-sm bg-slate-800 p-4 text-slate-200"
          ></textarea>
          <div className="mt-4 flex items-center">
            <input
              type="number"
              name="tokens"
              id="tokens"
              defaultValue={150}
              className="w-24 rounded-sm bg-slate-800 p-4 text-slate-200"
            />
            <button
              type="submit"
              className="ml-4 rounded bg-slate-600 py-2 px-4 text-blue-100 hover:bg-blue-500 active:bg-blue-600"
            >
              Submit
            </button>
            <div className="ml-4">
              You have {user.tokens.toLocaleString()} remaining
            </div>
          </div>
        </fieldset>
      </Form>
    </div>
  );
}
