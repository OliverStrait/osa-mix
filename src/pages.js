/**
 * @typedef {Object} Skip
 * @property {boolean} start Whether there are pages before the first rendered page.
 * @property {boolean} end Whether there are pages after the last rendered page.
 */

/**
 * @typedef {Object} Disable
 * @property {boolean} start Whether the first-page action should be disabled.
 * @property {boolean} end Whether the last-page action should be disabled.
 */

/**
 * @typedef {Object} PaginatorMeta
 * @property {number} current Current page.
 * @property {number} next Next page.
 * @property {number} before Previous page.
 * @property {number} max Maximum page.
 */

/**
 * Calculates the page range and navigation state for a paginator.
 * ```
 * {
 * pages: "Array of rendered page numnbers",
 * skip: {start:"If skip to start control is needed", end: "If skip to end controller is needed"},
 * disable: {start:"disable to before controller", end:"disable to next page controller"}
 * }
 * ```
 * @param {number} current Current page.
 * @param {number} max Maximum page.
 * @param {number} [limit_low=5] Number of pages rendered before the current page.
 * @param {number} [limit_max=5] Number of pages rendered after the current page.
 * @returns {{pages:number[], skip:Skip, disable:Disable, meta:PaginatorMeta}}
 */
export function paginator(current, max, limit_low = 5, limit_max = 5) {
    const ideal_start = current - limit_low
    const ideal_end = current + limit_max

    const start_page = Math.max(
        1,
        ideal_start - Math.max(0, ideal_end - max)
    )
    const end_page = Math.min(
        max,
        ideal_end + Math.max(0, 1 - ideal_start)
    )

    const length = Math.max(0, end_page - start_page + 1)
    const pages = Array.from({ length }, (_, i) => i + start_page)

    return {
        pages,
        skip: { start: start_page > 1, end: end_page < max },
        disable: { start: current === 1, end: current === max },
        meta: { current, next: current + 1, before: current - 1, max }
    }
}

export default paginator