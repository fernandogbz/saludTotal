export const GenderOptions = ["Male", "Female", "Other"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "Male" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Certificado de Nacimiento",
  "Licencia de Conducir",
  "Carnet de Identidad (RUT)",
  "Pasaporte",
  "Cedula de Identidad Extranjera",
  "Carnet de Refugiado",
  "Documento de Identidad Provisorio",
];

export const Doctors = [
  {
    image: "/assets/images/dr-green.png",
    name: "Juan Carlos Verde",
  },
  {
    image: "/assets/images/dr-cameron.png",
    name: "María Elena Cámara",
  },
  {
    image: "/assets/images/dr-livingston.png",
    name: "Diego Alejandro Vives",
  },
  {
    image: "/assets/images/dr-peter.png",
    name: "Eduardo Pérez",
  },
  {
    image: "/assets/images/dr-powell.png",
    name: "Javiera Poblete",
  },
  {
    image: "/assets/images/dr-remirez.png",
    name: "Alex Ramírez",
  },
  {
    image: "/assets/images/dr-lee.png",
    name: "Jazmín Lee",
  },
  {
    image: "/assets/images/dr-cruz.png",
    name: "Alyana Cruz",
  },
  {
    image: "/assets/images/dr-sharma.png",
    name: "Carlos Sharma",
  },
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};
