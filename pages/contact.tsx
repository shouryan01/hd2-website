import ContactLink from "@/components/ContactLink"

const Contact = () => {
    return (
        <>
            <div className="mx-auto container h-screen mt-60">
                <h1 className="mb-4 font-extrabold leading-none tracking-tight text-4xl md:text-5xl lg:text-6xl pb-5 md:pb-10">
                    Contact
                </h1>
                <div className="text-left">
                    <ul className="font-semi-bold flex flex-col space-y-4">
                        <ContactLink href="mailto:info@hackdearborn.org" title="email" icon=" info@hackdearborn.org" />
                        <ContactLink
                            href="https://www.linkedin.com/company/gdsc-dearborn/"
                            title="linkedin"
                            icon=" gdsc-dearborn"
                        />
                        <ContactLink
                            href="https://www.instagram.com/gdscdearborn/"
                            title="instagram"
                            icon=" gdscdearborn"
                        />
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Contact