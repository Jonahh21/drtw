import type { GeneratedDatasetInfo } from "@interfaces/generated-dataset-info/generated-dataset-info.interface.js"
import { fetchJson, flatten3d, groupArray, linkArrays, only, prepareDataSet, seedDataset } from "@modules/utils/utils.js"
import * as index from './index.js'
import type { ExamplePerson } from "@interfaces/example-person/example-person.js"
import type { ExampleTodo } from "@interfaces/example-todo/example-todo.js"
import type { ExampleUser } from "@interfaces/example-user/example-user.js"
import * as _ from "lodash"


//#region Testing
/* async function main() {
    const array = ["Apple", "Banana", "Mansana", "Pera", "Sandia"]
    const dataset = seedDataset(3, array, 0, 10) as GeneratedDatasetInfo[]
    console.table(dataset)

    const array3d = [[[], [], []], [[], [], []]]
    console.log(flatten3d(array3d))

    const datos1: ExamplePerson[] = [
        {
            edad: 10,
            grupo: "Gente 1",
            nombre: "pepe"
        },
        {
            edad: 32,
            grupo: "Gente 1",
            nombre: "pepa"
        }
    ]

    const datos2: ExamplePerson[] = [
        {
            edad: 20,
            grupo: "Gente 2",
            nombre: "Antonia"
        },
        {
            edad: 30,
            grupo: "Gente 2",
            nombre: "Jose"
        }
    ]

    const datos3 = [datos1, datos2]

    let datosPreparados = prepareDataSet(datos3, o => o.edad, o => o.grupo)

    console.table(datosPreparados)

    const todos: ExampleTodo[] = await fetchJson("https://jsonplaceholder.typicode.com/todos")
    const users: ExampleUser[] = await fetchJson("https://jsonplaceholder.typicode.com/users").then((val => {
        return (val as ExampleUser[]).map((value) => only(value, ["id", "email", "username", "name"]))
    }))
    //console.table(data)

    let grouped = groupArray(todos.slice(0, 10), o => o.completed)
    console.table(grouped)

    const linkedusersList = linkArrays(todos, users, (o1, o2) => o1.userId == o2.id, "todos")

    console.table(linkedusersList)
    console.table(users)
}

main() */
//#endregion