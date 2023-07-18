import React from "react";

function Logo() {
    return (
        <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <title>Logo</title>
            <g>
                <g id="K" transform="translate(35.000000, 33.000000)">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-letter-l" width="35" height="35" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none" /> <path d="M7 4v16h10" /> </svg>

                </g>

                <path
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M 50, 5
                  L 11, 27
                  L 11, 72
                  L 50, 95
                  L 89, 73
                  L 89, 28 z"
                />
            </g>
        </svg>
    );
}

export default Logo;