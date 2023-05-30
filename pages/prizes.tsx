import dynamic from "next/dynamic";
export { Prizes } from '../components/Prizes';

const Prizes = dynamic(() => import("../components/Prizes"), { ssr: false });

export default Prizes;
