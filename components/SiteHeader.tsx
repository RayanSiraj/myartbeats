"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Logo from "@/components/Logo";
import PulseLine from "@/components/PulseLine";
import { ChevronDownIcon, CloseIcon, InstagramIcon, MenuIcon } from "@/components/icons";

type DropdownName = "about" | "chapters" | "join";

const dropdowns: Record<DropdownName, { label: string; href: string; links: { label: string; href: string }[] }> = {
  about: {
    label: "About",
    href: "/about",
    links: [
      { label: "Our Mission", href: "/about/mission" },
      { label: "Our Teams", href: "/about/teams" },
    ],
  },
  chapters: {
    label: "Chapters",
    href: "/chapters/south-florida",
    links: [
      { label: "South Florida", href: "/chapters/south-florida" },
      { label: "North Florida", href: "/chapters/north-florida" },
    ],
  },
  join: {
    label: "Join Us",
    href: "/join",
    links: [
      { label: "Become a Volunteer", href: "/join/volunteer" },
      { label: "Start a Chapter", href: "/join/start-a-chapter" },
    ],
  },
};

function Dropdown({ name, open, setOpen }: { name: DropdownName; open: boolean; setOpen: (name: DropdownName | null) => void }) {
  const dropdown = dropdowns[name];
  const firstLink = useRef<HTMLAnchorElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const menuLinks = dropdown.links;

  useEffect(() => {
    if (open) firstLink.current?.focus();
  }, [open]);

  return (
    <div
      className="relative flex items-center"
      onMouseEnter={() => setOpen(name)}
      onMouseLeave={() => setOpen(null)}
    >
      <Link className="site-nav-link" href={dropdown.href}>
        {dropdown.label}
      </Link>
      <button
        aria-controls={`${name}-menu`}
        aria-expanded={open}
        aria-haspopup="true"
        aria-label={`Show ${dropdown.label} menu`}
        className="site-nav-chevron"
        onClick={() => setOpen(open ? null : name)}
        ref={trigger}
        type="button"
      >
        <ChevronDownIcon />
      </button>
      {open && (
        <div
          className="site-dropdown"
          id={`${name}-menu`}
          onMouseEnter={() => setOpen(name)}
          onMouseLeave={() => setOpen(null)}
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              event.preventDefault();
              setOpen(null);
              trigger.current?.focus();
            }
          }}
          role="menu"
        >
          {menuLinks.map((link, index) => (
            <Link href={link.href} key={link.href} ref={index === 0 ? firstLink : undefined} role="menuitem">
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function SiteHeader() {
  const [openDropdown, setOpenDropdown] = useState<DropdownName | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenDropdown(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="site-header">
      <div className="site-container site-header__inner">
        <Link className="site-wordmark" href="/">
          <Logo />
          <span className="site-wordmark__type">
            <span>My Art Beats</span>
            <PulseLine animate={false} color="poppy" variant="underline" />
          </span>
        </Link>
        <button
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className="site-menu-button md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          type="button"
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
        <nav aria-label="Main navigation" className="site-nav hidden md:flex">
          <Link className="site-nav-link" href="/">Home</Link>
          <Dropdown name="about" open={openDropdown === "about"} setOpen={setOpenDropdown} />
          <Dropdown name="chapters" open={openDropdown === "chapters"} setOpen={setOpenDropdown} />
          <Dropdown name="join" open={openDropdown === "join"} setOpen={setOpenDropdown} />
          <Link className="site-nav-link" href="/events">Events</Link>
          <Link className="site-nav-link" href="/contact">Contact</Link>
        </nav>
        <a
          aria-label="My Art Beats on Instagram"
          className="site-instagram hidden md:inline-flex"
          href="https://instagram.com/myartbeatsofficial"
          rel="noreferrer"
          target="_blank"
        >
          <InstagramIcon />
        </a>
      </div>
      {mobileOpen && (
        <nav aria-label="Mobile navigation" className="site-mobile-nav md:hidden">
          <Link href="/" onClick={() => setMobileOpen(false)}>Home</Link>
          {(Object.keys(dropdowns) as DropdownName[]).map((name) => (
            <div className="site-mobile-group" key={name}>
              <Link href={dropdowns[name].href} onClick={() => setMobileOpen(false)}>
                {dropdowns[name].label}
              </Link>
              {dropdowns[name].links.map((link) => (
                <Link href={link.href} key={link.href} onClick={() => setMobileOpen(false)}>
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
          <Link href="/events" onClick={() => setMobileOpen(false)}>Events</Link>
          <Link href="/contact" onClick={() => setMobileOpen(false)}>Contact</Link>
          <a href="https://instagram.com/myartbeatsofficial" rel="noreferrer" target="_blank">
            <InstagramIcon /> Instagram
          </a>
        </nav>
      )}
    </header>
  );
}
