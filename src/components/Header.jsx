
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { Link } from 'react-router-dom'

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
                <UserButton />
            </SignedIn>
        </nav>
    )
}

export default Header