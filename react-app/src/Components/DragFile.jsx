import { useRef } from "react"

export default function DragFile() {
    const ref = useRef(null)
    const mouseHandler = (e) => {
        const rect = ref.current.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const offsetY = e.clientY - rect.top;
        const handleMouseMove = (e) => {
            const newX = e.clientX - offsetX;
            const newY = e.clientY - offsetY;
            ref.current.style.left = `${newX}px`;
            ref.current.style.top = `${newY}px`
        }

        const handlMuseUp = (e) => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handlMuseUp)
        }


        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handlMuseUp)

    }
    return (
        <p ref={ref} className="p-2 border select-none cursor-move absolute border-amber-600" onMouseDown={(e) => { mouseHandler(e) }} >
            Drag File
        </p>
    )
}