import { useEffect, useMemo, useRef, useState } from 'preact/hooks';
import throttle from 'lodash.throttle'

const getScrollPosition = () => {
    if (typeof window === 'undefined') {
        return 0
    }
    return (
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0
    )
}

export const useScroll = (timeout = 250) => {
    const defaultScrollTop = useMemo(() => getScrollPosition(), [])
    const previousScrollTop = useRef(defaultScrollTop)
    const [currentScrollTop, setCurrentScrollTop] = useState(defaultScrollTop)

    useEffect(() => {
        const handleDocumentScroll = () => {
            const scrollTop = getScrollPosition()
            setCurrentScrollTop(scrollTop)
            previousScrollTop.current = scrollTop
        }

        const handleDocumentScrollThrottled = throttle(handleDocumentScroll, timeout)
        window.addEventListener('scroll', handleDocumentScrollThrottled)

        return () => {
            window.removeEventListener('scroll', handleDocumentScrollThrottled)
        }
    }, [timeout])

    return {
        scrollTop: currentScrollTop,
        previousScrollTop: previousScrollTop.current,
        time: timeout,
    }
}


import React, { createContext, useContext, useMemo } from 'react'
import { useScroll } from './use-scroll'

const TIMEOUT = 150
export const SCROLL_DIRECTION = {
    Down: 'down',
    None: 'none',
    Up: 'up',
}

export const ScrollContext = createContext({
    scrollTop: 0,
    previousScrollTop: 0,
    time: TIMEOUT,
    amountScrolled: 0,
    direction: SCROLL_DIRECTION.None,
    velocity: 0,
})

export const ScrollProvider = ({ children }) => {
    const { scrollTop, previousScrollTop, time } = useScroll(TIMEOUT)
    const amountScrolled = useMemo(() => (
        scrollTop - previousScrollTop
    ), [scrollTop, previousScrollTop])

    const direction = useMemo(() => {
        if (amountScrolled < 0) {
            return SCROLL_DIRECTION.Up
        } else if (amountScrolled > 0) {
            return SCROLL_DIRECTION.Down
        }
        return SCROLL_DIRECTION.None
    }, [amountScrolled])

    const velocity = useMemo(() => (
        Math.abs(amountScrolled / time)
    ), [amountScrolled, time])

    const value = useMemo(() => ({
        scrollTop,
        previousScrollTop,
        time,
        amountScrolled,
        direction,
        velocity,
    }), [
        scrollTop,
        previousScrollTop,
        time,
        amountScrolled,
        direction,
        velocity,
    ])

    return (
        <ScrollContext.Provider value={value}>
            {children}
        </ScrollContext.Provider>
    )
}

export const useScrollContext = () => useContext(ScrollContext)