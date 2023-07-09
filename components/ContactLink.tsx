import Link from "next/link";

type ContactLinkProps = {
    title: string;
    href: string;
    icon: string;
};

const ContactLink = ({ title, href, icon }: ContactLinkProps) => {
    return (
        <Link href={href} target="_blank" rel="noopener noreferrer">
            <li className="duration-250 inline cursor-pointer text-lg transition-colors ease-in hover:text-gray-400 md:text-4xl">
                <span className="duration-250 font-mono transition-colors ease-in hover:text-pink-500">
                    {title}
                </span>
                <br className="block md:hidden" />
                <span className="duration-250 transition-colors ease-in hover:text-primary-500 dark:hover:text-primary-400">
                    {icon}
                </span>
            </li>
        </Link>
    )
}

export default ContactLink  