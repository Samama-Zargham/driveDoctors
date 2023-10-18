// import languageStrings from "./langStrings";
import moment from "moment";
import { Alert, Platform } from "react-native";
import { openCamera, openPicker } from "react-native-image-crop-picker";
import store from "../redux/store";
import { updateSnackBar } from "../redux/reducers/userReducer";
// import DocumentPicker from "react-native-document-picker";


export function removeSpaceAndLowerCase(inputString: string) {
    // Remove spaces using regular expression and replace with an empty string
    const stringWithoutSpaces = inputString.replace(/\s/g, "");

    // Convert the string to lower case
    const resultString = stringWithoutSpaces.toLowerCase();

    return resultString;
}
export function removeSpacesAndCamelCase(inputString: string) {
    // Remove spaces from the string
    let str = inputString.replace(/\s+/g, "");

    return str
        .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
            return index == 0 ? word.toLowerCase() : word.toUpperCase();
        })
        .replace(/\s+/g, "");
}

export function randomColorGenerator() {
    const letters = "0123456789ABCDEF";
    let coolor;
    do {
        coolor = "#";
        for (let i = 0; i < 6; i++) {
            coolor += letters[Math.floor(Math.random() * 16)];
        }
    } while (coolor === "#000000" || coolor === "#FFFFFF");

    return coolor;
}

