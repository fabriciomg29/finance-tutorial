import { SignUp } from "@clerk/nextjs";

export default function Page() {
    return (
        <div className="flex items-center justify-center h-[100vh]">
            <SignUp path="/sign-up" />
        </div>
    )
}