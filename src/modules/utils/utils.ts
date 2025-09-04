import type { GeneratedDatasetInfo } from "@interfaces/generated-dataset-info/generated-dataset-info.interface.js"


export function flatten<T>(arr: Array<Array<T>>): Array<T> {
	return arr.reduce((acc, value) => {
        let aux = [...acc, ...value]
        return aux
    }, [])
}

export function flatten3d<T>(arr: T[][][]): T[]{
    return flatten(flatten(arr))
}

export function seedDataset(size: number, datasetNames: string[], max: number = 100, min: number = 0): GeneratedDatasetInfo | GeneratedDatasetInfo[] {
    if (datasetNames.length <= 1) {
        let aux: number[] = []
        for (let i = 0; i < size; i++) {
            const randInt = Math.floor(Math.random() * (max - min + 1) + min)
            aux.push(randInt)
        }

        return {
            name: datasetNames[0] || "Generated Dataset",
            data: aux
        }
    } else {
        return datasetNames.map((value) => {
            return seedDataset(size, [value], max, min)
        }) as GeneratedDatasetInfo[]
    }

}

export function prepareDataSet<T>(arr: T[][], numProperty: (object: T) => number, nameProperty: (object: T) => string): GeneratedDatasetInfo[]{
    let aux: GeneratedDatasetInfo[] = arr.map((items) => {
        return {
            name: nameProperty(items[0]!),
            data: items.map(numProperty)
        }
    })

    return aux
}

export async function fetchJson<T>(url: string, init?: RequestInit): Promise<T>{
    return fetch(url, init).then(res => res.json() as Promise<T>)
}

export function groupArray<T, F>(arr: T[], criteria: (arg0: T) => F): T[][] {
    let aux: T[][] = arr.reduce((acc: T[][], value: T) => {
        const i = acc.findIndex((val) => criteria(val[0]!) === criteria(value) )
        if(i != -1) {
            acc[i]!.push(value)
        } else {
            acc.push([value])
        }

        return acc
    }, [])

    return aux
}

export function linkArrays<T, F>(arr1: T[], arr2: F[], criteria: (o1: T, o2: F) => boolean, valueName: string): (T & { [key: string]: F[] })[]{

    let aux = arr1.map((val1) => {
        //add value a new property with the name of valueName
        let newVal = {
            ...val1,
            [valueName]: [] as F[]
        }

        arr2.forEach((val2) => {
            if(criteria(val1, val2)){
                newVal[valueName]?.push(val2)
            }
        })

        return newVal
    })

    return aux
}

export function only<T extends Record<string, any>>(o: T, params: string[]): T{
    let object = {}

    params.forEach((value) => {
        object = {...object,
            [value]: o[value]
        }
    })

    return object as T
}

export default {}