import { ReactElement } from "react";

// This icon only be imported inside `Icon.tsx`;
export const FacebookIcon = (): ReactElement => {
    return (
            <svg id="icon facebook-icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_2_75)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0 16.0893C0 24.044 5.77733 30.6587 13.3333 32V20.444H9.33333V16H13.3333V12.444C13.3333 8.444 15.9107 6.22267 19.556 6.22267C20.7107 6.22267 21.956 6.4 23.1107 6.57733V10.6667H21.0667C19.1107 10.6667 18.6667 11.644 18.6667 12.8893V16H22.9333L22.2227 20.444H18.6667V32C26.2227 30.6587 32 24.0453 32 16.0893C32 7.24 24.8 0 16 0C7.2 0 0 7.24 0 16.0893Z" fill="white"/>
                </g>
                <defs>
                    <clipPath id="clip0_2_75">
                        <rect width="32" height="32" fill="white"/>
                    </clipPath>
                </defs>
            </svg>
    );
}
