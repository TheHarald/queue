import * as React from "react";
import Svg, { Path } from "react-native-svg";

function Delete(props) {
    return (
        <Svg
            width={24}
            height={24}
            fill="none"
            {...props}
        >
            <Path
                d="M24 2.417L21.583 0 12 9.583 2.417 0 0 2.417 9.583 12 0 21.583 2.417 24 12 14.417 21.583 24 24 21.583 14.417 12 24 2.417z"
                fill="#FF5641"
            />
        </Svg>
    );
}

export default Delete;