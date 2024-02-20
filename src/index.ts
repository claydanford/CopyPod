import { files } from './lib/files'
import { copy } from 'fs-extra'

const srcDir = process.env.SOURCE_DIR
const dstDir = process.env.DESTINATION_DIR

const copyFunc = async (file: string) => {
  await copy(srcDir + file, dstDir + file)
  console.log('File Complete: ' + file)
}

const main = async () => {
  try {
    for (const file of files) {
      await copyFunc(file)
    }
  } catch (error) {
    console.error(error)
  }
}

main()
