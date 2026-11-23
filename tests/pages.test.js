import { describe, expect, it } from 'vitest'
import paginator, { paginator as namedPaginator } from '../src/pages.js'

describe('paginator paging function', () => {
    it('exports one function as default and named export', () => {
        expect(namedPaginator).toBe(paginator)
    })

    it('renders a balanced window in the middle', () => {
        expect(paginator(10, 20)).toEqual({
            pages: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
            skip: { start: true, end: true },
            disable: { start: false, end: false },
            meta: { current: 10, next: 11, before: 9, max: 20 }
        })
    })

    it('expands the window toward the end on the first page', () => {
        expect(paginator(1, 20)).toEqual({
            pages: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
            skip: { start: false, end: true },
            disable: { start: true, end: false },
            meta: { current: 1, next: 2, before: 0, max: 20 }
        })
    })

    it('expands the window toward the start on the last page', () => {
        expect(paginator(20, 20)).toEqual({
            pages: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
            skip: { start: true, end: false },
            disable: { start: false, end: true },
            meta: { current: 20, next: 21, before: 19, max: 20 }
        })
    })

    it('returns all pages for a range smaller than the window', () => {
        expect(paginator(3, 5, 2, 2)).toEqual({
            pages: [1, 2, 3, 4, 5],
            skip: { start: false, end: false },
            disable: { start: false, end: false },
            meta: { current: 3, next: 4, before: 2, max: 5 }
        })
    })
})
