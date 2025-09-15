export const apiUrls = {
  login: {
    method: 'POST',
    url: 'auth/login'
  },
  signup: {
    method: 'POST',
    url: 'auth/signup'
  },
  getDoctorsByProfessionIdApi: {
    method: 'GET',
    url: 'api/doctors/professionals/{{professionId}}'
  },
  getProfessionApi: {
    method: 'GET',
    url: 'api/professionals'
  },
  setDoctorRateApi: {
    method: 'POST',
    url: 'api/rates'
  },
  getDoctorRatesApi: {
    method: 'GET',
    url: 'api/rates/doctors/{{doctorId}}'
  },
  getDoctorSchedules: {
    method: 'GET',
    url: 'api/visits/doctors/{{doctorId}}'
  },
  deleteDoctorScheduleApi: {
    method: 'DELETE',
    url: 'api/visits'
  },
  getSchedule: {
    method: 'GET',
    url: 'api/visits/{{scheduleId}}'
  },
  assignScheduleToCustomer: {
    method: 'POST',
    url: 'api/visits/{{scheduleId}}/customers/{{customerId}}'
  },
  getUserInfo: {
    method: 'GET',
    url: 'api/users/{{userId}}'
  },
  updateUserInfo: {
    method: 'PUT',
    url: 'api/users'
  },
  createVisit: {
    method: 'POST',
    url: 'api/visits'
  },
  getCustomerVisits: {
    method: 'GET',
    url: 'api/visits/customers/{{customerId}}'
  }
} as const;
