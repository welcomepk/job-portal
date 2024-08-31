
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { BriefcaseBusiness, Heart, PenBox } from "lucide-react";
import { Link } from 'react-router-dom'
import { Button } from "./ui/button";

function Header() {
    return (
        <nav className='py-4 flex justify-between items-center'>
            <Link>
                <img className='h-14' src="/logo.png" alt="LOGO" />
            </Link>
            <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
                <Link to="/post-job">
                    <Button variant="destructive" className="rounded-full">
                        <PenBox size={15} className="mr-2" />
                        Poat a Job
                    </Button>
                </Link>
                <UserButton appearance={{ elements: { avatarBox: "w-10 h-10" } }}>
                    <UserButton.MenuItems>
                        <UserButton.Link label="My Jobs" labelIcon={<BriefcaseBusiness size={15} />} href="/my-jobs" />
                    </UserButton.MenuItems>
                    <UserButton.MenuItems>
                        <UserButton.Link label="Saved Jobs" labelIcon={<Heart size={15} />} href="/saved-jobs" />
                    </UserButton.MenuItems>
                </UserButton>
            </SignedIn>
        </nav>
    )
}

export default Header