import { ChangeEvent, HTMLProps } from "react"

type SearchInput = {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
} & HTMLProps<HTMLInputElement>

export default function SearchInput({ onChange }: SearchInput) {
    return (
        <input
            onChange={onChange}
            type="text"
            className="outline-none border rounded-xl w-full border-gray-300 text-[#333] font-semibold text-sm px-4 py-2"
        />
    )
}