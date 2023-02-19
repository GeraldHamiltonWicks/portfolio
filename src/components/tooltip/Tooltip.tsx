import { ReactElement } from "react";

interface TooltipProps {
    text: string,
    className?: string,
    children: ReactElement
}


export const Tooltip = (props: TooltipProps): ReactElement => {
    return (
        <div id="tooltip" className={props.className}>
            <span className="tooltip-text">{props.text}</span>
            { props.children }
        </div>
    );
}