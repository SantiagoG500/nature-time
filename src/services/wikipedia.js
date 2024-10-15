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

// function xd () {
//   Wikipedia.generalSearch({})
//     .then(res => console.log(res))
// }

// xd()

// onst searchUrl = (search) => {
//   if (!search) throw new Error(wikipediaError.searchTermNotProvided)

//   const url = new URL(baseUrl())
//   url.searchParams.set('action', 'query')
//   url.searchParams.set('titles', search)
//   url.searchParams.set('prop', 'extracts')
//   url.searchParams.set('format', 'json')
//   url.searchParams.set('explaintext', 'true')
//   url.searchParams.set('origin', '*')

//   return url.toString()
// }
// const openSearchUrl = (search) => {
//   if (!search) throw new Error(wikipediaError.searchTermNotProvided)

//   const url = new URL(baseUrl())
//   url.searchParams.set('action', 'opensearch')
//   url.searchParams.set('search', search)
//   url.searchParams.set('format', 'json')
//   url.searchParams.set('origin', '*')

//   return url.toString()
// }
// const searchIdUrl = (pageId) => {
//   if (!search) throw new Error(wikipediaError.searchTermNotProvided)

//   const url = new URL(baseUrl())

//   url.searchParams.set('action', 'query')
//   url.searchParams.set('format', 'json')
//   url.searchParams.set('pageids', pageId)
//   url.searchParams.set('prop', 'extracts|pageimages')
//   url.searchParams.set('exintro', '')
//   url.searchParams.set('explaintext', '')
//   url.searchParams.set('piprop', 'thumbnail')
//   url.searchParams.set('pithumbsize', '500')
//   url.searchParams.set('origin', '*')

//   return url.toString()
// }

// // simple search for quick queries
// const search = async (search) => {
//   try {
//     const query = await fetch(searchUrl(search))

//     if (!query.ok) {
//       throw new Error(`HTTP error when searching, status: ${query.status}`)
//     }
//     const dataJson = await query.json()

//     return dataJson
//   } catch (error) {
//     console.error(error)
//     return error
//   }
// }
// // complex search with aditional info about the search
// const openSearch = async (search) => {
//   try {
//     console.log(search)
//     const query = await fetch(openSearchUrl(search))

//     if (!query.ok) {
//       throw new Error('HTTP error when searching (openSearch)')
//     }
//     const dataJson = await query.json()

//     const [searchTerm, articleTitles, articleDescriptions, articleUrls] = dataJson

//     const articles = articleTitles.map((title, index) => {
//       return { title, description: articleDescriptions[index], url: articleUrls[index] }
//     })

//     return { searchTerm, articles }
//   } catch (error) {
//     console.error(error)
//     return error
//   }
// }

// const searchId = async (pageid) => {
//   try {
//     const query = await fetch(searchIdUrl(pageid))

//     if (!query.ok) {
//       throw new Error(`HTTP error when searching, status: ${query.status}`)
//     }
//     const dataJson = await query.json()

//     return dataJson
//   } catch (error) {
//     console.error(error)
//     return error
//   }
// }

// return {
//   search,
//   openSearch,
//   searchId,

//   searchUrl,
//   baseUrl,
//   searchIdUrl
// }
