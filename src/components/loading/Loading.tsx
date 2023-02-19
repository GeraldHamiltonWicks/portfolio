import { ReactElement } from "react";

interface LoadingProps {
    show: boolean
}

export const Loading = (props: LoadingProps): ReactElement => {
    return (
        <div id="loading" hidden={!props.show}>
        </div>
    );
}