export interface IConsulta{
  idConsulta: number;
  paciente: Paciente;
  medico: IMedico;
  especialidad: IEspecialidad;
  numConsultorio: string;
  fechaConsulta: string;
  detalleConsulta: IDetalleConsulta[];
  horaConsulta: string;
}

export interface IDetalleConsulta{
  idDetalleConsulta: number;
  diagnostico: string;
  tratamiento: string;
  examenes: IExamene[];
}

export interface IExamene{
idExamen: number;
nombreExamen: string;
lectura: string;
}

export interface IEspecialidad{
  idEspecialidad: number;
  nombreEspeciadad: string;
}

export interface IMedico{
  idMedico: number;
  nombreMedico: string;
  apellidoMedico: string;
  jvpm: string;
}

export interface Paciente{
  idPaciente: number;
  nombrePaciente: string;
  apellidoPaciente: string;
  identPaciente: string;
  direccionPaciente: string;
  telefonoPaciente: string;
  emailPaciente: string;
}

export interface PacientePrueba{
  nombrePaciente: string;
  apellidoPaciente: string;
  direccionPaciente: string;
  telefonoPaciente: string;
  emailPaciente: string;
}
