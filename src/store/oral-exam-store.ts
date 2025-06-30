import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export interface ExtraoralState {
  simetriaFacial: string;
  ganglios: string;
  mandibula: string;
  atm: string;
  otrosHallazgos: string;
}

export interface IntraoralState {
  labios: string;
  carrillos: string;
  lengua: string;
  pisoDeBoca: string;
  encias: string;
  paladar: string;
  maxilarSuperior: string;
  maxilarInferior: string;
}

export interface HigieneBucalState {
  indiceDePlaca: string;
  halitosis: string;
  recomendaciones: string;
}

export interface DiagnosisData {
  description: string;
  [key: string]: any;
}

export type OralExamSlice = 'extraoral' | 'intraoral' | 'higiene';

export interface OralExamState {
  extraoral: ExtraoralState;
  intraoral: IntraoralState;
  higiene: HigieneBucalState;
  dentalDiagnosis: string[];
  setField: (section: OralExamSlice, field: string, value: any) => void;
  importDentalState: (jsonString: string) => boolean;
  resetState: () => void;
}

const getInitialState = (): Omit<OralExamState, 'setField' | 'importDentalState' | 'resetState'> => ({
  extraoral: {
    simetriaFacial: '',
    ganglios: '',
    mandibula: '',
    atm: '',
    otrosHallazgos: '',
  },
  intraoral: {
    labios: '',
    carrillos: '',
    lengua: '',
    pisoDeBoca: '',
    encias: '',
    paladar: '',
    maxilarSuperior: '',
    maxilarInferior: '',
  },
  higiene: {
    indiceDePlaca: '',
    halitosis: '',
    recomendaciones: '',
  },
  dentalDiagnosis: [],
});

export const useOralExamStore = create<OralExamState>()(
  devtools(
    persist(
      (set) => ({
        ...getInitialState(),
        setField: (section, field, value) => {
          set((state) => ({
            [section]: {
              ...state[section],
              [field]: value,
            },
          }));
        },
        importDentalState: (jsonString: string) => {
          try {
            const parsedData = JSON.parse(jsonString);

            if (
              (parsedData.type !== 'diagnosis' && parsedData.type !== 'treatment') ||
              !Array.isArray(parsedData.data)
            ) {
              console.error("Invalid diagnosis/treatment JSON format. Expected 'type: \"treatment\"' or 'type: \"diagnosis\"'.");
              return false;
            }

            const descriptions: string[] = parsedData.data
              .map((item: DiagnosisData) => item.description)
              .filter((desc: string | undefined): desc is string => !!desc);
            
            set({ dentalDiagnosis: descriptions });
            return true;
          } catch (e) {
            console.error('Failed to parse or process diagnosis/treatment JSON', e);
            return false;
          }
        },
        resetState: () => {
          set(getInitialState());
        },
      }),
      {
        name: 'oral-exam-storage',
      }
    )
  )
);
