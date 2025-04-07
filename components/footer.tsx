import { IconBrandLinkedin, IconBrandFacebook, IconBrandInstagram, IconMail, IconPhone, IconBrandGoogleMaps } from "@tabler/icons-react";
import Link from "next/link";



export default function Footer() {
    const informations: { title: string; href: string; description: string }[] = [
        {
            title: "Contact Us",
            href: "/contact-us",
            description: "Get in touch with us.",
        },
        {
            title: "Terms Of Service",
            href: "/terms-of-service",
            description: "Our service terms.",
        },
        {
            title: "Privacy Policy",
            href: "/privacy-policy",
            description: "How we handle your data.",
        },
        {
            title: "About Us",
            href: "/about",
            description: "Learn about MyVA.",
        }
    ]
    return (
        <footer className="">
            <div className="row-start-3 flex gap-6 flex-wrap items-center justify-center mb-5">
                <span>
                    Company:
                </span>
                {
                    informations.map((link) => {
                        return (
                            <Link className="flex items-center gap-2 hover:underline hover:underline-offset-4" key={link.href} href={link.href}>{link.title}</Link>
                        )
                    })
                }
            </div>
            <div className="row-start-3 flex gap-6 flex-wrap items-center justify-center mb-5">
                <span>
                    Get in touch:
                </span>
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="tel:+13053493152"
                >
                    <IconPhone
                        aria-hidden
                        width={16}
                        height={16}
                    >
                    </IconPhone>
                    +1 (305) 349-3152
                </a>
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="mailto:yourva@myva.cc"
                >
                    <IconMail
                        aria-hidden
                        width={16}
                        height={16}
                    >
                    </IconMail>
                    yourva@myva.cc
                </a>
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="https://www.google.com/maps?q=30+N+Gould+St,+Sheridan,+WY+82801,+USA"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <IconBrandGoogleMaps
                        aria-hidden
                        width={16}
                        height={16}
                    >
                    </IconBrandGoogleMaps>
                    30 N Gould St, Sheridan, WY 82801, USA
                </a>
            </div>
            <div className="row-start-3 flex gap-6 flex-wrap items-center justify-center mb-16">
                <span>
                    Follow MyVA on:
                </span>
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="https://www.linkedin.com/company/gomyva/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <IconBrandLinkedin
                        aria-hidden
                        width={16}
                        height={16}
                    >
                    </IconBrandLinkedin>
                    LinkedIn
                </a>
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="https://www.facebook.com/people/MYVA/61567469493966/?sk=about"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <IconBrandFacebook
                        aria-hidden
                        width={16}
                        height={16}
                    >
                    </IconBrandFacebook>
                    Facebook
                </a>
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="https://www.instagram.com/reimyva/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <IconBrandInstagram
                        aria-hidden
                        width={16}
                        height={16}
                    >
                    </IconBrandInstagram>
                    Instagram
                </a>
            </div>

        </footer>
    );
}
