export interface IConsultaExcelTabla{
  tablaConsulta: ITablaConsulta[];
}

export interface IConsultaExcelTablaPaciente{
  tablaConsulta: ITablaPaciente[];
}

export interface ITablaConsulta{
  fechaConsulta:string;
  numConsultorio:string;
  especialidad:string;
  paciente:string;
  medico: string;
}

export interface ITablaPaciente{
  nombrePaciente: string;
  apellidoPaciente: string;
  direccionPaciente: string;
  telefonoPaciente: string;
  emailPaciente: string;
}
