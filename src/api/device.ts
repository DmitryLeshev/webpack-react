import { fetchData } from '@/fetch'

const fetchDevice = fetchData('device')

interface IApiDevice {
  list: () => any
  genCert: ({ id }: { id: number }) => any
  get: ({ id }: { id: number }) => any
  getPrograms: ({ id }: { id: number }) => any
}

const device: IApiDevice = {
  list: async () => await fetchDevice({ list: {} }),
  genCert: async ({ id }) => await fetchDevice({ genCert: { id } }),
  get: async ({ id }) => await fetchDevice({ get: { id } }),
  getPrograms: async ({ id }) => await fetchDevice({ getPrograms: { id } }),
}

export { device }
