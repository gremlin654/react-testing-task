export interface IResponsData {
  status: string;
}

export interface IResponsDataProps {
  responseData: IResponsData | undefined;
}

export interface IUserFormProps {
  setResponseData: React.Dispatch<React.SetStateAction<IResponsData | undefined>>;
}

export interface IPostData {
  action: string;
  id: number;
  name: string;
  surname: string;
  patronymic: string;
  image: Blob | null;
}
