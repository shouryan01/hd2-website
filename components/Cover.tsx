import ApplyGlitch from "@/components/ApplyGlitch";
import Apply_Button from "@/components/Apply_Button";
import Plx from "react-plx";

export default function Cover() {
    return (
        <div className="conatiner mx-auto background_city hidden lg:block">
            <Plx
                parallaxData={[
                    {
                        start: 0,
                        end: 700,
                        properties: [
                            {
                                startValue: 1,
                                endValue: 3.3,
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
                    zIndex: 20,
                }}
            >
                <img style={{ width: "100%", height: "50%", zIndex: 2 }} src="bg.png" alt="foreground" />
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
            >
                <img style={{ width: "fit" }} src="background.jpg" alt="background" />
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
                <h1 className="d3">
                    <ApplyGlitch>
                        Hack <br />Dearborn
                    </ApplyGlitch>

                    <div className="mr-10">
                        <Apply_Button glitch={false} />
                    </div>
                </h1>

                <div className="arrow bounce mt-56"></div>
            </Plx>
        </div >
    );
};