// global helpers

// make injestible array for Table component from shooting stats 
export const flattenShootingStats = (
    data?: { "field goals": object, "three pointers": object, "free throws": object }
) => (
    data ? Object.keys(data).map((k) => ({
        "Shot Type": k, ...data[k as keyof typeof data]
    })) : []
);

export const capitalizeEachWord = (str: string): string => {
    return str.split(' ').map((s) => `${s.charAt(0).toUpperCase()}${s.slice(1)}`).join(' ');
}