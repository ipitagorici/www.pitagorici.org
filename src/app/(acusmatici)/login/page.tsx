import { LoginForm } from "@/src/app/components/login-form"

export default function Page() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm style={{ boxShadow: "10px 10px 0px var(--accent)" }} className="bg-black rounded-lg"/>
      </div>
    </div>
  )
}
