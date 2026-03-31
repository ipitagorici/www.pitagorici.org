import React from "react";

export default function EventDetailsLayout({ children }: {
    children: Readonly<React.ReactNode>
}) {
    return <>
        { children } 
    </>
}