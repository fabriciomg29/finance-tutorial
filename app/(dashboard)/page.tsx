import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
        Layout page
        <UserButton afterSignOutUrl="/" />
    </div>
  );
}
