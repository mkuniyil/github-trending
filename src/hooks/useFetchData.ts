import { useQuery } from 'react-query'
import { fetchAndParse } from '../utils/fetchAndParse'

export default function useFetchData(id: string) {
  return useQuery(`get-${id}`, async () => await fetchAndParse(`${id}`))
}
