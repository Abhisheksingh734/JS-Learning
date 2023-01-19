const externalData = [
    {
      title : "How to code            ",
          aurthor: "Abhishek "
    },{
      title: "what is vim   ",
          aurthor: "    Abhishek   "
    },{
      title:"   How do loops work",
          aurthor : " Abhishek"
    }
];

for(let i=0;i<externalData.length;i++){
    const currentTitle = externalData[i].title;
    const  currentAurthor = externalData[i].aurthor;

    externalData[i].title= currentTitle.trim();
    externalData[i].aurthor= currentAurthor.trim();
}
console.log(externalData);