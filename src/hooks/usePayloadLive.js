import { useState, useEffect, useMemo } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useLivePreview } from '@payloadcms/live-preview-react'
import { getHomePageData, populateMediaCache } from '@/services/payloadApi'

const CMS_URL = import.meta.env.VITE_CMS_URL || 'https://client.cloudgenz.com'


export function useHomePageLive() {
  const [, setMediaCacheTick] = useState(0)

  // Listen for background media cache resolution events
  useEffect(() => {
    const handleMediaCached = () => {
      setMediaCacheTick(t => t + 1)
    }
    window.addEventListener('payload-media-cached', handleMediaCached)
    return () => window.removeEventListener('payload-media-cached', handleMediaCached)
  }, [])

  // 1. Fetch initial data with TanStack React Query
  const { data: initialData, isLoading, error } = useQuery({
    queryKey: ['home-page-data'],
    queryFn: getHomePageData,
    staleTime: 1000 * 60 * 5, // 5 minutes cache
    refetchOnWindowFocus: false,
  })

  useEffect(() => {
    if (initialData) {
      populateMediaCache(initialData)
    }
  }, [initialData])

  // 2. Subscribe to Payload Live Preview hook
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

  // 3. Listen to real-time iframe postMessage events for instant typing
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

  // 4. Return instant keystroke data with automatic media cache resolution
  const activeData = useMemo(() => {
    return postMessageData || liveData || initialData
  }, [postMessageData, liveData, initialData])

  return {
    data: activeData,
    isLoading,
    error,
  }
}
