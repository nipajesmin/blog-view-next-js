// "use Client";

// import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
// import { redirect } from "next/navigation";
// import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

// const Profile =  () => {
//     // const { getUser } = getKindeServerSession();
//     // const user = await getUser();
//     const { isAuthenticated, isLoading } = useKindeBrowserClient();

//     if (isLoading) {
//         return (
//             <div className="flex flex-col items-center justify-center mt-24">
//                 <h1 className="text-4xl">Loading.....</h1>
//             </div>
//         )
//     }
//     // if (!(await isAuthenticated())) {
//     //     redirect("/api/auth/login");
//     //   }
//     if(!isAuthenticated){
//         redirect("/api/auth/login");
//     }
//     return (
//         <div className="flex flex-col items-center justify-center mt-24">
//             <h2 className="text-4xl">Welcome to your Profile</h2>
//         </div>
//     );
// };
// export default Profile;

"use client";

import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useRouter } from "next/navigation";

const Profile = () => {
    const { isAuthenticated, isLoading } = useKindeBrowserClient();
    const router = useRouter();

    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center mt-24">
                <h1 className="text-4xl">Loading.....</h1>
            </div>
        );
    }

    if (!isAuthenticated) {
        // Use client-side navigation
        router.push("/api/auth/login");
        return null; // Prevent rendering the rest of the component
    }

    return (
        <div className="flex flex-col items-center justify-center mt-24">
            <h2 className="text-4xl">Welcome to your Profile</h2>
        </div>
    );
};

export default Profile;



