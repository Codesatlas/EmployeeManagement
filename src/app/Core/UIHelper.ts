
import { Document } from "../Entity/Document";
export default class UIHelper {

    public static CreateDocumentFromUrlList(imageUrls: string[]) {
        var files: Document[] = [];
        imageUrls.forEach(i => {
            files.push(UIHelper.CreateDocumentFromUrl(i))
        })
        return files;
    }

    public static CreateDocumentFromUrl(imageUrl: string) {
        var tempDoc = {} as Document
        tempDoc.DocumentUrl = imageUrl;
        return tempDoc;
    }
    public static CreateImageFromFileList(imageUrls: Document[]): Document[] {

        imageUrls.forEach(async (i: Document) => {
            //var fileName = i.Name || i.DocumentUrl.split('/').pop() || ""
            //var ext = fileName.substr(fileName.lastIndexOf('.') + 1);
            var tempitem = new File([], i.Name, { type: i.Type })
            i.File = tempitem
        })
        return imageUrls
    }


    public static CreateImageFromFile(imageUrl: Document) {
        if (!imageUrl) {
            return null;
        }

        var fileName = imageUrl.Name || imageUrl.DocumentUrl.split('/').pop() || ""
        var ext = fileName.substr(fileName.lastIndexOf('.') + 1);
        return fetch(imageUrl.DocumentUrl).then(res => {
            return res.arrayBuffer().then(buf => {
                return new File([buf], fileName, { type: ext })

            })
        }).catch(function (e) {
            return null;
        });

    }

    public static GetDocumentFiles(Documents: Document[]): File[] {
        //as document edit not possible only will send files don't have documentId, 
        //else server expect a file but this is not present, having issue with mimetype check in laravel rules
        return Documents.filter(i => !i.DocumentId).map((i) => i.File)
    }

    public static GetDocumentModel(Documents: Document[]): Document[] {
        var tempData = Documents.map(i => Object.assign({}, { DocumentId: i.DocumentId, Size: i.Size, Name: i.Name }))
        //tempData.forEach(i => i.File = undefined as unknown as File)
        return tempData as Document[];
    }
    public static GetFirstDocumnet(Documents: Document[]): Document | null{
        if(!Documents?.length){
            return null
        }

        return Documents.sort(i=>i.Ordinal)[0];
    }

    public static PrepareImageFromBrowserUpload(inputData: File): Document | undefined {

        if (!inputData) {
            return undefined;
        }

        let file: Document = {
            DocumentId: "",
            Name: "",
            Type: "",
            EntityType: 0,
            DocumentUrl: "",
            Ordinal: 0,
            Size: 0,
            Status: "",
            EntityId: "",
            CreateBy: "",
            CreateDate: "",
            ModifyBy: "",
            ModifyDate: "",
            File: inputData
        };



        file.File = inputData
        file.Name = inputData.name
        file.Size = inputData.size
        file.Type = inputData.type
        file.DocumentUrl = URL.createObjectURL(inputData)

        return file;

    }

}