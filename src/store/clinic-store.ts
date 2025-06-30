import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export interface ClinicInfo {
  name: string;
  address: string;
  phone: string;
  email: string;
  logo: string;
}

export interface DoctorInfo {
    name: string;
    professionalLicense: string;
    university: string;
    specialty: string;
    specialtyUniversity: string;
    phone: string;
    email: string;
    signature: string;
}

export interface ClinicState {
  clinicInfo: ClinicInfo;
  doctorInfo: DoctorInfo;
  updateClinicInfo: (updates: Partial<ClinicInfo>) => void;
  updateDoctorInfo: (updates: Partial<DoctorInfo>) => void;
}

const getInitialState = (): Pick<ClinicState, 'clinicInfo' | 'doctorInfo'> => ({
  clinicInfo: {
    name: 'Dental History Pro',
    address: '123 Smile Street, Toothville, MD 12345',
    phone: '555-123-4567',
    email: 'contact@dentalhistory.pro',
    logo: '',
  },
  doctorInfo: {
    name: 'Dr. Alan Grant',
    professionalLicense: '12345678',
    university: 'Universidad Nacional Autónoma de México',
    specialty: 'Endodoncia',
    specialtyUniversity: 'Universidad de Anáhuac',
    phone: '555-987-6543',
    email: 'alan.grant@dentalhistory.pro',
    signature: '',
  }
});

export const useClinicStore = create<ClinicState>()(
  devtools(
    persist(
      (set) => ({
        ...getInitialState(),
        updateClinicInfo: (updates) => {
          set((state) => ({
            clinicInfo: { ...state.clinicInfo, ...updates },
          }));
        },
        updateDoctorInfo: (updates) => {
            set((state) => ({
              doctorInfo: { ...state.doctorInfo, ...updates },
            }));
        },
      }),
      {
        name: 'clinic-info-storage',
      }
    )
  )
);
