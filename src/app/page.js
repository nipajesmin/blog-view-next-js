// import Image from "next/image";

import FeaturePosts from "@/components/FeaturePosts";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
// export default function Home() {
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      
//     </div>
//   );
// }

const Home = async () =>{

  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  

  
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Home Page</h1>
      <div>
        <FeaturePosts data={data} />
      </div>
    </div>
  )
};
export default Home;



