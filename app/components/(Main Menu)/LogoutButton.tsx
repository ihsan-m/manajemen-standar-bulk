import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import {BiLogOut} from "react-icons/bi"

interface Props {
    property1: "variant-2" | "default";
}

export const LogoutButton = ({ property1 }: Props): JSX.Element => {
    const [state, dispatch] = useReducer(reducer, {
        property1: property1 || "default",
    });

    return (
        <div
            className={`border border-solid w-[125px] flex items-center gap-[8px] px-[15px] py-0 h-[40px] rounded-[5px] relative ${
                state.property1 === "variant-2" ? "border-red-600" : "border-slate-50"
            } ${state.property1 === "default" ? "bg-red-600" : ""}`}
            onMouseLeave={() => {
                dispatch("mouse_leave");
            }}
            onMouseEnter={() => {
                dispatch("mouse_enter");
            }}
        >
            <BiLogOut
                className="!relative !w-[24px] !h-[24px]"
                color={state.property1 === "variant-2" ? "#DC2626" : "#F8FAFC"}
            />
            <div
                className={`font-body-b2 w-fit tracking-[var(--body-b2-letter-spacing)] [font-style:var(--body-b2-font-style)] text-[length:var(--body-b2-font-size)] font-[number:var(--body-b2-font-weight)] text-center whitespace-nowrap leading-[var(--body-b2-line-height)] relative ${
                    state.property1 === "variant-2" ? "text-red-600" : "text-slate-50"
                }`}
            >
                Log Out
            </div>
        </div>
    );
};

function reducer(state: any, action: any) {
    switch (action) {
        case "mouse_enter":
            return {
                ...state,
                property1: "variant-2",
            };

        case "mouse_leave":
            return {
                ...state,
                property1: "default",
            };
    }

    return state;
}

LogoutButton.propTypes = {
    property1: PropTypes.oneOf(["variant-2", "default"]),
};
