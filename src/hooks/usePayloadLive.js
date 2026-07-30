import { useState, useEffect, useMemo } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useLivePreview } from '@payloadcms/live-preview-react'
import {
  getHomePageData,
  getAboutPageData,
  getProgramsPageData,
  getGalleryPageData,
  getJoinUsPageData,
  getContactPageData,
  getProgramDetailBySlug,
  populateMediaCache,
} from '@/services/payloadApi'

const CMS_URL = import.meta.env.VITE_CMS_URL || 'https://pfh-cms.cloudgenz.com'

function getBestData(postMessageData, liveData, initialData) {
  const isValid = (d) => d && typeof d === 'object' && Object.keys(d).length > 2
  if (isValid(postMessageData)) return postMessageData
  if (isValid(liveData)) return liveData
  return initialData
}

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
    staleTime: 1000 * 60 * 60, // 1 hour stale time
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
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
    return getBestData(postMessageData, liveData, initialData)
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
    staleTime: 1000 * 60 * 60,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
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
    return getBestData(postMessageData, liveData, initialData)
  }, [postMessageData, liveData, initialData])

  return {
    data: activeData,
    isLoading,
    error,
  }
}

/**
 * Custom hook combining TanStack React Query + Payload Live Preview for ProgramsPage
 */
export function useProgramsPageLive() {
  const [, setMediaCacheTick] = useState(0)

  useEffect(() => {
    const handleMediaCached = () => {
      setMediaCacheTick(t => t + 1)
    }
    window.addEventListener('payload-media-cached', handleMediaCached)
    return () => window.removeEventListener('payload-media-cached', handleMediaCached)
  }, [])

  const { data: initialData, isLoading, error } = useQuery({
    queryKey: ['programs-page-data'],
    queryFn: getProgramsPageData,
    staleTime: 1000 * 60 * 60,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
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
      if (event?.data?.type === 'payload-live-preview' || event?.data?.slug === 'programs-page') {
        if (event.data.data) {
          setPostMessageData(event.data.data)
        }
      }
    }
    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  const activeData = useMemo(() => {
    return getBestData(postMessageData, liveData, initialData)
  }, [postMessageData, liveData, initialData])

  return {
    data: activeData,
    isLoading,
    error,
  }
}

/**
 * Custom hook combining TanStack React Query + Payload Live Preview for GalleryPage
 */
export function useGalleryPageLive() {
  const [, setMediaCacheTick] = useState(0)

  useEffect(() => {
    const handleMediaCached = () => {
      setMediaCacheTick(t => t + 1)
    }
    window.addEventListener('payload-media-cached', handleMediaCached)
    return () => window.removeEventListener('payload-media-cached', handleMediaCached)
  }, [])

  const { data: initialData, isLoading, error } = useQuery({
    queryKey: ['gallery-page-data'],
    queryFn: getGalleryPageData,
    staleTime: 1000 * 60 * 60,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
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
      if (event?.data?.type === 'payload-live-preview' || event?.data?.slug === 'gallery-page') {
        if (event.data.data) {
          setPostMessageData(event.data.data)
        }
      }
    }
    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  const activeData = useMemo(() => {
    return getBestData(postMessageData, liveData, initialData)
  }, [postMessageData, liveData, initialData])

  return {
    data: activeData,
    isLoading,
    error,
  }
}

/**
 * Custom hook combining TanStack React Query + Payload Live Preview for JoinUsPage
 */
export function useJoinUsPageLive() {
  const [, setMediaCacheTick] = useState(0)

  useEffect(() => {
    const handleMediaCached = () => {
      setMediaCacheTick(t => t + 1)
    }
    window.addEventListener('payload-media-cached', handleMediaCached)
    return () => window.removeEventListener('payload-media-cached', handleMediaCached)
  }, [])

  const { data: initialData, isLoading, error } = useQuery({
    queryKey: ['join-us-page-data'],
    queryFn: getJoinUsPageData,
    staleTime: 1000 * 60 * 60,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
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
      if (event?.data?.type === 'payload-live-preview' || event?.data?.slug === 'join-us-page') {
        if (event.data.data) {
          setPostMessageData(event.data.data)
        }
      }
    }
    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  const activeData = useMemo(() => {
    return getBestData(postMessageData, liveData, initialData)
  }, [postMessageData, liveData, initialData])

  return {
    data: activeData,
    isLoading,
    error,
  }
}

/**
 * Custom hook combining TanStack React Query + Payload Live Preview for ContactPage
 */
export function useContactPageLive() {
  const [, setMediaCacheTick] = useState(0)

  useEffect(() => {
    const handleMediaCached = () => {
      setMediaCacheTick(t => t + 1)
    }
    window.addEventListener('payload-media-cached', handleMediaCached)
    return () => window.removeEventListener('payload-media-cached', handleMediaCached)
  }, [])

  const { data: initialData, isLoading, error } = useQuery({
    queryKey: ['contact-page-data'],
    queryFn: getContactPageData,
    staleTime: 1000 * 60 * 60,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
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
      if (event?.data?.type === 'payload-live-preview' || event?.data?.slug === 'contact-page') {
        if (event.data.data) {
          setPostMessageData(event.data.data)
        }
      }
    }
    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  const activeData = useMemo(() => {
    return getBestData(postMessageData, liveData, initialData)
  }, [postMessageData, liveData, initialData])

  return {
    data: activeData,
    isLoading,
    error,
  }
}

/**
 * Custom hook combining TanStack React Query + Payload Live Preview for individual Program Detail by slug
 */
export function useProgramDetailLive(slug) {
  const [, setMediaCacheTick] = useState(0)

  useEffect(() => {
    const handleMediaCached = () => {
      setMediaCacheTick(t => t + 1)
    }
    window.addEventListener('payload-media-cached', handleMediaCached)
    return () => window.removeEventListener('payload-media-cached', handleMediaCached)
  }, [])

  const { data: initialData, isLoading, error } = useQuery({
    queryKey: ['program-detail', slug],
    queryFn: () => getProgramDetailBySlug(slug),
    staleTime: 1000 * 60 * 60,
    enabled: !!slug,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
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
      if (event?.data?.type === 'payload-live-preview' || event?.data?.slug === slug) {
        if (event.data.data) {
          setPostMessageData(event.data.data)
        }
      }
    }
    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [slug])

  const activeData = useMemo(() => {
    return getBestData(postMessageData, liveData, initialData)
  }, [postMessageData, liveData, initialData])

  return {
    data: activeData,
    isLoading,
    error,
  }
}
