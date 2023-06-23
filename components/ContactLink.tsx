import Link from "next/link";

type ContactLinkProps = {
    title: string;
    href: string;
    icon: string;
};

const ContactLink = ({ title, href, icon }: ContactLinkProps) => {
    return (
        <Link href={href} target="_blank" rel="noopener noreferrer">
            <li className="duration-250 inline cursor-pointer text-3xl transition-colors ease-in hover:text-gray-400 sm:text-4xl md:text-5xl lg:text-6xl">
                <span className="duration-250 font-mono transition-colors ease-in hover:text-pink-500">
                    {title}
                </span>
                <span className="font-light opacity-50">:</span>
                <span className="duration-250 transition-colors ease-in hover:text-primary-500 dark:hover:text-primary-400">
                    {icon}
                </span>
            </li>
        </Link>
    )
}

export default ContactLink  