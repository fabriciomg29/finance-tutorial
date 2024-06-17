import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { Navigation } from "./navigation";
import { Loader2 } from "lucide-react";
import WelcomeMsg from "./welcomeMsg";
import { HeaderLogo } from "./headerLogo";

const Header = () => {
    return (
        <header className="bg-gradient-to-b from-blue-700 to-blue-500 px-4 py-8 lg:px-14 pb-36">
            <div className="max-w-screen-2xl max-auto">
                <div className="w-full flex items-center justify-between mb-14">
                    <div className="flex items-center lg:gap-16">
                        <HeaderLogo />
                        <Navigation />
                    </div>
                    <ClerkLoaded>
                        <UserButton afterSignOutUrl="/" />
                    </ClerkLoaded>
                    <ClerkLoading>
                        <Loader2 className="size-8 animate-spin text-slate-400" />
                    </ClerkLoading>
                </div>
                <WelcomeMsg />
            </div>
        </header>
    );
}

export default Header;