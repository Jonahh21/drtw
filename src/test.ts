import type { GeneratedDatasetInfo } from "@interfaces/generated-dataset-info/generated-dataset-info.interface.js"
import { seedDataset } from "@modules/utils/utils.js"
import * as index from './index.js'

const array = ["Apple", "Banana", "Mansana", "Pera", "Sandia"]
const dataset = index.default.utils.seedDataset(3, array, 0, 10) as GeneratedDatasetInfo[]
console.table(dataset)
