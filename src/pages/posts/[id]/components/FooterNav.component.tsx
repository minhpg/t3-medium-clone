import { BottomNavigationItems } from "@/pages/components/BottomNavigationItems";
import Link from "next/link";

export default function FooterNav() {
  return (
    <div className="hidden md:block border-t border-slate-200 bg-slate-50">
      <div className="container mx-auto max-w-3xl px-5">
        <div className="flex flex-wrap gap-x-5 gap-y-2 py-5 text-xs text-slate-600">
          {BottomNavigationItems.map(({ href, name }) => (
            <Link key={name} href={href} className="hover:underline">
              {name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
