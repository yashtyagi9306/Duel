import { Swords, Twitter, Github, Linkedin } from "lucide-react";
import Container from "./Container";

const LINK_GROUPS = [
  {
    title: "Product",
    links: ["Features", "Modes", "Characters", "Pricing"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Blog"],
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms"],
  },
];

const SOCIALS = [
  { icon: Twitter, label: "Twitter" },
  { icon: Github, label: "GitHub" },
  { icon: Linkedin, label: "LinkedIn" },
];

function Footer() {
  return (
    <footer className="border-t border-white/[0.08] py-16">
      <Container>
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          <div className="max-w-xs">
            <a href="#" className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-blue-500">
                <Swords className="h-4 w-4 text-white" strokeWidth={2.25} />
              </span>
              <span className="text-lg font-semibold tracking-tight">DUEL</span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-[#a0a0a0]">
              An AI debate platform for sharper thinking and better arguments.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {LINK_GROUPS.map((group) => (
              <div key={group.title}>
                <h4 className="text-sm font-medium text-white">{group.title}</h4>
                <ul className="mt-4 flex flex-col gap-3">
                  {group.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-[#a0a0a0] transition-colors duration-300 hover:text-white"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col-reverse items-center gap-6 border-t border-white/[0.08] pt-8 md:flex-row md:justify-between">
          <p className="text-sm text-[#a0a0a0]">
            © {new Date().getFullYear()} DUEL. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href="#"
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] text-[#a0a0a0] transition-colors duration-300 hover:border-white/20 hover:text-white"
              >
                <social.icon className="h-4 w-4" strokeWidth={1.75} />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
