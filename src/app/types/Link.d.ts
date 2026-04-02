export type Link = {
    href: string,
    label?: string,
    icon?: string | SVGElement | ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>
}