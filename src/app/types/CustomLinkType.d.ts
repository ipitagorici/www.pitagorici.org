export type CustomLinkType = {
    href: string,
    label?: string,
    icon?: string | SVGElement | ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>
}