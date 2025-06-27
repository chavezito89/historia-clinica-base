# **App Name**: Dental History Pro

## Core Features:

- Patient Identification: Record patient identification data including name, age, date of birth, gender, address, contact phone, email, occupation, marital status and CURP.
- Medical History Recording: Record a patient's medical history using a checklist of common conditions such as diabetes, hypertension, heart conditions, thyroid diseases, hormonal disorders, allergies, pregnancy, epilepsy and autoimmune diseases.
- Chief Complaint Input: Allow a dentist to type in a summary of the reason the patient is visiting the clinic today
- Unique Patient ID Generation: Generate a unique patient ID upon patient registration to use in the application and on the output PDFs.
- PDF Export: Enable exporting patient histories to a formatted PDF document, complete with clinic info (configured separately) and an auto-generated patient ID.
- Zustand Storage: Use Zustand for state management to store and manage patient data, allowing for easy integration with a backend database later.

## Style Guidelines:

- Light Mode - Buttons: #4180AB, Background: #FFFFFF, Card Background: #FFFFFF, Secondary Buttons/Hover: #8AB3CF, Borders: #E2E8F0, Typography: #1E293B, Headers: #1E293B, Subtitles: #64748B
- Dark Mode - Buttons: #4180AB, Background: #0F172A, Card Background: #1E293B, Secondary Buttons/Hover: #214863, Borders: #334155, Typography: #F8FAFC, Headers: #F8FAFC, Subtitles: #94A3B8
- Body and headline font: 'Manrope' (sans-serif).
- Employ a consistent set of simple icons (using Lucid SVGs) that visually represent different dental conditions and treatments to improve usability.
- Adopt a clean, structured layout using Tailwind CSS grid system to ensure the patient's data sections are well-organized.