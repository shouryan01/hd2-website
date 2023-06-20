import dynamic from "next/dynamic";

const Prizes = dynamic(() => import("../components/Prizes"), { ssr: false });

export default Prizes;
