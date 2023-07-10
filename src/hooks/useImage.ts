import { useEffect, useState } from 'react'

const useImage = (fileName: string) => {
  const [image, setImage] = useState<string>('')
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await import(`../../public/diplomas/${fileName}`)
        setImage(response.default)
      } catch (error) {
        throw new Error('Error al buscar imagen')
      } finally {
        setLoaded(true)
      }
    }
    fetchImage()
  }, [fileName])

  return { image, loaded }
}

export default useImage
