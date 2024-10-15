import { Wikipedia } from '../services/wikipedia'

export async function WikipediaLoader ({ request }) {
  const url = new URL(request.url)
  const search = url.searchParams.get('searchterm')

  if (!search) { throw new Error('There is not any search term provided') }

  const response = await Wikipedia.search({ search })

  return { response }
}
