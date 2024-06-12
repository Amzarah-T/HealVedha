import { signOut } from "@/auth";
import { title } from "@/components/primitives";

export default function AboutPage() {
  return (
    <div>
      <h1 className="text-foreground text-3xl">Manage Route</h1>
      <form
          action={async () => {
            'use server';
            await signOut();
          }}
        >
          <button>
             Log Out
          </button>
        </form>
    </div>
  );
}
 