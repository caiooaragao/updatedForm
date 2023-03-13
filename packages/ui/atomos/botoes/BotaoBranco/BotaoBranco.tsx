interface Props{
    texto: string
}

export const BotaoBranco = ({texto} :Props) => {
  return (
    <button className="btn btn-outline-secondary py-3 px-4 w-full xl:w-32 mt-3 xl:mt-0 align-top">{texto}</button>
  )
}

