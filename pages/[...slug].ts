// pages/[...slug].ts

import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { slug } = context.query;

    const slugs = Array.isArray(slug) ? slug : [slug];

    if (slugs[0] === 'register') {
        return {
            redirect: {
                destination: 'https://c8gfo5ol3nu.typeform.com/to/oNcQNjvg',
                permanent: false,
            },
        };
    }

    return {
        notFound: true,
    };
};

export default function Page() {
    return null;
}