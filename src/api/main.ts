import { fetchData } from '@/fetch'

const fetchMain = fetchData('main')

interface IApiMain {
  index: () => any
  getGraphicData: () => any
}

const main: IApiMain = {
  index: async () => await fetchMain({ index: {} }),
  getGraphicData: async () => await fetchMain({ getGraphicData: {} }),
}

export { main }
