import { useEffect } from "react";

const CloseMenu: React.FC<any> = (props) => {
    const { isOpen } = props

    useEffect(() => {
        window.addEventListener("click", closeMenuOnClickOutside)
        return () => window.removeEventListener("click", closeMenuOnClickOutside)
    })

    const closeMenuOnClickOutside = (e: any) => {
        const target = e.target
        const menu = target.closest(".menu")

        if (!menu) {
            isOpen(false)
        }
        return null
    }

    return <div />
}



export default CloseMenu