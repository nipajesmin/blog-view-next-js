import Link from "next/link";
import { RegisterLink, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";


const Navbar = async () => {
    const { getUser , isAuthenticated } = getKindeServerSession();
    const user = await getUser();
    return (
        <nav className="flex justify-between items-center bg-gray-800 text-white p-4">
            {/* Logo */}
            <div className="text-2xl font-bold">
                <Link href="/" className="hover:text-gray-300">
                    Logo
                </Link>
            </div>

            {/* Navigation Links */}
            <div className="flex space-x-4">
                <Link href="/" className="text-lg hover:text-gray-300">
                    Home
                </Link>
                <Link href="/product" className="text-lg hover:text-gray-300">
                    Product
                </Link>
                <Link href="/profile" className="text-lg hover:text-gray-300">
                    Profile
                </Link>

                {(await isAuthenticated()) ? (
                    <>
                    <LogoutLink>
                        <button className="text-lg">
                            Sign Out
                        </button>
                    </LogoutLink>
                    </>
                ) : (<div>
                    <LoginLink>
                        <button className="text-lg">
                            Sign In
                        </button>
                    </LoginLink>
                    <RegisterLink>
                        <button className="text-lg">
                            Sign Up
                        </button>
                    </RegisterLink>
                </div>)}

            </div>
        </nav>
    );
};

export default Navbar;