import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export interface PatientData {
  fullName: string;
  age: string;
  dob: Date | undefined;
  sex: 'Femenino' | 'Masculino' | 'Otro' | '';
  address: string;
  phone: string;
  email: string;
  occupation: string;
  maritalStatus: string;
  curp: string;
  tutor: string;
  signature: string;
}

export interface MedicalCondition {
  name: string;
  hasCondition: 'Sí' | 'No' | null;
  details: string;
}

export interface ClinicalHistoryState {
  patientId: string;
  patientData: PatientData;
  medicalHistory: MedicalCondition[];
  chiefComplaint: string;
  isFinalized: boolean;
  generatePatientId: () => void;
  setPatientData: (field: keyof PatientData, value: any) => void;
  setMedicalHistory: (index: number, field: keyof MedicalCondition, value: any) => void;
  setChiefComplaint: (value: string) => void;
  finalizeHistory: () => void;
  resetState: () => void;
}

const medicalConditionsList: string[] = [
    'Diabetes',
    'Hipertensión',
    'Hipotensión',
    'Cardiopatías',
    'Enfermedades tiroideas',
    'Trastornos hormonales',
    'Alergias (medicamentos, etc.)',
    'Embarazo o lactancia',
    'Epilepsia',
    'Enfermedades autoinmunes',
    'Uso de medicamentos actuales',
];

const getInitialState = () => ({
  patientId: '',
  patientData: {
    fullName: '',
    age: '',
    dob: undefined,
    sex: '',
    address: '',
    phone: '',
    email: '',
    occupation: '',
    maritalStatus: '',
    curp: '',
    tutor: '',
    signature: '',
  },
  medicalHistory: medicalConditionsList.map(name => ({
    name,
    hasCondition: null,
    details: '',
  })),
  chiefComplaint: '',
  isFinalized: false,
});

export const useClinicalHistoryStore = create<ClinicalHistoryState>()(
  devtools(
    persist(
      (set, get) => ({
        ...getInitialState(),
        generatePatientId: () => {
          const timestamp = new Date().getTime().toString(36);
          const randomStr = Math.random().toString(36).substring(2, 7);
          set({ patientId: `EXP-${timestamp}-${randomStr}`.toUpperCase() });
        },
        setPatientData: (field, value) => {
          set(state => ({
            patientData: {
              ...state.patientData,
              [field]: value,
            },
          }));
        },
        setMedicalHistory: (index, field, value) => {
          set(state => {
            const newMedicalHistory = [...state.medicalHistory];
            newMedicalHistory[index] = {
              ...newMedicalHistory[index],
              [field]: value,
            };
            if(field === 'hasCondition' && value === 'No') {
                newMedicalHistory[index].details = '';
            }
            return { medicalHistory: newMedicalHistory };
          });
        },
        setChiefComplaint: value => {
          set({ chiefComplaint: value });
        },
        finalizeHistory: () => {
          set({ isFinalized: true });
        },
        resetState: () => {
            const newState = getInitialState();
            set(newState);
            get().generatePatientId();
        }
      }),
      {
        name: 'clinical-history-storage',
      }
    )
  )
);
