"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();
  const params = useParams();
  const routes = [
    {
      href: `/${params.storedId}`,
      label: "Overview",
      active: pathname === `/${params.storedId}`,
    },
    {
      href: `/${params.storedId}/settings`,
      label: "Settings",
      active: pathname === `/${params.storedId}/settings`,
    },
  ];
  return (
    <>
      <nav
        className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      >
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              route.active
                ? "text-black dark:text-slate-100"
                : "text-muted-foreground"
            )}
          >
            {route.label}
          </Link>
        ))}
      </nav>
    </>
  );
}
