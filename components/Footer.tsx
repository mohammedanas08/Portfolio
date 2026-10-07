import { navItems, profile } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="container-x flex flex-col gap-6 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {navItems.slice(1).map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="transition-colors hover:text-fg">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
