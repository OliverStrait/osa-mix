/**
 * @typedef {Object} Skip
 * @property {boolean} start Whether there are pages before the first rendered page.
 * @property {boolean} end Whether there are pages after the last rendered page.
 */
export type Skip = {
    /**
     * Whether there are pages before the first rendered page.
     */
    start: boolean;
    /**
     * Whether there are pages after the last rendered page.
     */
    end: boolean;
};
export type Disable = {
    /**
     * Whether the first-page action should be disabled.
     */
    start: boolean;
    /**
     * Whether the last-page action should be disabled.
     */
    end: boolean;
};
export type PaginatorMeta = {
    /**
     * Current page.
     */
    current: number;
    /**
     * Next page.
     */
    next: number;
    /**
     * Previous page.
     */
    before: number;
    /**
     * Maximum page.
     */
    max: number;
};
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
export declare function paginator(current: number, max: number, limit_low?: number, limit_max?: number): {
    pages: number[];
    skip: Skip;
    disable: Disable;
    meta: PaginatorMeta;
};
export default paginator;
