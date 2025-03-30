type InputProps = {
  id: string
  label?: string
} & React.ComponentProps<'input'>

export function Input({ id, label, placeholder, type, ...props }: InputProps) {
  return (
    <>
      <label>{label}</label>
      <input
        id={id}
        type={type}
        className={`w-64 p-2 text-center text-default rounded-lg
          border-b-2 border-primary duration-150
          focus:outline-none focus:ring-2 focus:ring-primary 
           placeholder:italic placeholder:text-sm placeholder:text-mygray-400`}
        placeholder={placeholder}
        {...props}
      />
    </>
  )
}
