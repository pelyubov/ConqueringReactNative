import RNFS from 'react-native-fs';

export const CachedFilePath = `${RNFS.CachesDirectoryPath}/ToDoApp/`;
export const FilesName = ['settings.json', 'tasks.json'];

interface ICachedFile {
    name: string;
    path: string;
    filePath: string;
    connect: () => Promise<void>;
    read: () => Promise<void>;
    write: (contents: JSON) => Promise<void>;
}

class CachedFile implements ICachedFile {
    private static instance: ICachedFile | undefined = undefined;
    name!: string;
    path = CachedFilePath;
    filePath!: string;
    constructor(name: string) {
        if (CachedFile.instance) {
            return CachedFile.instance;
        } else {
            this.name = name;
            this.filePath = `${this.path}/${this.name}`;
            this.connect();
            CachedFile.instance = this;
            return CachedFile.instance;
        }
    }

    async connect() {
        const exist = await RNFS.exists(this.filePath);
        if (!exist) {
            await RNFS.mkdir(this.path);
            await RNFS.writeFile(this.path + this.name, '{}', 'utf8');
        }
    }

    async read() {
        const content = await RNFS.readFile(this.filePath, 'utf8');
        return JSON.parse(content);
    }

    async write(contents: JSON) {
        await RNFS.writeFile(this.filePath, JSON.stringify(contents), 'utf8');
    }
}

export default CachedFile;
