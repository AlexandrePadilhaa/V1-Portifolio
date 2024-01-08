'use client';
import CopyIcon from "./icons/copyIcon";

interface CopyButtonProps {
    copyText: string;
}


export const CopyButton = ({ copyText }: CopyButtonProps) => {
    const handleCopy = () => {
            navigator.clipboard.writeText(copyText);
    }
    

    return (
        <button onClick={handleCopy} className="inline-flex justify-center items-center">
            <CopyIcon title="clique aqui para copiar" className="fill-white" />
        </button>
    );
};