import {UserButton} from "@clerk/nextjs"

export default function Home() {
  return (    
    <>
    
    <div>
      <UserButton afterSignOutUrl="/" />
    </div>
    <h1>Ecommerce Admin Dashboard</h1>

    </>
  );
}
