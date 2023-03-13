interface Props {
  texto: string;
  onSubmit?: (e: any) => void;
  type?: string;

}

export const BotaoAzul = ({ texto }: Props) => {
  return (
    <button className="btn btn-primary py-3 px-4 w-full xl:w-32 xl:mr-3 align-top" >{texto}</button>
  );
};

