import { useAuthModalContext } from "@/pages/contexts/AuthModal.context";

export default function PaywallLogin() {
  const { triggerSignIn } = useAuthModalContext()

  return (
    <div className="mx-auto my-10 max-w-xl px-5 text-center">
      <div className="font-serif text-2xl">
        Create an account to read the full story.
      </div>
      <div className="mt-10 text-sm">
        <p>The author made this story available to Medium members only.</p>
        <p>
          If you’re new to Medium, create a new account to read this story on
          us.
        </p>
      </div>
      <div className="mx-auto mt-10 flex max-w-sm flex-col gap-3">
        <a className="relative rounded-full border border-black px-3 py-2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="absolute left-5"
          >
            <g fill-rule="evenodd" clip-rule="evenodd">
              <path
                d="M20.64 12.2c0-.63-.06-1.25-.16-1.84H12v3.49h4.84a4.14 4.14 0 0 1-1.8 2.71v2.26h2.92a8.78 8.78 0 0 0 2.68-6.61z"
                fill="#4285F4"
              ></path>
              <path
                d="M12 21a8.6 8.6 0 0 0 5.96-2.18l-2.91-2.26a5.41 5.41 0 0 1-8.09-2.85h-3v2.33A9 9 0 0 0 12 21z"
                fill="#34A853"
              ></path>
              <path
                d="M6.96 13.71a5.41 5.41 0 0 1 0-3.42V7.96h-3a9 9 0 0 0 0 8.08l3-2.33z"
                fill="#FBBC05"
              ></path>
              <path
                d="M12 6.58c1.32 0 2.5.45 3.44 1.35l2.58-2.58A9 9 0 0 0 3.96 7.96l3 2.33A5.36 5.36 0 0 1 12 6.6z"
                fill="#EA4335"
              ></path>
            </g>
          </svg>
          <span className="w-full">Sign up with Google</span>
        </a>
        <a className="relative rounded-full border border-black px-3 py-2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="absolute left-5"
          >
            <path
              d="M22 12a10 10 0 1 0-11.56 9.88V14.9H7.9V12h2.54V9.8c0-2.5 1.5-3.9 3.77-3.9 1.1 0 2.24.2 2.24.2v2.46H15.2c-1.24 0-1.63.78-1.63 1.57V12h2.78l-.45 2.9h-2.33v6.98A10 10 0 0 0 22 12z"
              fill="#1877F2"
            ></path>
            <path
              d="M15.9 14.9l.44-2.9h-2.78v-1.87c0-.8.39-1.57 1.63-1.57h1.26V6.1s-1.14-.2-2.24-.2c-2.28 0-3.77 1.4-3.77 3.9V12H7.9v2.9h2.54v6.98a10.07 10.07 0 0 0 3.12 0V14.9h2.33z"
              fill="#fff"
            ></path>
          </svg>
          Sign up with Facebook
        </a>
        {/* <a className="relative rounded-full border border-black px-3 py-2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="absolute left-5"
          >
            <g stroke="#242424">
              <rect x="3.5" y="5.5" width="17" height="13" rx="1"></rect>
              <path d="M3.5 8l8.5 6 8.5-6" stroke-linecap="round"></path>
            </g>
          </svg>
          Sign up with Email
        </a> */}
      </div>
      <div className="mt-10">
        Already have an account? <a className="underline" onClick={triggerSignIn}>Sign in</a>
      </div>
    </div>
  );
}
