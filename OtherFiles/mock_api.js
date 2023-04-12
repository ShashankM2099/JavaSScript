const api_url = "https://restcountries.com/v3.1/all";
const getapi = async (url) => {
  return new Promise(async (resolve, reject) => {
    let boolean = true;
    const response = await fetch(url);
    var data = await response.json();

    for (let i = 0; i < data.length; i++) {
      var country_name = data[i].name.common;
      if (boolean) {
        resolve(console.log(country_name));
        if (data.length == data.length - 1) {
          break;
        }
      } else reject("Rejected Promise");
    }
    console.log("Total Countries: " + data.length);

    // console.log(data);
  });
};

getapi(api_url)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
