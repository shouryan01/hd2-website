import ContactLink from "@/components/ContactLink"

const Contact = () => {
    return (
        <>
            <div className="mx-auto max-w-5xl overflow-hidden">
                <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-white dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
                    Contact
                </h1>
                <div className="pt-10 pb-8">
                    <ul className="font-semi-bold flex flex-col space-y-4">
                        <ContactLink href="mailto:info@hackdearborn.org" title="email" icon="info@hackdearborn.org" />
                        <ContactLink
                            href="https://www.linkedin.com/company/gdsc-dearborn/"
                            title="linkedin"
                            icon="gdsc-dearborn"
                        />
                        <ContactLink
                            href="https://www.instagram.com/gdscdearborn/"
                            title="instagram"
                            icon="gdscdearborn"
                        />
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Contact
