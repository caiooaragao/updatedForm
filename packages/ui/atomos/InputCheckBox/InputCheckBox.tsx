interface props {
  text: string
}


const InputCheckbox = ({ text }: props) => {
  return (
    <>
      <input id="remember-me" type="checkbox" className="form-check-input border mr-2" />
      <label className="cursor-pointer select-none" htmlFor="remember-me">{text}</label>
    </>
  )
}

export default InputCheckbox