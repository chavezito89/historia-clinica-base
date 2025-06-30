import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export interface ClinicInfo {
  name: string;
  address: string;
  phone: string;
  email: string;
  professionalLicense: string;
}

export interface ClinicState {
  clinicInfo: ClinicInfo;
  updateClinicInfo: (updates: Partial<ClinicInfo>) => void;
}

const getInitialState = (): Pick<ClinicState, 'clinicInfo'> => ({
  clinicInfo: {
    name: 'Dental History Pro',
    address: '123 Smile Street, Toothville, MD 12345',
    phone: '555-123-4567',
    email: 'contact@dentalhistory.pro',
    professionalLicense: '12345678',
  },
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
      }),
      {
        name: 'clinic-info-storage',
      }
    )
  )
);
