import * as fs from 'node:fs/promises'
import { createWriteStream } from 'node:fs'

export const getList = async (
  directoryPath: string,
  fileExtension: string[]
) => {
  const files = await fs.readdir(directoryPath, {
    recursive: true,
  })
  let fileList = createWriteStream('../fileList.txt')

  files.forEach((f) => {
    if (fileExtension.some((s) => f.endsWith(s))) {
      fileList.write(directoryPath + '/' + f + '\n')
    }
  })
  fileList.end()
}
