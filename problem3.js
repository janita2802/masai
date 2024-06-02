const files = [
    "document1.pdf",
    "document2.pdf",
    "image1.png",
    "text1.txt",
    "photo1.jpg",
    "program1.exe",
    "data1.csv",
    "report1.pdf"
  ];

let countFileExtensions = (files) =>{ 
    return files.reduce((acc, file) => {
        let ftype  = file.split(".").pop();
        acc[ftype] = (acc[ftype] || 0)+1;
        return acc;
    }, {})  
}
const count = countFileExtensions(files);
console.log(count);