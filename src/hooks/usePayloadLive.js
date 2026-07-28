import { useState, useEffect, useMemo } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useLivePreview } from '@payloadcms/live-preview-react'
import { getHomePageData, getAboutPageData, populateMediaCache } from '@/services/payloadApi'

const CMS_URL = import.meta.env.VITE_CMS_URL || 'https://client.cloudgenz.com'

/**
 * Custom hook combining TanStack React Query + Payload Live Preview for HomePage
 */
export function useHomePageLive() {
  const [, setMediaCacheTick] = useState(0)

  useEffect(() => {
    const handleMediaCached = () => {
      setMediaCacheTick(t => t + 1)
    }
    window.addEventListener('payload-media-cached', handleMediaCached)
    return () => window.removeEventListener('payload-media-cached', handleMediaCached)
  }, [])

  const { data: initialData, isLoading, error } = useQuery({
    queryKey: ['home-page-data'],
    queryFn: getHomePageData,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  })

  useEffect(() => {
    if (initialData) {
      populateMediaCache(initialData)
    }
  }, [initialData])

  const { data: liveData } = useLivePreview({
    initialData,
    serverURL: CMS_URL,
    depth: 2,
  })

  useEffect(() => {
    if (liveData) {
      populateMediaCache(liveData)
    }
  }, [liveData])

  const [postMessageData, setPostMessageData] = useState(null)

  useEffect(() => {
    const handleMessage = (event) => {
      if (event?.data?.type === 'payload-live-preview' || event?.data?.slug === 'home-page') {
        if (event.data.data) {
          setPostMessageData(event.data.data)
        }
      }
    }
    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  const activeData = useMemo(() => {
    return postMessageData || liveData || initialData
  }, [postMessageData, liveData, initialData])

  return {
    data: activeData,
    isLoading,
    error,
  }
}

/**
 * Custom hook combining TanStack React Query + Payload Live Preview for AboutPage
 */
export function useAboutPageLive() {
  const [, setMediaCacheTick] = useState(0)

  useEffect(() => {
    const handleMediaCached = () => {
      setMediaCacheTick(t => t + 1)
    }
    window.addEventListener('payload-media-cached', handleMediaCached)
    return () => window.removeEventListener('payload-media-cached', handleMediaCached)
  }, [])

  const { data: initialData, isLoading, error } = useQuery({
    queryKey: ['about-page-data'],
    queryFn: getAboutPageData,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  })

  useEffect(() => {
    if (initialData) {
      populateMediaCache(initialData)
    }
  }, [initialData])

  const { data: liveData } = useLivePreview({
    initialData,
    serverURL: CMS_URL,
    depth: 2,
  })

  useEffect(() => {
    if (liveData) {
      populateMediaCache(liveData)
    }
  }, [liveData])

  const [postMessageData, setPostMessageData] = useState(null)

  useEffect(() => {
    const handleMessage = (event) => {
      if (event?.data?.type === 'payload-live-preview' || event?.data?.slug === 'about-page') {
        if (event.data.data) {
          setPostMessageData(event.data.data)
        }
      }
    }
    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  const activeData = useMemo(() => {
    return postMessageData || liveData || initialData
  }, [postMessageData, liveData, initialData])

  return {
    data: activeData,
    isLoading,
    error,
  }
}
