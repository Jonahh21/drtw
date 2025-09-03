import type { GeneratedDatasetInfo } from "@interfaces/generated-dataset-info/generated-dataset-info.interface.js"


export function flatten<T>(arr: Array<Array<T>>): Array<T> {
	return arr.reduce((acc, value) => {
        let aux = [...acc, ...value]
        return aux
    }, [])
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

export default {}