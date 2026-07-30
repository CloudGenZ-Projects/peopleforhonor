import { useState, useEffect, useMemo, useRef } from 'react'
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

/**
 * Detects whether the current window is embedded inside Payload CMS Admin iframe
 */
const isInIframe = typeof window !== 'undefined' && window.self !== window.top

/**
 * Validates whether data is a non-empty CMS object with actual content
 */
function isValidCmsData(d) {
  if (!d || typeof d !== 'object' || Array.isArray(d)) return false
  const keys = Object.keys(d)
  if (keys.length <= 2) return false

  // Must contain real domain content fields
  return Boolean(
    d.hero_title ||
      d.title ||
      d.slug ||
      d.give_heading ||
      d.about_title ||
      d.contact_heading ||
      d.gallery_title ||
      d.empowerment_intro_title ||
      d.id
  )
}

/**
 * Reads persistent cached data from localStorage for instant 0ms rendering
 */
function getStorageCache(key) {
  try {
    const raw = localStorage.getItem(`pfh_data_v2_${key}`)
    if (!raw) return null
    const parsed = JSON.parse(raw)
    return isValidCmsData(parsed) ? parsed : null
  } catch {
    return null
  }
}

/**
 * Saves valid data to localStorage for resilience against tab switches & network drops
 */
function setStorageCache(key, data) {
  if (!isValidCmsData(data)) return
  try {
    localStorage.setItem(`pfh_data_v2_${key}`, JSON.stringify(data))
  } catch (err) {
    // Ignore storage quota errors
  }
}

/**
 * Evaluates candidates in priority order.
 * Inside CMS Admin Iframe: Live Preview messages take top priority.
 * Outside Iframe (Normal Visitor): API initialData takes priority, protected by lastValidRef & localStorage.
 */
function getBestData(postMessageData, liveData, initialData, lastValidRef, cacheKey) {
  // 1. If inside Payload Admin Iframe, use live preview data
  if (isInIframe) {
    if (isValidCmsData(postMessageData)) {
      lastValidRef.current = postMessageData
      setStorageCache(cacheKey, postMessageData)
      return postMessageData
    }
    if (isValidCmsData(liveData)) {
      lastValidRef.current = liveData
      setStorageCache(cacheKey, liveData)
      return liveData
    }
  }

  // 2. Normal site visitor: initialData from API is single source of truth
  if (isValidCmsData(initialData)) {
    lastValidRef.current = initialData
    setStorageCache(cacheKey, initialData)
    return initialData
  }

  // 3. Fallback to last valid memory ref or localStorage
  if (isValidCmsData(lastValidRef.current)) {
    return lastValidRef.current
  }
  return getStorageCache(cacheKey)
}

/**
 * Custom hook combining TanStack React Query + Payload Live Preview for HomePage
 */
