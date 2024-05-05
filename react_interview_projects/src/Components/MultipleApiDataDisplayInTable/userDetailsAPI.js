export const lastNameAPI = (userName) => {
  console.log(userName);
  switch (userName) {
    case "gbhavalkar":
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({
            last_name: "bhavalkar",
            first_name: "gaurav",
            email: "gb@appzen.com",
            phone: "1234567890",
            location: "pune",
          });
        }, 2000);
      });

    case "tchoy":
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({
            last_name: "choy",
            first_name: "tiffany",
            email: "tc@appzen.com",
            phone: "0987654321",
            location: "san jose",
          });
        }, 2000);
      });

    case "ndhangar":
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({
            last_name: "Dhangar",
            first_name: "Nidhi",
            email: "nd@appzen.com",
            phone: "1236549870",
            location: "pune",
          });
        }, 5000);
      });

    default:
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          reject("Not Available");
        }, 2000);
      });
  }
};
