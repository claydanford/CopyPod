// import * as fs from 'node:fs/promises'
// import { createWriteStream } from 'node:fs'

import { getList } from "./lib/getList"

const directoryPath = ''
// const fileExtension = ['.m4a', '.m4b', '.mp3', '.wav', '.aa4', '.aiff']
const fileExtension = ['.yml', '.yaml']

const main = async () => {
 await getList(directoryPath, fileExtension)
}

main()
