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
                    left: -280,
                    top: 0,
                    width: "300%",
                    zIndex: 100,
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
                    width: "100%"
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
                    width: "100%"
                }}
            >
                <h1 className="d3">
                    <ApplyGlitch>
                        Hack <br />Dearborn <br />2
                    </ApplyGlitch>
                </h1>
            </Plx>
        </div >
    );
}