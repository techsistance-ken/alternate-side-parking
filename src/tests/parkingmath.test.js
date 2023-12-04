import { expect, test } from 'vitest'
import { isDateEven, isRestricted, nextRestrictedDate } from '../routes/parkingmath.js'

test('isRestricted Midnight false', () => {
    expect(isRestricted(new Date("11/1/2023 00:00:00"))).toBe(false)
})
test('isRestricted 1:15 AM false', () => {
    expect(isRestricted(new Date("11/1/2023 01:15:00"))).toBe(false)
})
test('isRestricted 2:00 AM true', () => {
    expect(isRestricted(new Date("11/1/2023 02:00:00"))).toBe(true)
})
test('isRestricted noon true', () => {
    expect(isRestricted(new Date("11/1/2023 12:00:00"))).toBe(true)
})
test('isRestricted 2:59:59 PM true', () => {
    expect(isRestricted(new Date("11/1/2023 14:59:59"))).toBe(true)
})
test('isRestricted 3:00:00 PM false', () => {
    expect(isRestricted(new Date("11/1/2023 15:00:00"))).toBe(false)
})
test('isRestricted 11:30:00 PM false', () => {
    expect(isRestricted(new Date("11/1/2023 23:30:00"))).toBe(false)
})


test('nextRestrictedDate 11/30/2023 00:00:00', () => {
    expect(nextRestrictedDate(new Date("11/30/2023 00:00:00")).toLocaleDateString()).toBe("11/30/2023")
})
test('nextRestrictedDate 11/30/2023 1:50:00', () => {
    expect(nextRestrictedDate(new Date("11/30/2023 1:50:00")).toLocaleDateString()).toBe("11/30/2023")
})
test('nextRestrictedDate 11/30/2023 2:00:00', () => {
    expect(nextRestrictedDate(new Date("11/30/2023 2:00:00")).toLocaleDateString()).toBe("11/30/2023")
})
test('nextRestrictedDate 11/30/2023 12:00:00', () => {
    expect(nextRestrictedDate(new Date("11/30/2023 12:00:00")).toLocaleDateString()).toBe("11/30/2023")
})
test('nextRestrictedDate 11/30/2023 15:00:00', () => {
    expect(nextRestrictedDate(new Date("11/30/2023 15:00:00")).toLocaleDateString()).toBe("12/1/2023")
})
test('nextRestrictedDate 11/30/2023 23:59:59', () => {
    expect(nextRestrictedDate(new Date("11/30/2023 23:59:59")).toLocaleDateString()).toBe("12/1/2023")
})
test('nextRestrictedDate 10/31/2023 15:00:00', () => {
    expect(nextRestrictedDate(new Date("10/31/2023 15:00:00")).toLocaleDateString()).toBe("11/1/2023")
})
test('nextRestrictedDate 12/31/2023 23:59:59', () => {
    expect(nextRestrictedDate(new Date("12/31/2023 23:59:59")).toLocaleDateString()).toBe("1/1/2024")
})

test('isEven 11/1/2023',() => {
    expect(isDateEven(new Date("11/1/2023 00:00:00"))).toBe(false);
})
test('isEven 11/2/2023',() => {
    expect(isDateEven(new Date("11/2/2023 00:00:00"))).toBe(true);
})