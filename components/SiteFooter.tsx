import Link from "next/link";
import { InstagramIcon } from "@/components/icons";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Mission", href: "/about/mission" },
  { label: "Teams", href: "/about/teams" },
  { label: "South Florida", href: "/chapters/south-florida" },
  { label: "North Florida", href: "/chapters/north-florida" },
  { label: "Join", href: "/join" },
  { label: "Volunteer", href: "/join/volunteer" },
  { label: "Start a Chapter", href: "/join/start-a-chapter" },
  { label: "Events", href: "/events" },
  { label: "Contact", href: "/contact" },
];

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-container">
        <div className="site-footer__top">
          <div>
            <p className="display-font text-2xl font-extrabold">My Art Beats</p>
            <p className="mt-3 max-w-md">
              My Art Beats is dedicated to providing artistic avenues and mentorship to individuals with developmental disabilities.
            </p>
          </div>
          <div>
            <p className="eyebrow">Quick links</p>
            <nav aria-label="Footer navigation" className="site-footer__links">
              {quickLinks.map((link) => <Link href={link.href} key={link.href}>{link.label}</Link>)}
            </nav>
          </div>
        </div>
        <div className="site-footer__bottom">
          <p>501(c)(3) nonprofit organization · © {new Date().getFullYear()} My Art Beats</p>
          <a aria-label="My Art Beats on Instagram" href="https://instagram.com/myartbeatsofficial" rel="noreferrer" target="_blank">
            <InstagramIcon /> Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
