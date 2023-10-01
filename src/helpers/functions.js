export const filterDate = (date) => {
  const Time = new Date(date);

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const day = Time.getDate();
  const monthIndex = Time.getMonth();
  const year = Time.getFullYear();
  const monthAbbreviation = monthNames[monthIndex];

  const formattedDate = `${day} ${monthAbbreviation} , ${year}`;
  return formattedDate;
};

export const getSpecificData = (article, start, end) => {
  let filtered = article.slice(start, end);
  return filtered;
};

export const shortenString = (text , value) => {
  const splitData = text.split(" ");
  let values = "";
  for(let i=0; i<=value;i++){
    values += splitData[i] + " ";
  }
  values = values.replace(/undefined/g , "")
  const replacedText = values.replace(/\[\+\d+ chars\]/g, "");

  return replacedText;
};

export const removeEmailFromAuthorName =(author)=>{
  if(author !== null){
    const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,7}\b/g;
    const parenthesesPattern = /\(([^)]*)\)/g;
  
    let resultString = author.replace(parenthesesPattern, "$1");
    resultString = resultString.replace(emailPattern , '');
    
    let array = resultString.split(" ");
  
    const index = array.indexOf('');
  
    if (index > -1) {
      array.splice(index, 1);
    }
  
    let newArray = array.filter((item, index) => index < 2);
    
    return `${newArray[0]} ${newArray[1]}`;
  }
  else{
    return "Unknown Author"
  }
}

export const getEndPointOfURL = (url)=>{
  const endUrl = url.replace(/^http:\/\/localhost:5173\/(.*)$/ , "$1");
  return endUrl
}