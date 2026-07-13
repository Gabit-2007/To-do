type inputBoxProps = React.InputHTMLAttributes<HTMLInputElement> & {
  Label: string;
  error?: string;
  optional?: boolean;
};

export function InputBox({
  Label,
  optional,
  error,
  type,
  ...props
}: inputBoxProps) {
  return (
    <div className="flex flex-col gap-1">
      <label className="font-elms font-semibold items-center flex gap-1">
        {Label}
        <span className="text-slate-400 font-normal text-sm">
          {optional ? <p>(opcional)</p> : <p className="text-red-800">*</p>}
        </span>
      </label>

      <input
        {...props}
        type={type}
        className="border-1 text-secundaria border-gray-400 
            w-full rounded-sm p-1 transition-colors ease-in duration-200
            in-focus-within:border-secundaria"
      />

      <div>
        <p
          className={`
                text-red-500
                text-sm
                overflow-hidden
                transition-all
                ease-out
                duration-500
                ${
                  error
                    ? "opacity-100 min-h-full max-h-full mt-1"
                    : "opacity-0 max-h-0"
                }`}
        >
          {error}
        </p>
      </div>
    </div>
  );
}
