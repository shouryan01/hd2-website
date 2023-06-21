import ContactLink from "@/components/ContactLink"

const Contact = () => {
    return (
        <>
            <div className="mx-auto container">
                <h1 className="mb-4 text-sm font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl">
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