export function capitalFistStringLetter(str1: string) {
    let str = str1.toString();
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export const getTimeElapsedString = (timestamp: string): string => {
    const now = moment();
    const time = moment(timestamp);
    return time.from(now);
};
export const checkEmptyString = (str: any) => {
    if (str === null || str === undefined || str === "" || isFinite(str)) {
        return "---";
    } else {
        return str;
    }
};
export function isNotObject(value) {
    return typeof value !== 'object' || value === null;
}

export const isEmptyObject = (obj) => {
    return Object.getOwnPropertyNames(obj).length === 0;
}

export const _openCamera = async (setData: any, onError: any) => {
    try {
        const response = await openCamera({
            cropping: true,
            showCropGuidelines: true,
            showCropFrame: true,
            enableRotationGesture: true,
            freeStyleCropEnabled: true,
            mediaType: "photo",
            compressImageQuality: 0.5,
            // forceJpg: Platform.OS === "ios",
            //waitAnimationEnd: false,
        });
        // const size = UI_API.bytesToSize(response?.size) || "";
        // if (size.split(" ")[0] * 1 < 3 && size.includes("MB")) throw new Error("Oops! It seems your image size is greater than 2 MB.");
        const ext = response?.path?.split("/");
        const fileName = ext[ext.length - 1];
        setData({
            uri:
                Platform.OS === "android"
                    ? response?.path
                    : response?.path.replace("file://", ""),
            name: fileName,
            type: response?.mime,
        });
    } catch (error) {
        console.log(error);
    }
};


export const _openGallery = async (setData: any, onError?: any) => {
    try {
        const response = await openPicker({
            mediaType: "photo",
            cropping: true,
            width: 300,
            height: 400,
            // forceJpg: Platform.OS === "ios",
            waitAnimationEnd: false,
        });

        // const size = UI_API.bytesToSize(response?.size) || "";
        // if (size.split(" ")[0] * 1 < 3 && size.includes("MB")) throw new Error("Oops! It seems your image size is greater than 2 MB.");
        const ext = response?.path?.split("/");
        const fileName = ext[ext.length - 1];
        setData({
            uri:
                Platform.OS === "android"
                    ? response?.path
                    : response?.path.replace("file://", ""),
            name: fileName,
            type: response?.mime,
        });
    } catch (error) {
        console.log(error);
    }
};

const pickSingleFile = async (
    returnFile: any,
    onError: any,
    fileType?: string
) => {
    try {
        console.log({ fileType });
        // const res = await DocumentPicker.pickSingle({
        // type:
        // fileType === "images"
        // ? DocumentPicker.types.images
        // :
        // DocumentPicker.types.pdf,
        //There can me more options as well
        // DocumentPicker.types.allFiles
        // DocumentPicker.types.images
        // DocumentPicker.types.plainText
        // DocumentPicker.types.audio
        // DocumentPicker.types.pdf
        // });
        //Printing the log realted to the file
        // console.log('res : ' + JSON.stringify(res));
        // console.log('URI : ' + res.uri);
        // console.log('Type : ' + res.type);
        // console.log('File Name : ' + res.name);
        // console.log('File Size : ' + res.size);
        //Setting the state to show single file attributes
        // returnFile({
        //     name: res.name,
        //     type: res.type,
        //     url: res.uri,
        //     size: res.size,
        // });
    } catch (err) {
        //Handling any exception (If any)
        // if (DocumentPicker.isCancel(err)) {
        // onError("Canceled from document picker");
        // } else {
        // onError("Unknown Error: " + JSON.stringify(err));
        // }


    };
}


// export const changeLanguage = (language: string) => {
//     languageStrings.setLanguage(language)
// }

const RemoveItemFromArray = (array: [], item: {}, callbackforSetState: any) => {
    let tempArray = Object.assign([], array);
    let index = tempArray.indexOf(item);
    if (index > -1) {
        tempArray.splice(index, 1);
    }
    callbackforSetState(tempArray);
};

const AddORremoveFromArray = (array: [], item: {}, callbackforSetState: any) => {
    let tempArray = Object.assign([], array);
    let index = tempArray.indexOf(item);
    if (index > -1) {
        tempArray.splice(index, 1);
    } else {
        tempArray?.push(item);
    }
    callbackforSetState(tempArray);
};

const changeFlag = (array: [], item: {}, index: number, callbackforSetState: any) => {
    let tempArray = Object.assign([], array);
    item?.isSelect == true
        ? (array[index].isSelect = false)
        : (array[index].isSelect = true);
    callbackforSetState(tempArray);
};

const AddItemtoArray = (item: any, array: [], callbackforSetState: any) => {
    let newItem: any = item.trim();
    let tempArray = Object.assign([], array);
    let length = array.length;
    let index = array.indexOf(newItem);
    // console.log("index-->  ", index)
    length < 1
        ? tempArray.push(newItem)
        : index == -1
            ? tempArray.push(newItem)
            : // FlashMessage("Already added!")
            console.log('Already added!');
    callbackforSetState(tempArray);
};
const ConcatArray = (newArray: [], oldArray: [], finalArray: any) => {
    let oldTemp = Object.assign([], oldArray);
    let finalArrayAfterConcat = oldTemp.concat(newArray);
    finalArray(finalArrayAfterConcat);
};

const formatBytes = (bytes, decimals = 2) => {
    console.log('bytes  => ', bytes);
    if (!+bytes) {
        return '0 Bytes';
    }

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    let mbs = `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;

    let MB = mbs.split('.');
    let exactMbs = MB[0];
    console.log(MB, ' MB ', exactMbs, ' ', MB[1].includes('KB'));
    if (MB[1].includes('KB')) {
        return 4;
    } else {
        return exactMbs;
    }
};
const ShowAlert = (title, des, onPressYes) => {
    Alert.alert(
        title,
        des,
        [
            {
                text: "N0",
                onPress: () => console.log("no Pressed"),
                style: "cancel"
            },
            { text: "yes", onPress: onPressYes ? onPressYes : () => console.log("no Pressed") }
        ]
    );
}
export function isValidDate(dateString: Date, format: string = "YYYY-MM-DD") {
    return moment(dateString, format, true).isValid();
}
export const formatDate = (date: Date | string, format: string = "YYYY-MM-DD", useUtc?: boolean): string => {
    const momentDate = moment(date);

    if (useUtc) {
        return format ? momentDate.utc().format(format) : momentDate.utc().format('YYYY-MM-DD');
    }

    return format ? momentDate.format(format) : momentDate.format('YYYY-MM-DD');
};
const SelectUnSelectItems = async (item: any, array: Array<any>, setState: any) => {
    let selectedItems = Object.assign([], array)
    if (selectedItems?.filter(i => i.id == item.id).length > 0) {
        selectedItems = selectedItems?.filter(i => i.id !== item.id)
    }
    else {
        selectedItems.push(item)
    }
    setState(selectedItems)
}

const uploadImageOnS3F = (file: string, uploading: (v: boolean) => void, onSuccess: () => void) => {
    console.log({ file })
    try {
        //this bucket is only for divet don't use it here
        // return new Promise(async (resolve, reject) => {
        //   uploading(true);

        //   const BUCKET_NAME = 'divet';
        //   const IAM_USER_KEY = 'AKIA4CTJK7BVUGLYQOUW';
        //   const IAM_USER_SECRET = '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';

        //   const s3bucket = new AWS.S3({
        //     accessKeyId: IAM_USER_KEY,
        //     secretAccessKey: IAM_USER_SECRET,
        //     Bucket: BUCKET_NAME,
        //     signatureVersion: 'v4',
        //     region: 'us-east-2',
        //   });

        //   let contentType = file?.mediaType;
        //   let contentDeposition = 'inline;filename="' + `${file?.mediaType} ${Math.floor(new Date().getTime())}` + '"';
        //   const base64 = await fs.readFile(file.path, 'base64')
        //   // console.log("base64=>  ", base64)
        //   const arrayBuffer = decode(base64);

        //   s3bucket.createBucket(async () => {
        //     const params = {
        //       Bucket: BUCKET_NAME,
        //       Key: `${file?.mediaType}${Math.floor(new Date().getTime())}${file?.mediaType == "video" ? ".mp4" : "image"}`,
        //       Body: arrayBuffer,
        //       ContentDisposition: contentDeposition,
        //       ContentType: contentType,
        //     };
        //     await s3bucket
        //       .upload(params)
        //       .promise()
        //       .then(data => {
        //         console.log('then S3 upload => ', data.Location);
        //         let s3Url = data?.Location
        //         // onSuccess(s3Url)
        //         resolve(s3Url);
        //       })
        //       .catch(err => {
        //         FlashMessage("Image uploading error", "red")
        //         reject()
        //         uploading(false)
        //         console.log("catch S3 upload", err);
        //       });
        //   });

        // })

    } catch (error) {
        uploading(false);
    }

};

export function formatErrorMessages(error: any): string {
    if (typeof error === "object" && error !== null) {
        return Object.values(error).join("\n");
    } else {
        return String(error);
    }
}


const _returnError = (error: any): string | undefined => {
    console.log(error?.response);


    if (error?.response?.request) {
        let { _response } = error?.response?.request;
        if (Array.isArray(JSON.parse(_response)?.message)) {
            return JSON.parse(_response)?.message[0];
        } else if (JSON.parse(_response)?.message) {
            return JSON.parse(_response)?.message;
        } else {
            return formatErrorMessages(JSON.parse(_response)?.error);
        }
    } else {
        //  console.log("error?.message,", error?.message)
        if (error === "Hi Dude") {
            return "Dismiss";
        } else if (error?.message) {
            if (error?.message === "Network Error") {
                return "Network Error";
            } else {
                if (error === "Hi Dude") {
                    return "Dismiss";
                } else if (error?.message) {
                    if (error?.message === "Network Error") {
                        return "Network Error";
                    } else {
                        return error.message?.toString();
                    }
                } else {
                    return error?.toString();
                }
            }
        }
    }
};

const showError = (message: string | undefined) => {
    store.dispatch(
        updateSnackBar({
            type: "error",
            message,
        })
    );
};
export function processArray(arr) {
    if (arr.length <= 5) {
        // If the array length is less than or equal to 5, pass the entire array
        return arr;
    } else {
        // If the array length is greater than 5, pass the first 5 elements
        return arr.slice(0, 5);
    }
}
export const countryCode = '+974' //974
const showSuccess = (message: string | undefined) => {
    store.dispatch(
        updateSnackBar({
            type: "success",
            message,
        })
    );
};
export const STATUS: any = {
    "initial": "Car on the way to the clinic",
    "processing": "Inside the Clinic with our Doctors",
    "completed": "Discharged and ready to the way"
}

interface Service {
    id: string;
    name: string;
    charges: string;
    icon: string;
    category: string;
}

function convertArrayToObject(inputArray: Service[]): Record<string, Service> {
    const servicesObject: Record<string, Service> = {};

    inputArray.forEach((item) => {
        servicesObject[item.id] = item;
    });

    return servicesObject
}


type MyObject = {
    [key: string]: {
        name: string;
    };
};

function extractNamesByKey(obj: MyObject, keysToExtract: string[]): string[] {
    const extractedNames: string[] = [];
    for (const key of keysToExtract) {
        if (obj[key] && obj[key].name) {
            extractedNames.push(obj[key].name);
        }
    }
    console.log({ extractedNames, keysToExtract, obj })

    return extractedNames
}

export {
    extractNamesByKey,
    convertArrayToObject,
    showError,
    showSuccess,
    _returnError,
    ShowAlert,
    AddORremoveFromArray,
    AddItemtoArray,
    RemoveItemFromArray,
    ConcatArray,
    formatBytes,
    changeFlag,
    SelectUnSelectItems,
};