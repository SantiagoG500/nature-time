export const defaultUrl = 'https://es.wikipedia.org/w/api.php'

export const wikipediaError = {
  languageNotAvailable: 'The language prefix that you provided is not within the allowed languages.',
  searchTermNotProvided: "There's not any search term provided, search is not possible without it."
}

export const languages = {
  spanish: 'es',
  english: 'en'
}

export const Wikipedia = (() => {
  const baseUrl = (lang) => {
    if (lang && !languages[lang]) throw new Error(wikipediaError.languageNotAvailable)

    return `https://${lang ?? languages.spanish}.wikipedia.org/w/api.php`
  }

  const categorySearchUrl = ({ category = 'Fauna_de_Colombia' }) => {
    if (category === '') throw new Error(wikipediaError.searchTermNotProvided)

    const url = new URL(baseUrl())

    url.searchParams.set('action', 'query')
    url.searchParams.set('format', 'json')
    url.searchParams.set('list', 'categorymembers')
    url.searchParams.set('cmtitle', `category:${category}`)
    url.searchParams.set('cmlimit', '10')
    url.searchParams.set('origin', '*')

    return url.toString()
  }

  const search = async ({ search }) => {
    if (search === 0) { throw new Error(wikipediaError.searchTermNotProvided) }

    const url = new URL(baseUrl())

    url.searchParams.set('action', 'query')
    url.searchParams.set('titles', search)
    url.searchParams.set('format', 'json')
    url.searchParams.set('prop', 'extracts')
    url.searchParams.set('exintro', '')
    // url.searchParams.set('explaintext', '')
    url.searchParams.set('origin', '*')

    const request = await fetch(url, {
      method: 'GET'
    })
    const json = request.json()

    return json
  }

  const generalSearch = async ({ category }) => {
    const url = categorySearchUrl({ category })
    const request = await fetch(url)
    const json = request.json()

    return json
  }

  return {
    baseUrl,
    search,

    generalSearch,
    categorySearchUrl
  }
})()
