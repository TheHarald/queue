import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { COLORS } from "../../constants/theme";

function Arrow(props) {
    return (
        <Svg
            width={12}
            height={21}
            fill="none"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.537 20.083L.292 10.946a.975.975 0 010-1.392L9.537.417a1.456 1.456 0 012.04 0c.563.557.563 1.46 0 2.016L3.67 10.251l7.909 7.815c.562.557.562 1.46 0 2.017a1.456 1.456 0 01-2.04 0z"
                fill={COLORS.blue}
            />
        </Svg>
    );
}

export default Arrow;