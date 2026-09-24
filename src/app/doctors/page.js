import DoctorExpertise from '@/components/doctors/Doctorexpertise'
import DoctorProfileHero from '@/components/doctors/DoctorProfileHero'
import DoctorQualifications from '@/components/doctors/Doctorqualifications'
import React from 'react'

const page = () => {
  return (
    <div>
      <DoctorProfileHero/>
      <DoctorExpertise/>
      <DoctorQualifications/>
    </div>
  )
}
                   
export default page
