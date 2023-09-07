import ApplyGlitch from "@/components/ApplyGlitch";
import Apply_Button from "@/components/Apply_Button";
import Plx from "react-plx"

export default function Mobile_Cover() {
    return (
        <div className="background_city block lg:hidden">
            <Plx
                parallaxData={[
                    {
                        start: 0,
                        end: 700,
                        properties: [
                            {
                                startValue: 1,
                                endValue: 6,
                                property: "scale"
                            },
                            {
                                startValue: 1,
                                endValue: 0,
                                property: "opacity"
                            },
                        ]
                    }
                ]}
                style={{
                    position: "fixed",
                    left: -300,
                    top: 0,
                    width: "300%",
                    zIndex: 20,
                }}
            >
                <img src="bg.png" alt="foreground" />
            </Plx>
            <Plx
                parallaxData={[
                    {
                        start: 0,
                        end: 800,
                        properties: [
                            {
                                startValue: 1,
                                endValue: 1.2,
                                property: "scale"
                            },
                            {
                                startValue: 1,
                                endValue: 0,
                                property: "opacity"
                            },
                        ]
                    }
                ]}
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    zIndex: 10,
                }}
                className="background_city_mobile"
            >
            </Plx>
            <Plx
                parallaxData={[
                    {
                        start: 0,
                        end: 250,
                        properties: [
                            {
                                startValue: 1,
                                endValue: 0,
                                property: "opacity"
                            },
                            {
                                startValue: 1,
                                endValue: 2,
                                property: "scale"
                            }
                        ]
                    }
                ]}
                style={{
                    position: "fixed",
                    left: 0,
                    top: 0,
                    width: "100%",
                    zIndex: 30,
                }}
            >
                <h1 className="d32">
                    <ApplyGlitch>
                        Hack <br />Dearborn
                    </ApplyGlitch>
                </h1>
                <h3 className="d33">Oct 21-22</h3>
                <div className="mr-10 flex justify-center">
                    <Apply_Button glitch={false} />
                </div>

                <div className="arrow bounce mt-56"></div>
            </Plx>
            <div className="text-center">

            </div>
        </div >
    );
}