export function useHomePageLive() {
  const cacheKey = 'home-page'
  const lastValidRef = useRef(getStorageCache(cacheKey))
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
    staleTime: 0,
    gcTime: 1000 * 60 * 60 * 24,
    refetchOnWindowFocus: true,
    refetchOnMount: true,
  })

  useEffect(() => {
    if (isValidCmsData(initialData)) {
      populateMediaCache(initialData)
    }
  }, [initialData])

  const { data: liveData } = useLivePreview({
    initialData: initialData || lastValidRef.current,
    serverURL: CMS_URL,
    depth: 2,
  })

  useEffect(() => {
    if (isValidCmsData(liveData)) {
      populateMediaCache(liveData)
    }
  }, [liveData])

  const [postMessageData, setPostMessageData] = useState(null)

  useEffect(() => {
    if (!isInIframe) return
    const handleMessage = (event) => {
      if (event?.data?.type === 'payload-live-preview' || event?.data?.slug === 'home-page') {
        if (event.data.data && isValidCmsData(event.data.data)) {
          setPostMessageData(event.data.data)
        }
      }
    }
    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  const activeData = useMemo(() => {
    return getBestData(postMessageData, liveData, initialData, lastValidRef, cacheKey)
  }, [postMessageData, liveData, initialData])

  return {
    data: activeData,
    isLoading: isLoading && !activeData,
    error,
  }
}

/**
 * Custom hook combining TanStack React Query + Payload Live Preview for AboutPage
 */
export function useAboutPageLive() {
  const cacheKey = 'about-page'
  const lastValidRef = useRef(getStorageCache(cacheKey))
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
    staleTime: 0,
    gcTime: 1000 * 60 * 60 * 24,
    refetchOnWindowFocus: true,
    refetchOnMount: true,
  })

  useEffect(() => {
    if (isValidCmsData(initialData)) {
      populateMediaCache(initialData)
    }
  }, [initialData])

  const { data: liveData } = useLivePreview({
    initialData: initialData || lastValidRef.current,
    serverURL: CMS_URL,
    depth: 2,
  })

  useEffect(() => {
    if (isValidCmsData(liveData)) {
      populateMediaCache(liveData)
    }
  }, [liveData])

  const [postMessageData, setPostMessageData] = useState(null)

  useEffect(() => {
    if (!isInIframe) return
    const handleMessage = (event) => {
      if (event?.data?.type === 'payload-live-preview' || event?.data?.slug === 'about-page') {
        if (event.data.data && isValidCmsData(event.data.data)) {
          setPostMessageData(event.data.data)
        }
      }
    }
    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  const activeData = useMemo(() => {
    return getBestData(postMessageData, liveData, initialData, lastValidRef, cacheKey)
  }, [postMessageData, liveData, initialData])

  return {
    data: activeData,
    isLoading: isLoading && !activeData,
    error,
  }
}

/**
 * Custom hook combining TanStack React Query + Payload Live Preview for ProgramsPage
 */
export function useProgramsPageLive() {
  const cacheKey = 'programs-page'
  const lastValidRef = useRef(getStorageCache(cacheKey))
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
    staleTime: 0,
    gcTime: 1000 * 60 * 60 * 24,
    refetchOnWindowFocus: true,
    refetchOnMount: true,
  })

  useEffect(() => {
    if (isValidCmsData(initialData)) {
      populateMediaCache(initialData)
    }
  }, [initialData])

  const { data: liveData } = useLivePreview({
    initialData: initialData || lastValidRef.current,
    serverURL: CMS_URL,
    depth: 2,
  })

  useEffect(() => {
    if (isValidCmsData(liveData)) {
      populateMediaCache(liveData)
    }
  }, [liveData])

  const [postMessageData, setPostMessageData] = useState(null)

  useEffect(() => {
    if (!isInIframe) return
    const handleMessage = (event) => {
      if (event?.data?.type === 'payload-live-preview' || event?.data?.slug === 'programs-page') {
        if (event.data.data && isValidCmsData(event.data.data)) {
          setPostMessageData(event.data.data)
        }
      }
    }
    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  const activeData = useMemo(() => {
    return getBestData(postMessageData, liveData, initialData, lastValidRef, cacheKey)
  }, [postMessageData, liveData, initialData])

  return {
    data: activeData,
    isLoading: isLoading && !activeData,
    error,
  }
}

/**
 * Custom hook combining TanStack React Query + Payload Live Preview for GalleryPage
 */
export function useGalleryPageLive() {
  const cacheKey = 'gallery-page'
  const lastValidRef = useRef(getStorageCache(cacheKey))
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
    staleTime: 0,
    gcTime: 1000 * 60 * 60 * 24,
    refetchOnWindowFocus: true,
    refetchOnMount: true,
  })

  useEffect(() => {
    if (isValidCmsData(initialData)) {
      populateMediaCache(initialData)
    }
  }, [initialData])

  const { data: liveData } = useLivePreview({
    initialData: initialData || lastValidRef.current,
    serverURL: CMS_URL,
    depth: 2,
  })

  useEffect(() => {
    if (isValidCmsData(liveData)) {
      populateMediaCache(liveData)
    }
  }, [liveData])

  const [postMessageData, setPostMessageData] = useState(null)

  useEffect(() => {
    if (!isInIframe) return
    const handleMessage = (event) => {
      if (event?.data?.type === 'payload-live-preview' || event?.data?.slug === 'gallery-page') {
        if (event.data.data && isValidCmsData(event.data.data)) {
          setPostMessageData(event.data.data)
        }
      }
    }
    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  const activeData = useMemo(() => {
    return getBestData(postMessageData, liveData, initialData, lastValidRef, cacheKey)
  }, [postMessageData, liveData, initialData])

  return {
    data: activeData,
    isLoading: isLoading && !activeData,
    error,
  }
}

/**
 * Custom hook combining TanStack React Query + Payload Live Preview for JoinUsPage
 */
export function useJoinUsPageLive() {
  const cacheKey = 'join-us-page'
  const lastValidRef = useRef(getStorageCache(cacheKey))
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
    staleTime: 0,
    gcTime: 1000 * 60 * 60 * 24,
    refetchOnWindowFocus: true,
    refetchOnMount: true,
  })

  useEffect(() => {
    if (isValidCmsData(initialData)) {
      populateMediaCache(initialData)
    }
  }, [initialData])

  const { data: liveData } = useLivePreview({
    initialData: initialData || lastValidRef.current,
    serverURL: CMS_URL,
    depth: 2,
  })

  useEffect(() => {
    if (isValidCmsData(liveData)) {
      populateMediaCache(liveData)
    }
  }, [liveData])

  const [postMessageData, setPostMessageData] = useState(null)

  useEffect(() => {
    if (!isInIframe) return
    const handleMessage = (event) => {
      if (event?.data?.type === 'payload-live-preview' || event?.data?.slug === 'join-us-page') {
        if (event.data.data && isValidCmsData(event.data.data)) {
          setPostMessageData(event.data.data)
        }
      }
    }
    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  const activeData = useMemo(() => {
    return getBestData(postMessageData, liveData, initialData, lastValidRef, cacheKey)
  }, [postMessageData, liveData, initialData])

  return {
    data: activeData,
    isLoading: isLoading && !activeData,
    error,
  }
}

/**
 * Custom hook combining TanStack React Query + Payload Live Preview for ContactPage
 */
export function useContactPageLive() {
  const cacheKey = 'contact-page'
  const lastValidRef = useRef(getStorageCache(cacheKey))
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
    staleTime: 0,
    gcTime: 1000 * 60 * 60 * 24,
    refetchOnWindowFocus: true,
    refetchOnMount: true,
  })

  useEffect(() => {
    if (isValidCmsData(initialData)) {
      populateMediaCache(initialData)
    }
  }, [initialData])

  const { data: liveData } = useLivePreview({
    initialData: initialData || lastValidRef.current,
    serverURL: CMS_URL,
    depth: 2,
  })

  useEffect(() => {
    if (isValidCmsData(liveData)) {
      populateMediaCache(liveData)
    }
  }, [liveData])

  const [postMessageData, setPostMessageData] = useState(null)

  useEffect(() => {
    if (!isInIframe) return
    const handleMessage = (event) => {
      if (event?.data?.type === 'payload-live-preview' || event?.data?.slug === 'contact-page') {
        if (event.data.data && isValidCmsData(event.data.data)) {
          setPostMessageData(event.data.data)
        }
      }
    }
    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  const activeData = useMemo(() => {
    return getBestData(postMessageData, liveData, initialData, lastValidRef, cacheKey)
  }, [postMessageData, liveData, initialData])

  return {
    data: activeData,
    isLoading: isLoading && !activeData,
    error,
  }
}

/**
 * Custom hook combining TanStack React Query + Payload Live Preview for individual Program Detail by slug
 */
export function useProgramDetailLive(slug) {
  const cacheKey = `program-detail-${slug || 'default'}`
  const lastValidRef = useRef(getStorageCache(cacheKey))
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
    staleTime: 0,
    gcTime: 1000 * 60 * 60 * 24,
    enabled: !!slug,
    refetchOnWindowFocus: true,
    refetchOnMount: true,
  })

  useEffect(() => {
    if (isValidCmsData(initialData)) {
      populateMediaCache(initialData)
    }
  }, [initialData])

  const { data: liveData } = useLivePreview({
    initialData: initialData || lastValidRef.current,
    serverURL: CMS_URL,
    depth: 2,
  })

  useEffect(() => {
    if (isValidCmsData(liveData)) {
      populateMediaCache(liveData)
    }
  }, [liveData])

  const [postMessageData, setPostMessageData] = useState(null)

  useEffect(() => {
    if (!isInIframe) return
    const handleMessage = (event) => {
      if (
        event?.data?.type === 'payload-live-preview' ||
        event?.data?.slug === slug ||
        event?.data?.data?.slug === slug
      ) {
        if (event.data.data && isValidCmsData(event.data.data)) {
          setPostMessageData(event.data.data)
        }
      }
    }
    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [slug])

  const activeData = useMemo(() => {
    return getBestData(postMessageData, liveData, initialData, lastValidRef, cacheKey)
  }, [postMessageData, liveData, initialData])

  return {
    data: activeData,
    isLoading: isLoading && !activeData,
    error,
  }
}
